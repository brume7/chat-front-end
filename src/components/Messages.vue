<template>
  <v-container class="col-sm-8 offset-sm-2">
    <v-card>
      <v-toolbar color="dark" app>
        <v-toolbar-title class="text-light">Messages</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-item
          v-for="(item, i) in $store.state.messages.data"
          :key="i"
          :to="'message/' + i"
        >
          <v-list-item-title>{{ item.user }}</v-list-item-title>
          <v-list-subheader>{{ item.text }}</v-list-subheader>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Messages",
  beforeCreate() {
    if (!this.$store.state.token) {
      this.$router.push('/register');
    }
    this.$store.dispatch("GET_MESSAGES");
  },
};
</script>