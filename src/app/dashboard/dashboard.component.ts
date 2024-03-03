import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from '../../environments/environment'; // Import the environment file

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
        const coordinates = await this.getCurrentPosition();
        if (coordinates) {
          await GoogleMap.create({
            element: mapElement, // TypeScript now knows mapElement is an HTMLElement
            apiKey: environment.googleMapsApiKey, // Use the API key from environment file
            config: {
              center: {
                lat: coordinates.coords.latitude,
                lng: coordinates.coords.longitude,
              },
              zoom: 12,
            },
            id: ''
          });
        } else {
          console.error('Error getting current position');
        }
      } catch (error) {
        console.error('Error creating map', error);
      }
    } else {
      console.error('Map element not found');
    }
  }

  async getCurrentPosition(): Promise<GeolocationPosition | null> {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      return position;
    } catch (error) {
      console.error('Error getting current position:', error);
      return null;
    }
  }
}
