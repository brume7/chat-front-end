<template>
  <v-container class="form col-sm-8 offset-sm-2">
    <v-form @submit.prevent="submit">
      <v-card>
        <v-container>
          <v-text-field
            v-model="messageBody"
            label="message"
            required
          ></v-text-field>
          <v-btn color="success" class="mr-4" @click.stop="submit">
            Send
          </v-btn>
        </v-container>
      </v-card>
    </v-form>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  name: "NewMessage",
  data() {
    return {
      messageBody: "",
    };
  },
  methods: {
    async submit() {
      if (this.messageBody == "") {
        return "";
      } else {
        try {
          await axios.post("https://chat-sever-back-end.herokuapp.com/messages", {
            message: this.messageBody,
          });
          this.$store.dispatch("GET_MESSAGES");
          this.messageBody = "";
          this.$router.push("/messages");
        } catch (error) {
          alert("disconnected");
        }
      }
    },
  },
};
</script>