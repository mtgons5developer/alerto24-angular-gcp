import { CapacitorConfig } from '@capacitor/cli';
import { environment } from './src/environments/environment';

const config: CapacitorConfig = {
  appId: 'com.alerto24.app',
  appName: 'Alerto24',
  webDir: 'www',
  plugins: {
    "GoogleMaps": {
      "apiKey": environment.googleMapsApiKey
    }
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
