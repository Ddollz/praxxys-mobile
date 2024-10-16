<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="d-flex align-center justify-start flex-column px-5" style="height: 100vh">
        <ion-img :src="'../assets/positivevote.svg'" alt="" style="width: 161px; height: 161px; margin-bottom: 30px; margin-top: 100px" />
        <h1 class="font-weight-bold text-center">Order Reveived!</h1>

        <p class="subtitle text-center">Your order No. 19049 has successfully take and now being processed. Kindly wait for our notification regarding your order.</p>
        <div class="mt-auto w-100 d-flex align-center flex-column">
          <v-btn color="#D71921" width="100%" height="40px" class="text-none" rounded @click="$router.push('home')">Track Oder</v-btn>
          <v-btn @click="$router.push('home')" class="text-none" style="font-weight: bold" color="#D71921" variant="plain">Back to Home</v-btn>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import "swiper/css"
import "@ionic/vue/css/ionic-swiper.css"
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
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
