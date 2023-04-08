import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'my',
  webDir: 'out',
  bundledWebRuntime: false,
  server:{
    url:'http:192.168.43.55:3000',
    cleartext:true
  }
};

export default config;
