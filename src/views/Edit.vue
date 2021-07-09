<template>
  <v-container>
    <h1>Edit the page</h1>
    <v-form ref="form" v-model="valid" lazy-validation v-if="selectedPost">
      <v-text-field v-model="selectedPost.title" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
      <v-textarea v-model="selectedPost.description" label="Description" required></v-textarea>

      <v-checkbox v-model="checkbox" label="Do you agree?" required></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Edit",

  created() {
    this.getPostById(this.$route.params.id)
  },
  computed: {
    ...mapState(["selectedPost"])
  },

  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
    ],
    description: "",

    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    ...mapActions(["getPostById", "updatePost"]),
    validate() {
      this.$refs.form.validate();
      this.updatePost(this.$route.params.id).then(()=>{
       this.$route.push('/')
        })
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
