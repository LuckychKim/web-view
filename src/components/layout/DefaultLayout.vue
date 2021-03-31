<template>
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-item :to="{name: 'Home'}" link exact>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{name: 'About'}" link exact>
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        app
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col class="text-center">
              <router-view></router-view>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <v-footer
        color="indigo"
        app
      >
        <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  private drawer = false
}
</script>

<style scoped>

</style>
