<template>
  <div class="page-container">
    <div class="page-width">
      <div class="mt-6 mb-2 ml-1">
        <h1 class="kanit ml-2" style="font-size: 50px">
          {{ (currentGuild) ? currentGuild.name : 'Select a Guild' }}
        </h1>
      </div>
      <v-scroll-x-transition
        leave-absolute
        mode="out-in"
      >
        <template v-if="currentGuild">
          <router-view />
        </template>
        <template v-else>
          <div class="select-a-guild-placeholder">
            <h3 class="grey--text text--lighten-2 mt-n4">
              Guild Dashboard
            </h3>
            <h4 class="grey--text text--lighten-1 mr-4 ml-4 mt-4">
              This is where you can setup various features to improve your server experience.
              Select a guild to get started.
            </h4>
            <v-btn
              large
              class="mt-6"
              color="primary"
              depressed
              @click="$refs.selectDialog.open()"
            >
              Select a Guild
            </v-btn>
          </div>
        </template>
      </v-scroll-x-transition>
      <guild-dashboard-dialog ref="selectDialog" v-if="userLinked" class="bottom-right" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GuildDashboardDialog from "@/components/GuildDashboardDialog.vue";
import { Guild } from "@/types";
import "@/styles/page.css";

@Component({
  components: {
    GuildDashboardDialog,
  },
})
export default class GuildDashboard extends Vue {
  get userLinked() {
    return this.$store.getters.isUserLinked;
  }

  get currentGuild(): Guild | null {
    return this.$store.getters.getCurrentGuild;
  }
}
</script>

<style>
.bottom-right {
  position: fixed;
  right: 40px;
  bottom: 80px;
}

.select-a-guild-placeholder {
  border-radius: 20px;
  border: thin solid hsla(0,0%,100%,.12);
  padding: 40px;
  height: 25vh;
  width: 25vw;
  margin: auto;
  margin-top: 20vh;
  text-align: center;
}
</style>
