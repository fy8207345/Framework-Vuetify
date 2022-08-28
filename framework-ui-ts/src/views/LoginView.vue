<template>
  <div class="d-lg-flex" style="flex: 1 2">
    <v-container class="bg-primary flex-column padding">
      <label class=" app-name">
        系统名称
      </label>
      <v-row no-gutters>
        <v-col :cols="24" :lg="24">
          <label class="margin-top app-name">
            登录
          </label>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="flex-column padding">
      <label class=" app-name" >登录</label>
      <v-form class="margin-top">
        <v-text-field
          rounded
          validate-on-blur
          clearable
          counter
          outlined
          :height="36"
          label="输入用户名"
          placeholder="输入用户名"/>

        <v-text-field
          v-model="password"
          rounded
          validate-on-blur
          counter
          outlined
          :append-icon="showPassowrd ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassowrd ? 'text' : 'password'"
          @click:append="showPassowrd = !showPassowrd"
          :height="36"
          label="输入密码"
          placeholder="输入密码"/>

        <v-btn rounded block color="primary" :loading="loading" x-large @click="onClickLogin">
          登录
        </v-btn>

      </v-form>
    </v-container>
  </div>
</template>

<script>
import {Component, Vue} from "vue-property-decorator";

@Component({
})
export default class LoginView extends Vue {
  name = "LoginView";
  showPassowrd = false;
  password = null;
  loading = false;
  onClickLogin(){
    this.loading = true;
    return false;
  }
}
</script>

<style scoped>
.margin{
  margin: 90px 48px;
}
.margin-top{
  margin-top: 48px;
}
.padding{
  padding: 90px 48px;
}
</style>
