<template>
  <v-card
    full-width
    height="60vh"
    class="ml-2"
  >
    <v-card-title>
      <v-btn
        icon
        large
        @click="$router.push('/dashboard/server')"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-divider
        vertical
        class="mr-6 ml-6"
      />

      <span class="font-weight-bold">
        General Settings
      </span>
    </v-card-title>
    <div class="ma-4">
      <router-view/>
    </div>
  </v-card>
</template>