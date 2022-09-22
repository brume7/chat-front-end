<template>
  <v-app>
    <v-toolbar color="white" height="50" app>
      <v-toolbar-title>Messenger</v-toolbar-title>
      <v-btn flat v-if="$store.state.token" to="/">Messages</v-btn>
      <v-btn flat v-if="$store.state.token" to="/newmessage"
        >New messages</v-btn
      >
      <v-btn flat v-if="!$store.state.token" to="/register">Register</v-btn>
      <v-btn flat v-if="!$store.state.token" to="/login">LOGIN</v-btn>
      <v-btn
        flat
        v-if="$store.state.token"
        color="danger"
        @click="
          () => {
            $store.dispatch('LOGOUT');
            $router.push('/login');
          }
        "
        >LOG OUT</v-btn
      >
    </v-toolbar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Messages from "./components/Messages.vue";
import NewMessage from "./components/NewMessage.vue";

export default {
  name: "App",

  components: {
    Messages,
    NewMessage,
  },

  data: () => ({}),
};
</script>
