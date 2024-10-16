<template>
  <base-layout :footer="true">
    <section>
      <div class="d-flex align-center justify-center py-5">
        <div class="mr-5">
          <ion-img src="../assets/Logo.png" style="width: 66px"></ion-img>
        </div>
        <div>
          <p style="font-size: 14px">Aneoyong, Chou!</p>
          <h1 style="font-weight: 700">What do you want to eat?</h1>
        </div>
      </div>

      <v-text-field label="try out new Steak Fries Veggies" variant="outlined" hide-details elevation="0" class="ma-0 pa-0">
        <template v-slot:prepend-inner>
          <v-icon>mdi-magnify</v-icon>
        </template>
      </v-text-field>
    </section>
    <section class="mt-6">
      <div class="section-title my-3">
        <h1 style="font-weight: 700">Special Offers</h1>

        <p style="font-size: 14px; font-weight: 700">
          View All
          <v-icon icon="mdi-chevron-right" color="red" />
        </p>
      </div>
      <div class="">
        <swiper :slides-per-view="1.2" :space-between="20">
          <swiper-slide>
            <ion-img src="../assets/home/Special Offer 1.png" style="width: 314px" class="sliderimg"></ion-img>
          </swiper-slide>
          <swiper-slide>
            <ion-img src="../assets/home/Special Offer 2.png" style="width: 314px" class="sliderimg"></ion-img>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="mt-6">
      <div class="section-title my-3">
        <h1 style="font-weight: 700">Category</h1>
      </div>
      <div class="">
        <swiper :slides-per-view="1.8" :space-between="20">
          <swiper-slide>
            <ion-img src="../assets/home/category 1.jpeg" style="height: 300px; width: 200px; object-fit: cover; filter: brightness(50%)" class="sliderimg"></ion-img>
            <div style="position: absolute; bottom: 10px; left: 10px; color: white" class="text-start">
              <p style="font-weight: 700">Chicken</p>
              <p style="font-size: 14px">9 Recipes</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <ion-img src="../assets/home/category 2.jpeg" style="height: 300px; width: 200px; object-fit: cover; filter: brightness(50%)" class="sliderimg"></ion-img>
            <div style="position: absolute; bottom: 10px; left: 10px; color: white" class="text-start">
              <p style="font-weight: 700">Seafoods</p>
              <p style="font-size: 14px">6 Recipes</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <section class="mt-6">
      <div class="section-title my-3">
        <h1 style="font-weight: 700">What's New?</h1>
      </div>
      <ion-img src="../assets/home/whatsnew 1.png" style="width: 100%" class="sliderimg"></ion-img>
    </section>

    <section class="mt-6">
      <div class="section-title my-3">
        <h1 style="font-weight: 700">Most Popular</h1>
      </div>
      <div>
        <v-row>
          <v-col v-for="(item, index) in items" :key="index" col="6">
            <v-card elevation="0" color="#E9ECEF" style="border-radius: 15px">
              <v-card-item>
                <v-card-title>
                  <ion-img :src="item.img" srcset="" alt="" style="width: 130px; height: 130px; object-fit: scale-down" class="sliderimg"></ion-img>

                  <span style="font-size: 14px; font-weight: 700">{{ item.label }}</span>
                </v-card-title>

                <v-card-subtitle style="opacity: 100">{{ item.sublabel }}</v-card-subtitle>
              </v-card-item>

              <v-card-text class="d-flex align-center justify-space-between">
                <span style="color: red; font-weight: 700">P {{ item.price }}</span>
                <div class="d-flex align-center justify-space-between">
                  <ion-img src="../assets/star/star.svg" alt="" srcset="" style="width: 12px" />
                  <ion-img src="../assets/star/star.svg" alt="" srcset="" style="width: 12px" />
                  <ion-img src="../assets/star/star.svg" alt="" srcset="" style="width: 12px" />
                  <ion-img src="../assets/star/star.svg" alt="" srcset="" style="width: 12px" />
                  <ion-img src="../assets/star/starhalf.svg" alt="" srcset="" style="width: 12px" />
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </section>
  </base-layout>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
import { useCartStore } from '../store/cart';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      cart: useCartStore(),
      items: [
        {
          label: 'Steak Fries Veggies',
          sublabel: 'Meat',
          img: '../assets/order/meat 1.png',
          star: '4.5',
          price: 175,
        },
        {
          label: 'Chicken Salad',
          sublabel: 'Chicken',
          img: '../assets/order/chicken 1.png',
          star: '4.5',
          price: 172,
        },
        {
          label: 'Sorvetes Primavera',
          sublabel: 'Dessert',
          img: '../assets/order/dessert 1.png',
          star: '4.5',
          price: 185,
        },
        {
          label: 'Fried Chiken',
          sublabel: 'Chicken',
          img: '../assets/order/chicken 2.png',
          star: '4.5',
          price: 175,
        },
      ],
    };
  },
};
</script>
<style scoped>
.mdi-magnify {
  color: red !important;
}
</style>
