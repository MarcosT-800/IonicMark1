import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'nome-do-seu-projeto',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
