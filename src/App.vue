<template>
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon
        v-if="!!user"
        light
        @click="sideBarOpen = !sideBarOpen"
      />
      <div class="d-flex align-center" @click="$router.push('/')">
        <!-- Rift Logo goes Here -->

        <v-img
          alt="Rift Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="50"
          v-if="!user"
        />

        <!-- <span class="olga" v-if="!user">
          <h3 class="olga">
            Rift
          </h3>
        </span> -->
      </div>

      <v-spacer />
      <v-btn
        class="ml-3"
        color="primary"
        href="https://getrift.mrvillage.dev"
        target="_blank"
      >
        Add to Server
      </v-btn>
      <div v-if="!user">
        <v-btn class="ml-3" @click="signIn()">Sign In </v-btn>
      </div>
      <div v-else>
        <v-btn class="ml-3" @click="signOut()">Sign Out</v-btn>
      </div>
    </v-app-bar>

    <side-bar v-if="!!user" v-model="sideBarOpen" :disabled="!user" />
    <v-main>
      <router-view />
    </v-main>
    <sign-in-required :show="errorCode === '103'" />
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
import "vuex";
import "vue-router";
import "vuetify";

import { Vue, Component } from "vue-property-decorator";
import { SupabaseClient, User } from "@supabase/supabase-js";
import SideBar from "./components/SideBar.vue";
import SignInRequired from "./components/SignInRequired.vue";

@Component({
  components: {
    SideBar,
    SignInRequired,
  },
})
export default class App extends Vue {
  get supabase(): SupabaseClient {
    return this.$store.getters.supabase;
  }

  get user(): User | null {
    return this.supabase.auth.user();
  }

  get errorCode(): string {
    return this.$route.params.errorCode;
  }

  async signIn(): Promise<void> {
    await this.supabase.auth.signIn(
      {
        provider: "discord",
      },
      {
        redirectTo: "http://localhost:8080",
        // redirectTo: "https://rift.mrvillage.dev"
        scopes: "guilds",
      }
    );
  }

  async signOut(): Promise<void> {
    await this.supabase.auth.signOut();
    this.$router.push("/");
  }

  sideBarOpen = !["xs"].includes(this.$vuetify.breakpoint.name);
}
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
