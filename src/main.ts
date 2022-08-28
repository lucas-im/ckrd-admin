import { createApp } from 'vue';
import { initializeApp } from 'firebase/app';
import App from './App.vue';
import { setupDirectives } from './directives';
import { setupRouter } from './router';
import { setupAssets } from './plugins';
import { setupStore } from './store';

async function setupApp() {
  // import assets: js、css
  setupAssets();

  const app = createApp(App);

  // store plugin: pinia
  setupStore(app);

  // vue custom directives
  setupDirectives(app);

  // vue router
  await setupRouter(app);

  // mount app
  app.mount('#app');
}

export const fbApp = initializeApp({
  apiKey: 'AIzaSyBwkL32Qh-fDny_vfPo8uPkxfrxqGXzodA',
  authDomain: 'cryptokrd-913a1.firebaseapp.com',
  projectId: 'cryptokrd-913a1',
  storageBucket: 'cryptokrd-913a1.appspot.com',
  messagingSenderId: '414474782011',
  appId: '1:414474782011:web:17f2c5347dbb1b584d231e',
  measurementId: 'G-WST2B29GLW'
});

setupApp();
