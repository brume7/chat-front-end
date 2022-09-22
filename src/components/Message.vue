<template>
  <v-container class="form col-sm-8 offset-sm-2">
      <v-card>
        <v-toolbar color="dark" app>
          <v-toolbar-title class="text-light">Message</v-toolbar-title>
        </v-toolbar>
        <v-card-text v-cloak>
          {{ message.text}}
        </v-card-text>
      </v-card>
  </v-container>
</template>
<script>
export default {
  name: "NewMessage",
  data() {
    return {
      message:'',
    };
  },
  async created (){
    this.message = (await (this.$store.dispatch("GET_MESSAGE", this.$route.params.id))).data;
  },
  methods: {
    
  },
};
</script>