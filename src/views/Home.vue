<template>
  <v-container>
    <h2>My posts</h2>
    <v-divider class="mx-4" inset vertical></v-divider>
    <v-spacer></v-spacer>
    <v-btn color="primary" dark @click="addNewItem()" class="mb-2">New Item</v-btn>
    <v-data-table :headers="headers" :items="posts" :items-per-page="5" class="elevation-1">
      <template v-slot:item="row">
        <tr>
          <td>{{row.item.title}}</td>
          <td>{{row.item.description}}</td>
          <td>
            <v-btn class="mx-2" fab dark small color="pink" @click="editPressed(row.item)">
              <v-icon dark>mdi-pencil</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="pink" @click="deletePressed(row.item)">
              <v-icon dark>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  created() {
    this.getPosts();
  },
  computed: {
    ...mapState(["posts"]),
    headers() {
      return [
        {
          text: "Title",
          value: "title"
        },
        {
          text: "Description",
          value: "description"
        }
      ];
    }
  },
  methods: {
    ...mapActions(["getPosts"]),
    editPressed(item) {
       this.$router.push(`edit/${item.id}`);
    },
    deletePressed(item) {
      console.log(item);
    },
    addNewItem(){
      this.$router.push('add');
    }
  }
};
</script>