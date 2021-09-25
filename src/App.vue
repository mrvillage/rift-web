<template>
  <v-app>
    <v-app-bar app color="grey darken-4">
      <div class="d-flex align-center" @click="$router.push('/')">
        <!-- Rift Logo goes Here -->

        <v-img
          alt="Rift Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="50"
        />

        <span class="olga">
          <h3 class="olga">
            Rift
          </h3>
        </span>
      </div>

      <v-btn v-if="false" class="ml-8" text color="primary">
        Documentation
      </v-btn>

      <v-btn
        v-if="false"
        text
        color="primary"
        @click="$router.push('/settings')"
      >
        Dashboard
      </v-btn>

      <v-spacer />
      <v-btn
        v-if="false"
        lass="ml-3"
        color="primary"
        target="_blank"
        @click="signOut()"
      >
        Sign Out
      </v-btn>

      <v-list-item dark v-if="false">
        <v-list-item-avatar>
          <img :src="avatarURL" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            {{
              `${userData.user_data.username}#${userData.user_data.discriminator}`
            }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ `Nation ID: ${null}` }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-btn v-if="false" class="ml-3" color="green darken-1" @click="signIn()">
        Sign In
      </v-btn>
      <v-spacer />
      <v-btn
        class="ml-3"
        color="primary"
        href="https://getrift.mrvillage.dev"
        target="_blank"
      >
        Add to Server
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-if="false"
      :permanent="!['xs', 'xm'].includes($vuetify.breakpoint.name)"
      :temporary="['xs', 'xm'].includes($vuetify.breakpoint.name)"
      width="10"
      color="grey darken-4"
      expand-on-hover
      :hide-overlay="!['xs', 'xm'].includes($vuetify.breakpoint.name)"
      app
    >
      <v-list>
        <v-list-item>
          Test1
        </v-list-item>
        <v-list-item>
          Test1
        </v-list-item>
        <v-list-item>
          Test1
        </v-list-item>
        <v-list-item>
          Test1
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
    <v-footer class="justify-center" color="#292929" height="100">
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      >
        &copy; {{ new Date().getFullYear() }} — Village
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "App",
  created: async function() {
    console.log(this.supabase.auth.currentUser);
    console.log("Route Parameters", this.$route.params);
    if (this.userData === null && this.supabase.auth.user()) {
      const data = localStorage.getItem("userData");
      if (data) {
        this.$store.commit("setUserData", JSON.parse(data));
      } else {
        await this.supabase.auth.signOut();
      }
    } else if (!this.supabase.auth.user()) {
      await this.supabase.auth.signOut();
    }
  },
  methods: {
    isSignedIn() {
      return !!this.supabase.auth.user();
    },
    async signIn() {
      const { user, session, error } = await this.supabase.auth.signIn({
        provider: "discord",
        redirectTo: "http://localhost:8081",
      });
      console.log(user, session, error);
    },
    async signOut() {
      await this.supabase.auth.signOut();
    },
    logIn() {
      const array = new Uint32Array(1);
      const state = window.crypto.getRandomValues(array).toString();
      localStorage.setItem("discordOAuthState", state);
      window.location.href = `https://discord.com/api/oauth2/authorize?client_id=804833318956302377&redirect_uri=https%3A%2F%2Frift.mrvillage.dev%2Fcallback&response_type=code&scope=identify%20guilds&state=${state}`;
    },
    menuClick() {
      this.showAvatar = !this.showAvatar;
      return true;
    },
  },
  computed: {
    ...mapGetters(["supabase", "avatarURL", "userData", "userID", "supabase"]),
  },
  data() {
    return {
      showAvatar: true,
    };
  },
});
</script>

<style>
@font-face {
  font-family: "Olga";
  src: local("Olga"), url(./fonts/Olga/Olga.ttf) format("truetype");
}
.olga {
  font-family: "Olga";
}
.grey-background {
  background: #282828;
}
</style>
