<template>
  <v-container style="height: 100vh">
    <v-row style="height: 80%">
      <v-card outlined class="d-flex flex-column ma-auto mt-16 mb-8 pa-8" max-width="400px" min-height="70%">
        <h1 style="font-size: 35px; margin-left: -2px">Rift Online</h1>
        <h3>
          A Great Subtitle that Describes it.
        </h3>
        <v-divider class="mt-3 mb-3"/>

        <p
          class="mb-auto"
        >
          Please sign in to customize your Rift experience.
        </p>

        <v-btn
          x-large
          outlined
          style="border-color: rgba(0,0,0,0.2); background-color: #5865F2"
          @click="logIn()"
        >
          <img
            src="@/assets/Discord-Logo-White.png"
            width="30px"
            class="mr-6"
          />
          Continue With Discord
        </v-btn>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  // function logIn() {
  //   var array = new Uint32Array(24);
  //   var state = window.crypto.getRandomValues(array).toString();
  //   console.log(state);
  //   window.location.replace("https://discord.com/api/oauth2/authorize?client_id=804833318956302377&redirect_uri=https%3A%2F%2Frift.mrvillage.dev&response_type=code&scope=identify%20guilds%20email" + "&state=" + state);
  // }
  @Component
  export default class SignIn extends Vue {
    
  }

</script>
