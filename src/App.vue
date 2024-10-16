<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <div class="d-flex align-center justify-start ml-4">
              <div class="mr-6">
                <v-avatar color="surface-variant" size="56">
                  <ion-img src="../assets/avatar.svg" alt="" srcset="" />
                </v-avatar>
              </div>
              <div class="d-flex align-center justify-center font-weight-bold" @click="$router.push('loyaltyPoints')">
                <ion-img src="../assets/crown.svg" alt="" class="mr-6"  srcset=""/>
                0 Points
                <v-icon icon="mdi-chevron-right" color="red" />
              </div>

            </div>
            <ion-list-header>Chou Tzuyu</ion-list-header>

            <ion-note style="font-size: 12px">+63 912 345 6789</ion-note>

            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in menu1" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" :detail="false" class="hydrated" :class="{ selected: selectedIndex === i }" >
                <ion-img :src="selectedIndex !== i ? p.logoSrc : p.logoSrcSelected" srcset="" alt="" width="22" class="mr-6" />
                <p class="font-weight-bold">{{ p.title }}</p>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list id="labels-list">
            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in menu2" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" :detail="false" class="hydrated" >
                <ion-img :src="p.logoSrc" width="22" class="mr-6" />
                <!-- :class="{ selected: selectedIndex === i }" -->
                <p class="font-weight-bold">{{ p.title }}</p>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
          <v-btn color="red text-none" class="px-6 " elevation="0" rounded="lg" >Logout</v-btn>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup>
import { IonApp, IonContent, IonItem, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { ref } from 'vue';

const selectedIndex = ref(0);
const menu1 = [
  {
    title: 'Home',
    url: '/',
    logoSrc: '../assets/logo.svg',
    logoSrcSelected: '../assets/logo.svg',
  },
  {
    title: 'Order Now!',
    url: '/order',
    logoSrc: '../assets/meat.svg',
    logoSrcSelected: '../assets/meat2.svg',
  },
  {
    title: 'Notifications',
    url: '/folder/notofication',
    logoSrc: '../assets/bell.svg',
    logoSrcSelected: '../assets/bell.svg',
  },
  {
    title: 'Store Locator',
    url: '/folder/store',
    logoSrc: '../assets/store.svg',
    logoSrcSelected: '../assets/store.svg',
  },
  {
    title: "Faq's",
    url: '/folder/faqs',
    logoSrc: '../assets/question-mark.svg',
    logoSrcSelected: '../assets/question-mark.svg',
  },
];
const menu2 = [
  {
    title: 'My Orders',
    url: '/home',
    logoSrc: '../assets/shopping.svg',
    logoSrcSelected: '../assets/shopping.svg',
  },
  {
    title: 'My Account',
    url: '/folder/Outbox',
    logoSrc: '../assets/placeholder.svg',
    logoSrcSelected: '../assets/placeholder.svg',
  },
  {
    title: 'My Favorites',
    url: '/folder/Favorites',
    logoSrc: '../assets/heart.svg',
    logoSrcSelected: '../assets/heart.svg',
  },
  {
    title: 'Order Tracker',
    url: '/folder/Archived',
    logoSrc: '../assets/location-marker.svg',
    logoSrcSelected: '../assets/location-marker.svg',
  },
  {
    title: 'Order History',
    url: '/folder/Trash',
    logoSrc: '../assets/history.svg',
    logoSrcSelected: '../assets/history.svg',
  },
];

const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
  let combineMenuArr = menu1.concat(menu2);
  selectedIndex.value = combineMenuArr.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-background-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
