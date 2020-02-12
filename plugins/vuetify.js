import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default (ctx) => {
  const vuetify = new Vuetify({
    theme: {
      // dark:true, //uncomment this line
      themes: {
        light: {
          primary: '#F00', 
          secondary: '#0F0', 
        },
        dark: {
          primary: '#F0F', 
          secondary: '#0FF', 
        },
      },
    }
  })

  ctx.app.vuetify = vuetify
  // ctx.$vuetify = vuetify.framework
}
