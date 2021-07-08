<template>
  <v-container>
      <v-card
    :loading="loading"
    class="mx-auto my-12"
  
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="400"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>My first Bake with CakePHP</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <v-chip-group
      class="my-4"
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>I.T</v-chip>

        <v-chip>Personal</v-chip>

        <v-chip>CakePHP</v-chip>

      </v-chip-group>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
  </v-card>
  </v-container>
</template>

<script>


  export default {
    name: 'Detail',

    components: {
     
    },
  }
</script>
