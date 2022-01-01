<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <div class="overline mb-2 ml-1">
          Quick Suggestions
        </div>
        <v-row v-for="suggestion of quickSuggestions.filter((s) => s.condition()).slice(0, 3)" :key="suggestion">
          <v-col>
            <v-card width="100%">
              <v-card-title>
                {{ suggestion.title }}
              </v-card-title>
              <v-card-text>
                {{ suggestion.description }}
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn
                  color="primary"
                  text
                  :href="suggestion.actionPath"
                >
                  Go to Page
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="mt-10 pt-8 pb-8">
          <v-card-title class="ml-2 text-h4 font-weight-medium">
            Settings
          </v-card-title>
          <div class="ma-4">
            <v-list dense>
              <template v-for="(setting, key) of settingMenuItems">
                <v-list-item :key="key * 2" @click="$router.push('/dashboard/server/settings/'+setting.path)">
                  <v-list-item-icon>
                    <v-icon>{{ setting.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ setting.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-list-item-icon>
                </v-list-item>
                <v-divider v-if="key != settingMenuItems.length - 1" :key="(key * 2) + 1"/>
              </template>
            </v-list>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {SettingsMenuItemI, QuickSuggestionI} from '@/types/guildDashboard';

@Component
export default class GuildDashboardRoot extends Vue {
  quickSuggestions: QuickSuggestionI[] = [{
    title: 'Embrace New Members',
    description: 'Show your care for new members by welcoming them with a custom and fast-tracking them into welcome-specific channels with roles.',
    condition: () => true,
    actionPath: '/dashboard/server/settings/general',
  },
  {
    title: 'Automatic Role Assignment',
    description: 'Know who-is-who with the help of an advanced role assignment system based on their role in P&W.',
    condition: () => true,
    actionPath: '/dashboard/server/settings/general',
  },
  {
    title: 'Create an Embassy',
    description: 'Create an embassy to welcome diplomats and perform vital foreign affairs for your alliance.',
    condition: () => true,
    actionPath: '/dashboard/server/settings/general',
  }];

  settingMenuItems: SettingsMenuItemI[] = [
    {
      name: 'Admin',
      icon: 'mdi-shield-crown-outline',
      path: 'general',
    },
    {
      name: 'Welcomes',
      icon: 'mdi-hand-wave-outline',
      path: 'general',
    },
    {
      name: 'Roles',
      icon: 'mdi-account-cog-outline',
      path: 'general',
    },
    {
      name: 'Menus',
      icon: 'mdi-menu-open',
      path: 'general',
    },
    {
      name: 'Tickets',
      icon: 'mdi-ticket-outline',
      path: 'general',
    },
    {
      name: 'Embassy',
      icon: 'mdi-lighthouse',
      path: 'general',
    },
  ];

  // for scafolding
  private timesAmount<Type>(i: Type, amount: number): Type[] {
    const arr: Type[] = [];

    for (let j = 0; j < amount; j++) {
      arr.push(i);
    }

    return arr;
  }
}
</script>
