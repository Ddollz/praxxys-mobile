<template lang="">
  <ion-page>
    <ion-header collapse="fade" v-if="points">
      <ion-toolbar>
        <div class="d-flex flex-row justify-space-between">
          <ion-buttons>
            <ion-back-button color="danger"></ion-back-button>
            <h2 class="font-weight-bold">
              {{ selectedOrder.sublabel }}
            </h2>
          </ion-buttons>

          <div class="d-flex align-center mr-6">
            <v-badge :content="cart.getProductsLength" @click="$router.push('checkout')" color="amber">
              <ion-img src="../assets/cart.svg" alt="" width="22" />
            </v-badge>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-header collapse="fade" v-else-if="order">
      <ion-toolbar>
        <div class="d-flex flex-row justify-space-between">
          <ion-buttons>
            <ion-menu-toggle class="ma-4">
              <ion-img src="../assets/menu.svg" alt="" />
            </ion-menu-toggle>

            <h2 class="font-weight-bold">Our Foods</h2>
          </ion-buttons>

          <div class="d-flex align-center mr-6">
            <v-badge :content="cart.getProductsLength" @click="$router.push('checkout')" color="amber">
              <ion-img src="../assets/cart.svg" alt="" width="22" />
            </v-badge>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-header collapse="fade" v-else-if="checkout">
      <ion-toolbar>
        <div class="d-flex flex-row justify-space-between">
          <ion-buttons>
            <ion-back-button color="danger"></ion-back-button>
            <h2 class="font-weight-bold">Order Summary</h2>
          </ion-buttons>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-header collapse="fade" v-else-if="customHeader" :class="borderHeader ? 'ion-no-border' : 'ion-no-border'">
      <ion-toolbar>
        <div class="d-flex flex-row justify-space-between">
          <ion-buttons>
            <ion-menu-toggle class="ma-4">
              <ion-img src="../assets/menu.svg" alt="" />
            </ion-menu-toggle>
            <h2 class="font-weight-bold">{{ title }}</h2>
          </ion-buttons>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-header collapse="fade" v-else>
      <ion-toolbar>
        <div class="d-flex flex-row justify-space-between">
          <ion-buttons>
            <ion-menu-toggle class="ma-4">
              <ion-img src="../assets/menu.svg" alt="" />
            </ion-menu-toggle>
          </ion-buttons>

          <div class="d-flex align-center justify-center font-weight-bold" @click="$router.push('loyaltyPoints')">
            <ion-img src="../assets/crown.svg" alt="" class="mr-6" srcset="" />
            0 Points
            <v-icon icon="mdi-chevron-right" color="red" />
          </div>

          <div class="mr-6 d-flex align-center">
            <v-avatar color="surface-variant" size="32">
              <ion-img src="../assets/avatar.svg" alt="" srcset="" />
            </v-avatar>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="px-3">
        <slot></slot>

        <v-dialog v-model="dialogCart" v-if="points" width="auto" style="border-radius: 16px">
          <v-card max-width="400" style="border-radius: 16px" class="pa-6">
            <v-card-item>
              <div class="d-flex align-center justify-center text-center flex-column">
                <ion-img :src="'../assets/positivevote.svg'" alt="" style="width: 64px; height: 64px" />

                <v-card-title>Successfully Added!</v-card-title>
                <v-card-subtitle>What do you want to do now ?</v-card-subtitle>
              </div>
            </v-card-item>
            <v-card-text class="d-flex align-center justify-space-between flex-column">
              <v-btn @click="dialogCart = false" to="/checkout" class="text-none mb-3" color="#D71921" rounded>Proceed To Check Out</v-btn>
              <v-btn @click=";(dialogCart = false), $router.go(-1)" class="text-none" style="font-weight: bold" color="#D71921" variant="plain">Add More</v-btn>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </ion-content>

    <ion-footer class="ion-no-border" v-if="footer">
      <ion-toolbar class="footer-toolbar">
        <div class="d-flex align-end justify-end">
          <v-btn color="#D71921" width="140px" height="40px" class="mr-6 text-none">Order Now!</v-btn>
        </div>
      </ion-toolbar>
    </ion-footer>

    <ion-footer class="ion-no-border pa-2" v-if="order">
      <v-btn color="#D71921" width="100%" height="40px" class="text-none" @click="cart.addProduct(selectedOrder), (dialogCart = true)">Add To Bag</v-btn>
    </ion-footer>

    <ion-footer v-if="checkout">
      <ion-toolbar>
        <div class="d-flex align-center justify-space-between">
          <p style="font-size: 14px" class="ml-4">
            Grand Total<br />
            <span class="font-weight-bold" style="font-size: 16px"> P {{ cart.getProductsTotalPay }}</span>
          </p>
          <div class="d-flex align-end justify-end">
            <v-btn color="#D71921" width="140px" height="40px" class="mr-6 text-none" @click="$router.push('orderSucess')" rounded>Place Order</v-btn>
          </div>
        </div>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>
<script>
import { IonContent } from "@ionic/vue"
import { useCartStore } from "../store/cart"
export default {
  props: ["footer", "order", "points", "checkout", "selectedOrder", "customHeader","borderHeader", "title"],
  components: {
    IonContent
  },
  data() {
    return {
      cart: useCartStore(),
      dialogCart: false
    }
  }
}
</script>
<style scoped>
.footer-toolbar {
  --background: transparent;
  --color: white;

  --border-color: #f24aec;
  --border-width: 0 0;
  --border-style: none;
  box-shadow: none !important;
}
</style>
