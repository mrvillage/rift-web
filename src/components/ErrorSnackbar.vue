<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="show" :color="color" v-if="show">
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ErrorSnackbar extends Vue {
  color = "error";

  @Prop(Boolean) show!: boolean;
  @Prop(String) message!: string;

  showing = this.show;
}
</script>
