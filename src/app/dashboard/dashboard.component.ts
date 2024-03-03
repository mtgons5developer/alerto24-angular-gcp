import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
    this.loadMap();
  }

  async loadMap() {
    const mapElement = document.getElementById('map');
    if (mapElement) { // Check that mapElement is not null
      try {
        await GoogleMap.create({
          element: mapElement, // TypeScript now knows mapElement is an HTMLElement
          apiKey: 'AIzaSyA_fcN-1XJTEx4po2XljAvpToroTMDzBLc', // Use your actual API key here
          config: {
            center: {
              lat: 37.7749,
              lng: -122.4194,
            },
            zoom: 12,
          },
          id: ''
        });
      } catch (error) {
        console.error('Error creating map', error);
      }
    } else {
      console.error('Map element not found');
    }
  }
}
