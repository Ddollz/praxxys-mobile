<template>
  <base-layout order="true">
    <section class="mt-6">
      <v-text-field label="try our new Beef Bimbimbowl" variant="outlined" hide-details elevation="0" class="ma-0 mb-3 pa-0" v-model="search">
        <template v-slot:prepend-inner>
          <v-icon color="red">mdi-magnify</v-icon>
        </template>
        <template v-slot:append-inner>
          <v-icon color="red">mdi-tune</v-icon>
        </template>
      </v-text-field>
      <v-sheet class="mx-auto" max-width="600">
        <v-slide-group>
          <v-slide-group-item v-for="n in filterOption" :key="n">
            <v-btn variant="plain" class="ma-2 filter-btn text-none" :class="n == selectedFilter ? 'selected' : ''" @click="onCardClick(n)">{{ n }}</v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </section>

    <section class="mt-6">
      <div>
        <v-row>
          <v-col v-for="(item, index) in getItems" :key="index" cols="6" >
            <router-link :to="'/order/' + item.id" style="text-decoration: none; color: inherit;">
              <v-card elevation="0" color="#E9ECEF" style="border-radius: 15px" :router-link="'/order/' + item.id">
                <v-card-item>
                  <v-card-title>
                    <ion-img :src="item.img" srcset="" alt="" style="width: 130px; height: 130px;" ></ion-img>

                    <span style="font-size: 14px; font-weight: 700; text-decoration:none">{{ item.label }}</span>
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
            </router-link>
          </v-col>
        </v-row>
      </div>
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
      filterOption: ['All', 'Breakfast', 'Chicken', 'Seafood', 'Dessert', 'Beef'],
      selectedFilter: 'All',
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
    };
  },
  methods: {
    onCardClick(data) {
      console.log(data);
      this.selectedFilter = data;
    },
  },
  computed: {
    getItems() {
      let returnData = _.cloneDeep(this.items);
      if (this.selectedFilter != 'All') {
        returnData = returnData.filter((item) => item.sublabel == this.selectedFilter);
        console.log('this.selectedFilter', this.selectedFilter);
      }
      if (this.search) {
        returnData = returnData.filter((item) => item.sublabel.toLowerCase().includes(this.search.toLowerCase()) || item.label.toLowerCase().includes(this.search.toLowerCase()));
      }
      return returnData;
    },
  },
};
</script>
<style scoped>
.mdi-magnify {
  color: red !important;
}
</style>
