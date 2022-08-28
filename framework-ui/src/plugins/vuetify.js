import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

import { VuetifyPreset } from 'vuetify/types/services/presets'

export const preset: VuetifyPreset = {
    breakpoint: {
        scrollBarWidth: 5
    }
}

export default new Vuetify({
    preset,
    theme: {
        options: {
            customProperties: true, //启用 customProperties 也会为每个主题颜色生成一个 css变量
        },
        themes: {
            light: {
                primary: "#3253DC",
                secondary: "#03DAC6",
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                onPrimary: "#FFFFFF",
                onSecondary: "#000000",
            }
        }
    }
});
