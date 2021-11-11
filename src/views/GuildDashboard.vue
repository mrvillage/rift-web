<template>
  <div>
    <router-view />
    <guild-dashboard-select v-if="userLinked" class="bottom-right" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GuildDashboardSelect from "@/components/GuildDashboardSelect.vue";

@Component({
  components: {
    GuildDashboardSelect,
  },
})
export default class GuildDashboard extends Vue {
  get userLinked() {
    return this.$store.getters.isUserLinked;
  }
}
</script>

<style>
.bottom-right {
  position: fixed;
  right: 40px;
  bottom: 80px;
}
</style>
