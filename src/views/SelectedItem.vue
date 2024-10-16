<template>
  <base-layout :order="true" points="true" :selectedOrder="getItem">
    <section class="mt-6">
      <div style="width: 342px; height: 239px; background-color: #e9ecef; border-radius: 15px" class="d-flex align-center justify-center">
        <ion-img :src="getItem.img" srcset="" alt="" style="width: 258px; height: 174px"></ion-img>
      </div>
      <p class="font-weight-bold my-5">{{ getItem.label }}</p>

      <div class="d-flex">
        <ion-img src="../assets/star/star.svg" alt="" srcset="" style="width: 20px" />
        <ion-img src="../assets/star/star.svg" alt="" srcset="" style="width: 20px" />
        <ion-img src="../assets/star/star.svg" alt="" srcset="" style="width: 20px" />
        <ion-img src="../assets/star/star.svg" alt="" srcset="" style="width: 20px" />
        <ion-img src="../assets/star/starhalf.svg" alt="" srcset="" style="width: 20px" />
      </div>

      <p class="mt-5" style="font-size: 14px; color: #6c757d">{{ getItem.description }}</p>

      <v-card-text class="d-flex align-center justify-space-between mx-0 px-0">
        <h1 style="color: red; font-weight: 700">P {{ getItem.total }}</h1>
        <div class="d-flex align-center justify-space-between">
          <ion-img src="../assets/minus.svg" alt="" srcset="" style="width: 32px" class="mr-5" @click="quantity > 1 ? quantity-- : quantity" />
          <h3 class="font-weight-bold mr-5">{{ quantity }}</h3>
          <ion-img src="../assets/plus.svg" alt="" srcset="" style="width: 32px" @click="quantity++" />
        </div>
      </v-card-text>
    </section>
    <section class="mt-1">
      <div class="section-title mb-3">
        <h1 style="font-weight: 700">Beverages</h1>
      </div>
      <v-select label="Choose Beverages" :items="['Coke', 'Sprite', 'Royal']" variant="outlined" hide-details v-model="beverage.drink"></v-select>

      <v-sheet class="mx-auto my-3 d-flex align-center justify-center">
        <v-slide-group>
          <v-slide-group-item v-for="n in filterOption" :key="n">
            <v-btn variant="plain" class="ma-2 filter-btn text-none" :class="n == selectedBeverage ? 'selected' : ''" @click="onCardClick(n)">{{ n }}</v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </section>

    <section class="mt-1">
      <div class="section-title mb-3">
        <h1 style="font-weight: 700">Add-Ons</h1>
      </div>
      <v-row>
        <v-col v-for="(item, index) in itemsAddons" :key="index" cols="12" sm="6">
          <v-card elevation="0" color="#E9ECEF" style="border-radius: 15px" class="d-flex">
            <v-card-item>
              <v-card-title>
                <ion-img :src="item.img" srcset="" alt="" style="width: 78px; height: 78px; object-fit: scale-down" class="sliderimg"></ion-img>
              </v-card-title>
            </v-card-item>

            <div class="flex-1-1-100 pr-5 pb-3">
              <div class="d-flex align-center justify-space-between">
                <div class="text-left">
                  <span class="text-left" style="font-size: 14px; font-weight: 700">{{ item.label }}</span>
                  <v-card-subtitle class="pa-0" style="opacity: 100">{{ item.sublabel }}</v-card-subtitle>
                </div>
                <div>
                  <v-checkbox color="orange" :value="item" @click="item.selected = !item.selected"></v-checkbox>
                </div>
              </div>
              <div class="d-flex align-center justify-space-between">
                <div style="color: red; font-weight: 700" class="mr-5">P {{ item.total }}</div>
                <v-card-text class="d-flex align-center justify-space-between ma-0 pa-0">
                  <ion-img src="../assets/minus.svg" alt="" srcset="" style="width: 32px" class="mr-5" @click="decrementAddon(item)" :disabled="item.quantity <= 1" />
                  <h3 class="font-weight-bold mr-5">{{ item.quantity }}</h3>
                  <ion-img src="../assets/plus.svg" alt="" srcset="" style="width: 32px" @click="incrementAddon(item)" />
                </v-card-text>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </base-layout>
</template>
<script>
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
import _ from 'lodash';
export default {
  data() {
    return {
      filterOption: ['Regular', 'Large', 'X-Large'],
      selectedBeverage: 'All',
      search: '',
      items: [
        {
          id: 1,
          label: 'Steak Fries Veggies',
          sublabel: 'Meat',
          img: '../assets/order/meat 1.png',
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
          star: '4.5',
          price: 175,
          total: 175,
        },
        {
          id: 2,
          label: 'Chicken Salad',
          sublabel: 'Chicken',
          img: '../assets/order/chicken 1.png',
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
          star: '4.5',
          price: 172,
          total: 172,
        },
        {
          id: 3,
          label: 'Sorvetes Primavera',
          sublabel: 'Dessert',
          img: '../assets/order/dessert 1.png',
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
          star: '4.5',
          price: 185,
          total: 185,
        },
        {
          id: 4,
          label: 'Fried Chiken',
          sublabel: 'Chicken',
          img: '../assets/order/chicken 2.png',
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
          star: '4.5',
          price: 175,
          total: 175,
        },
        {
          id: 5,
          label: 'Steak Fries Veggies',
          sublabel: 'Meat',
          img: '../assets/order/meat 1.png',
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
          star: '4.5',
          price: 175,
          total: 175,
        },
        {
          id: 6,
          label: 'Chicken Salad',
          sublabel: 'Chicken',
          img: '../assets/order/chicken 1.png',
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
          star: '4.5',
          price: 172,
          total: 172,
        },
        {
          id: 7,
          label: 'Sorvetes Primavera',
          sublabel: 'Dessert',
          img: '../assets/order/dessert 1.png',
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
          star: '4.5',
          price: 185,
          total: 185,
        },
        {
          id: 8,
          label: 'Fried Chiken',
          sublabel: 'Chicken',
          img: '../assets/order/chicken 2.png',
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
          star: '4.5',
          price: 175,
          total: 175,
        },
      ],
      itemsAddons: [
        {
          id: 1,
          label: 'Tomato Sauce',
          sublabel: 'Sauce',
          img: '../assets/order/souce.png',
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
          price: 175,
          total: 175,
          quantity: 1,
          selected: false,
        },
        {
          id: 2,
          label: 'White Rice',
          sublabel: 'Rice',
          img: '../assets/order/whiterice.png',
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
          total: 172,
          price: 172,
          quantity: 1,
          selected: false,
        },
      ],
      quantity: 1,
      beverage: {},
    };
  },
  methods: {
    onCardClick(data) {
      this.selectedBeverage = data;
      this.beverage.size = data;
    },
    decrementAddon(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
      item.total = item.quantity * item.price;
    },
    incrementAddon(item) {
      item.quantity++;
      item.total = item.quantity * item.price;
    },
  },
  computed: {
    getItem() {
      let returnData = _.cloneDeep(this.items).filter((e) => e.id == this.$route.params.id);
      if (returnData.length > 0) {
        if (this.beverage) returnData[0].beverage = _.cloneDeep(this.beverage);
        returnData[0].itemsAddons = this.itemsAddons.filter((e) => e.selected == true);
        returnData[0].quantity = this.quantity;
        let total = 0
        for (let i = 0; i < returnData[0].itemsAddons.length; i++) {
          total += returnData[0].itemsAddons[i].total
        }
        returnData[0].total = (this.quantity * returnData[0].price);
        returnData[0].totalPay = returnData[0].total + total;
        return returnData[0];
      }else{
        return {};
      }
    },
  },
};
</script>
<style scoped>
.mdi-magnify {
  color: red !important;
}
.selected {
  background-color: #ffc02e;
}
</style>
