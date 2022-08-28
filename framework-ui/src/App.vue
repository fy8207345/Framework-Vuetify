<template>
  <v-app>
    <v-main>
      <loginPage />
    </v-main>
  </v-app>
</template>

<script>
import loginPage from "@/views/loginPage";

export default {
  name: 'App',

  components: {
    loginPage,
  },

  data: () => ({
    //
  }),
};
</script>
