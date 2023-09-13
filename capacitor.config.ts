import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'glossary-app',
  webDir: 'dist/glossary-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
