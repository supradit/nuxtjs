<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link to="/sample01">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>One Way Binding and setInterval</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/sample02">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Two Way Binding</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/sample03">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Call computed && method && v-if && v-show</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/sample04">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>v-for</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/sample05">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Css Class Binding && Route</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/auth">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>New Layout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/sample06">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Set Session</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/sample07">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Detect Session</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/sample08">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Include Header</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/posts/game">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dynamic Routes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/postsstore/game">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Vuex Store - 1</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/sample09">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Vuex Store - 2</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/sample10">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Meta Tag - SEO</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/sample11">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Get Data From State</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>My Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },

    data: () => ({
      drawer: null,
    }),

    created () {
      // this.$vuetify.theme.dark = true
    },
  }
</script>