import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

const vuetify = createVuetify({

  icons: {
    defaultSet: 'mdi',
  },
  components,
  directives,
})
const pinia = createPinia()

import { IonicVue, IonPage, IonTitle, IonCardTitle, IonBackButton, IonContent, IonMenuToggle, IonFooter, IonGrid, IonRow, IonCol, IonIcon, IonButtons, IonButton, IonCard, IonCardContent, IonToolbar, IonHeader, IonCardSubtitle, IonCardHeader, IonImg, IonAvatar } from '@ionic/vue';


/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
// import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import './theme/core.css';

import BaseLayout from './layout/base-layout.vue';

const app = createApp(App)
  .use(pinia)
  .use(IonicVue)
  .use(router)
  .use(vuetify);

app.component('base-layout', BaseLayout)

app.component('ion-page', IonPage)
app.component('ion-content', IonContent)
app.component('ion-grid', IonGrid)
app.component('ion-row', IonRow)
app.component('ion-col', IonCol)
app.component('ion-icon', IonIcon)
app.component('ion-buttons', IonButtons)
app.component('ion-button', IonButton)
app.component('ion-card', IonCard)
app.component('ion-card-content', IonCardContent)
app.component('ion-back-button', IonBackButton)
app.component('ion-title', IonTitle)
app.component('ion-card-title', IonCardTitle)
app.component('ion-toolbar', IonToolbar)
app.component('ion-header', IonHeader)
app.component('ion-footer', IonFooter)
app.component('ion-card-subtitle', IonCardSubtitle)
app.component('ion-card-header', IonCardHeader)
app.component('ion-img', IonImg)
app.component('ion-avatar', IonAvatar)
app.component('ion-menu-toggle', IonMenuToggle)

router.isReady().then(() => {
  app.mount('#app');
});
