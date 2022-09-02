import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import zhHans from './locales/zh-Hans'
import '@/css/theme.css'

Vue.use(Vuetify)

const vuetify : Vuetify = new Vuetify({
  breakpoint: {
    scrollBarWidth: 5
  },
  lang: {
    locales: { zhHans },
    current: 'zhHans'
  },
  icons: {
    iconfont: 'fa'
  },
  theme: {
    options: {
      customProperties: true, //启用 customProperties 也会为每个主题颜色生成一个 css变量
    },
    themes: {
      light: {
        primary: "#6750A4",
        secondary: "#625B71",
        accent: '#7D5260',
        error: '#B3261E',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        onPrimary: "#FFFFFF",
        onSecondary: "#FFFFFF",
      }
    }
  }
});

export default vuetify;
