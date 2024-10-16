<template>
  <base-layout customHeader="true" title="Loyalty Points" borderHeader="false">
    <section>
      <div class="d-flex align-center justify-space-between mt-5">
        <div style="font-size: 14px; font-weight: 700" class="d-flex align-center justify-space-between">
          <ion-img src="../assets/crown.svg" style="height: 48px; width: 48px" class="mr-4"></ion-img>
          Beginner Tier
        </div>
        <p style="font-size: 14px; font-weight: 700; color: red">
          View All
          <v-icon icon="mdi-chevron-right" color="red" />
        </p>
      </div>

      <p class="subtitle mt-3">Earn points by purchasing from our store. Vestibul ante ipsum primis</p>
      <div class="d-flex align-center justify-center">
        <v-progress-circular color="red" model-value="0" :size="190" :width="20" class="thiss">
          <template v-slot:default> <span style="color: #000; font-size: 25px; font-weight: 1000">0 / 160</span> </template>
        </v-progress-circular>
      </div>
    </section>

    <section class="mt-6">
      <div class="section-title my-3">
        <h3 style="font-weight: 700">Rewards</h3>

        <p style="font-size: 14px; font-weight: 700">
          How it Works
          <v-icon icon="mdi-chevron-right" color="red" />
        </p>
      </div>

      <v-sheet class="mx-auto" max-width="600">
        <v-slide-group>
          <v-slide-group-item v-for="n in filterOption" :key="n">
            <v-btn variant="plain" class="ma-2 filter-btn text-none" :class="n == selectedFilter ? 'selected' : ''">{{ n }}</v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
      <v-card elevation="0" color="#E9ECEF" style="border-radius: 15px" class="d-flex">
        <ion-img src="../assets/order/chicken 1.png" srcset="" alt="" style="width: 86px; height: 86px; margin: 10px 10px"></ion-img>
        <div class="d-flex flex-column justify-space-between my-4">
          <div>
            <p style="font-size: 14px; font-weight: 700; text-decoration: none">Steak Fries Veggies</p>

            <p class="subtitle" style="color: black">Meat</p>
          </div>

          <divv class="d-flex align-start">
            <ion-img src="../assets/crown.svg" style="height: 22px; width: 22px" class="mr-4"></ion-img>
            <span style="color: red; font-weight: 700">20 Points</span>
          </divv>
        </div>
      </v-card>
    </section>
  </base-layout>
</template>
<script>
export default {
  data() {
    return {
      filterOption: ["All", "Beginner", "Intermediate", "Loyal"],
      selectedFilter: "All"
    }
  },
  mounted() {},
  methods: {},
  computed: {}
}
</script>
<style>
.v-progress-circular .v-progress-circular__underlay {
  stroke: #d7192133 !important;
}
</style>
