<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="show" :color="color" v-if="showing">
      You need to sign in to view that page!
      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="showing = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SignInRequired extends Vue {
  color = "error";

  @Prop(Boolean) show!: boolean;

  showing = this.show;
}
</script>
