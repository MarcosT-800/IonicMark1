<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      This is the menu content.
    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
    <ion-item>
      <ion-label>Pokémon Yellow</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Mega Man X</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>The Legend of Zelda</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Pac-Man</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Super Mario World</ion-label>
    </ion-item>
  </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenu, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem, IonLabel, IonList
  },
});
</script>