<template>
  <div class="page-container">
    <v-container class="page-width">
      <v-row class="mt-6 mb-2">
        <h1 class="kanit ml-2" style="font-size: 50px">
          The Ampersand
        </h1>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <div class="overline mb-2 ml-1">
            Quick Suggestions
          </div>
          <v-row v-for="i of 3" :key="i">
            <v-col>
              <v-card width="100%">
                <v-card-title>
                  Pariatur amet commodo laboris ipsum amet.
                </v-card-title>
                <v-card-text>
                  Cupidatat anim commodo aliqua dolor labore proident ex amet ullamco. 
                  Sint irure minim exercitation magna ad magna cillum Lorem aliqua amet do. 
                  Id nisi voluptate occaecat reprehenderit velit proident qui.
                </v-card-text>
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
                <template v-for="i of 9">
                  <v-list-item :key="i * 2" @click="$router.push('/dashboard/server/settings/'+i)">
                    <v-list-item-icon>
                      <v-icon>mdi-cog</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Lorem ipsum dolor sit amet
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon>
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                  <v-divider v-if="i != 9" :key="(i * 2) + 1"/>
                </template>
              </v-list>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "@/styles/page.css";

@Component
export default class GuildDashboardRoot extends Vue {}
</script>
