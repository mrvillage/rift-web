<template>
  <v-navigation-drawer
    :permanent="!['xs'].includes($vuetify.breakpoint.name)"
    :temporary="['xs'].includes($vuetify.breakpoint.name)"
    :hide-overlay="!['xs'].includes($vuetify.breakpoint.name)"
    app
    v-model="isShowing"
    class="elevation-0"
    dark
    v-if="value"
  >
    <v-card>
      <v-list>
        <v-list-item dark>
          <v-list-item-avatar @click="goto('/')">
            <img :src="user.user_metadata.avatar_url" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ user.user_metadata.full_name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-list-item-group :mandatory="selectedItem !== -1" v-model="selectedItem">
      <v-list dense nav shaped>
        <v-list-item
          v-for="item in items"
          :key="item.name"
          :disabled="disabled"
          @click="goto(item.path)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-list-item-group>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { SupabaseClient, User } from "@supabase/supabase-js";
import { SideBarItem } from "../types";

@Component
export default class SideBar extends Vue {
  get supabase(): SupabaseClient {
    return this.$store.getters.supabase;
  }

  get user(): User | null {
    return this.supabase.auth.user();
  }

  isShowing = true;
  selectedItem = -1;

  items: SideBarItem[] = [
    { name: "Dashboard", icon: "mdi-view-dashboard", path: "/dashboard" },
    { name: "Profile", icon: "mdi-account", path: "/profile" },
    { name: "Settings", icon: "mdi-cog", path: "/settings" },
  ];

  async goto(path: string): Promise<void> {
    if (this.$route.path != path) {
      await this.$router.push({ path });
    }
  }

  @Prop(Boolean) value!: boolean;
  @Prop(Boolean) disabled!: boolean;

  mounted(): void {
    this.isShowing = this.value;
    let option;
    let index;
    for ([index, option] of Object.entries(this.items)) {
      if (option.path === this.$route.path) {
        this.selectedItem = parseInt(index);
        break;
      }
      this.selectedItem = -1;
    }
  }

  @Watch("value")
  onValueChange(value: boolean): void {
    this.isShowing = value;
  }

  @Watch("isShowing")
  onIsShowingChange(val: boolean): void {
    this.$emit("input", val);
  }

  @Watch("$route.path", { immediate: true, deep: true })
  onPathChange(value: string): void {
    let option;
    let index;
    for ([index, option] of Object.entries(this.items)) {
      if (option.path === value) {
        this.selectedItem = parseInt(index);
        break;
      }
      this.selectedItem = -1;
    }
  }
}
</script>
