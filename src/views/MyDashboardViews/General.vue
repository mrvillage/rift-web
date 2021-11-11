<template>
  <v-row class="pa-5">
    <v-col cols="12" md="6" v-if="userLinked">
      <v-card class="pa-5">
        <h2 class="pb-5">Set your credentials.</h2>
        <v-text-field
          @change="saved = false"
          label="Your P&W API Key"
          v-model="apiKey"
          outlined
        />
        <v-text-field
          @change="saved = false"
          label="Your P&W Username"
          v-model="username"
          outlined
        />
        <v-text-field
          @change="saved = false"
          label="Your P&W Password"
          v-model="password"
          outlined
        />
        <v-btn @click="save()" :disabled="saved" color="primary">Save</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { SupabaseClient } from "@supabase/supabase-js";
import { Component, Vue } from "vue-property-decorator";
import publicKey from "@/publicKey";
// @ts-expect-error
import NodeRSA from "node-rsa";
import { UserLink } from "@/types";

const rsa = new NodeRSA(publicKey);
rsa.setOptions({
  // encryptionScheme: { schema: "pkcs1_oaep", hash: "sha256" },
  encryptionScheme: "pkcs1",
});
@Component
export default class MyDashboardGeneral extends Vue {
  get supabase(): SupabaseClient {
    return this.$store.getters.supabase;
  }

  get userLinked(): boolean {
    return this.$store.getters.isUserLinked;
  }

  get userLink(): UserLink {
    return this.$store.getters.getUserLink;
  }

  mounted() {}

  apiKey: string = "";
  username: string = "";
  password: string = "";
  saved = true;
  rsa = rsa;

  async save(): Promise<void> {
    const insert_data: any = {};
    if (this.apiKey) {
      insert_data.api_key = this.rsa.encrypt(this.apiKey).toString("hex");
    }
    if (this.username) {
      insert_data.username = this.rsa.encrypt(this.username).toString("hex");
    }
    if (this.password) {
      insert_data.password = this.rsa.encrypt(this.password).toString("hex");
    }
    if (insert_data) {
      await this.supabase
        .from("credentials")
        .upsert(
          { ...insert_data, nation: this.userLink.nation_id },
          { onConflict: "nation", returning: "minimal" }
        );
      this.saved = true;
    }
  }
}
</script>
