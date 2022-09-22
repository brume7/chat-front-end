<template>
  <v-container class="form col-sm-8 offset-sm-2">
    <v-form @submit.prevent="login">
      <v-card>
        <v-toolbar color="dark" app>
          <v-toolbar-title class="text-light">Login</v-toolbar-title>
        </v-toolbar>
        <v-container>
          <v-text-field
            v-model="userName"
            name="username"
            label="User Name"
            required
          ></v-text-field
          ><v-text-field
            type="password"
            v-model="password"
            label="Password"
            required
          ></v-text-field>
          <v-btn color="success" class="mr-4" @click.stop="login">
            Login
          </v-btn>
        </v-container>
      </v-card>
    </v-form>
  </v-container>
</template>
<script>
export default {
  name: "NewMessage",
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch("LOGIN", {
        userName: this.userName,
        password: this.password,
      });

      this.userName = "";
      this.password = "";
      this.$router.push("/messages");
    },
  },
  beforeCreate() {
    if (this.$store.state.token) {
      this.$router.push("/");
    }
  },
};
</script>