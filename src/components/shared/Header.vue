<template>
<div>
  <v-navigation-drawer
    :mini-variant="miniVariant"
    clipped
    fixed
    v-model="sideNav"
    app>
    <v-list
    dense
    v-for="item in menuItems"
    :key="item.title">
        <v-list-tile :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
    </v-list>
    <v-list dense>
      <v-list-tile icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>


  <v-toolbar
  clipped-left
  fixed
  app>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-lg-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
          <router-link
          to="/"
          tag="span"
          style="cursor: pointer">

          <v-avatar>
            <img src="/static/app_logo.svg" alt="App Logo"/>
          </v-avatar>

          </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu open-on-hover offset-y>
        <v-btn icon slot="activator">
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="item in notificationsMenu" :key="item.title" @click="">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <!-- User Profile -->
      <v-menu open-on-hover offset-y>
        <v-btn
        tag="span"
        style="cursor: pointer"
        flat
        icon
        slot="activator">
          <v-avatar>
            <img slot="activator" src="/static/profile.jpg" alt="User Name"/>
          </v-avatar>
        </v-btn>
        <v-list>
          <v-list-tile>
              <v-list-tile-content>
                Account
              </v-list-tile-content>
           </v-list-tile>
           <v-divider></v-divider>
          <v-list-tile>
            <v-list-tile-title>
              {{ user.email }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-menu open-on-hover offset-y>
        <v-btn icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile
          v-for="item in userMenu"
          :key="item.title"
          :to="item.link">
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile>
          <v-divider></v-divider>
          <!-- User logout -->
          <v-list-tile
          @click="onLogout">
              <v-list-tile-content>
                Logout
              </v-list-tile-content>
           </v-list-tile>
        </v-list>
      </v-menu>
   </v-toolbar>
</div>


</template>

<script>

export default {
  data () {
    return {
      sideNav: null,
      miniVariant: false,
      notificationsMenu: [
        { title: 'notification 1' },
        { title: 'notification 2' },
        { title: 'notification 3' },
        { title: 'notification 4' }
      ],
      userMenu: [
        { title: 'Settings', link: '/settings' }
      ],
      menuItems: [
        { icon: 'home', title: 'Home', link: '/signup' },
        { icon: 'info', title: 'About', link: '/about' },
        { icon: 'dashboard', title: 'Page 2', link: '/page' }
      ]
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      window.location.replace('./signin')
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>
