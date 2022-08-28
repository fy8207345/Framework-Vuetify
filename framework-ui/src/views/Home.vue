<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        系统名称
      </div>

      <v-spacer></v-spacer>

      <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <loginPage />
    </v-main>

    <v-footer>
      底部
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>