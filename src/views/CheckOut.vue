<template>
  <base-layout checkout="true">
    <section class="mt-6">
      <div>
        <div class="d-flex align-center flex-row">
          <div style="width: 326px; height: 103px; background-color: #e9ecef; border-radius: 15px" class="d-flex align-start justify-center flex-column mb-2 px-4" :class="editOption ? 'mr-2' : ''">
            <p class="font-weight-bold mb-2">Chou Tzuyu</p>

            <p class="subtitle">+63 912 345 6789</p>
            <p class="subtitle">chou.tzu-yu@gmail.com</p>
          </div>
          <ion-img src="../assets/dotsvertical.svg" alt="" srcset="" class="mx-2" @click="editOption = !editOption" v-if="!editOption"></ion-img>
          <template v-else-if="editOption">
            <div style="width: 44px; height: 103px; background-color: #FD7E1433; border-radius: 15px; color:#FD7E14;" class="d-flex align-center justify-center flex-column mb-2 mr-2 px-4">
              <v-icon>mdi-pencil-outline</v-icon>
            </div>
            <div style="width: 44px; height: 103px; background-color: #DC354533; border-radius: 15px; color:#DC3545;" class="d-flex align-center justify-center flex-column mb-2 px-4">
              <v-icon>mdi-trash-can-outline</v-icon>
            </div>
          </template>
        </div>

        <div class="d-flex align-center flex-row">
          <div style="width: 326px; height: 103px; background-color: #e9ecef; border-radius: 15px" class="d-flex align-start justify-center flex-column mb-2 px-4">
            <p class="font-weight-bold mb-2">My Home Address</p>

            <p class="subtitle">No. 21 St. Agustin Street, Brgy. De Jose Delgado City 2234 Philippines</p>
          </div>
          <ion-img src="../assets/dotsvertical.svg" alt="" srcset="" class="mx-2"></ion-img>
        </div>
        <div class="d-flex align-center flex-row">
          <div style="width: 326px; height: 103px; background-color: #e9ecef; border-radius: 15px" class="d-flex align-start justify-center flex-column mb-2 px-4">
            <p class="font-weight-bold mb-2">Work/Office</p>

            <p class="subtitle">3rd flr Anyeong Bldg, Seareal St. Joaqin City 2345 Philippines</p>
          </div>
          <ion-img src="../assets/dotsvertical.svg" alt="" srcset="" class="mx-2"></ion-img>
        </div>
      </div>
    </section>

    <section class="mt-6">
      <div class="section-title my-3">
        <h3 style="font-weight: 700">Orders</h3>
      </div>

      <div class="d-flex align-center flex-row" v-for="(c, index) in cart.getProducts" :key="index">
        <div style="height: 181px; background-color: #e9ecef; border-radius: 15px" class="d-flex align-start justify-center flex-column w-100 mb-2 px-4">
          <v-row>
            <v-col cols="3" class="d-flex align-center justify-center">
              <ion-img src="../assets/order/chicken 1.png" alt="" srcset="" style="width: 350px; height: 100px" class="mx-2"></ion-img>
            </v-col>
            <v-col class="d-flex align-start justify-center flex-column">
              <p class="font-weight-bold mb-2">{{ c.label }}</p>
              <p class="subtitle" style="color: black" v-for="(addon, addonIndex) in c.itemsAddons" :key="addonIndex">{{ addon.quantity }}x {{ addon.label }}</p>
            </v-col>
          </v-row>

          <div class="d-flex align-center justify-space-between mx-0 px-0 w-100 mb-5">
            <h1 style="color: red; font-weight: 700">P {{ c.totalPay }}</h1>
            <div class="d-flex align-center justify-space-between">
              <ion-img src="../assets/minus.svg" alt="" srcset="" style="width: 32px" class="mr-5" @click="decrementAddon(index)" />
              <h3 class="font-weight-bold mr-5" v-if="c.quantityFinal">{{ c.quantityFinal }}</h3>
              <h3 class="font-weight-bold mr-5" v-else>1</h3>
              <ion-img src="../assets/plus.svg" alt="" srcset="" style="width: 32px" @click="incrementAddon(index)" />
            </div>
          </div>
        </div>
        <ion-img src="../assets/dotsvertical.svg" alt="" srcset="" class="mx-2"></ion-img>
      </div>
    </section>
    <section class="mt-6">
      <div class="section-title my-3">
        <h3 style="font-weight: 700">Payment Option</h3>
      </div>
      <v-radio-group color="amber-lighten-2" v-model="paymentMode">
        <div style="height: 79px; background-color: #e9ecef; border-radius: 15px" class="d-flex align-start justify-center flex-column mb-2 px-4">
          <div class="d-flex align-center justify-space-between mb-2 w-100">
            <p class="font-weight-bold">Loyalty Points <span style="color: red">(0 Points)</span></p>
            <div>
              <v-radio value="1" class="mx-2 float-right"></v-radio>
            </div>
          </div>

          <p class="subtitle">Pay using Earned loyalty points</p>
        </div>
        <div style="height: 79px; background-color: #e9ecef; border-radius: 15px" class="d-flex align-start justify-center flex-column mb-2 px-4">
          <div class="d-flex align-center justify-space-between mb-2 w-100">
            <ion-img src="../assets/payment/paypal.svg" alt="" srcset="" class="mx-2"></ion-img>
            <div>
              <v-radio value="2" class="mx-2 float-right"></v-radio>
            </div>
          </div>

          <p class="subtitle">A new tab will open to access your account</p>
        </div>

        <div style="height: 79px; background-color: #e9ecef; border-radius: 15px" class="d-flex align-start justify-center flex-column mb-2 px-4">
          <div class="d-flex align-center justify-space-between mb-2 w-100">
            <ion-img src="../assets/payment/paynamics.svg" alt="" srcset="" class="mx-2"></ion-img>
            <div>
              <v-radio value="3" class="mx-2 float-right"></v-radio>
            </div>
          </div>

          <p class="subtitle">Choose paynamics services available from you</p>
        </div>

        <div class="d-flex flex-row justify-space-between mt-5">
          <p class="font-weight-bold mb-2" style="font-size: 14px">Sub Total</p>
          <p class="font-weight-bold mb-2" style="font-size: 14px">P {{ cart.getProductsTotalPay }}</p>
        </div>
        <div class="d-flex flex-row justify-space-between">
          <p class="font-weight-bold mb-2" style="font-size: 14px">Delivery Charge</p>
          <p class="font-weight-bold mb-2" style="font-size: 14px">P 59</p>
        </div>

        <v-text-field persistent-placeholder label="Change for" v-model="change" placeholder="eg. 1,000" variant="outlined" hide-details elevation="0" class="ma-0 mb-3 mt-3" rounded> </v-text-field>
      </v-radio-group>
    </section>
  </base-layout>
</template>
<script>
import "swiper/css"
import "@ionic/vue/css/ionic-swiper.css"
import { useCartStore } from "../store/cart"
export default {
  data() {
    return {
      cart: useCartStore(),
      paymentMode: "",
      change: "",
      editOption: false
    }
  },
  mounted() {},
  methods: {
    decrementAddon(item) {
      this.cart.decrementQuantity(item)
    },
    incrementAddon(item) {
      this.cart.incrementQuantity(item)
    }
  },
  computed: {}
}
</script>
<style scoped>
.mdi-magnify {
  color: red !important;
}
.selected {
  background-color: #ffc02e;
}
</style>
