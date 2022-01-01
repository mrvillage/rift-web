<template>
  <div>
    <h3>
      Admin Settings
    </h3>
    <p>
      High level settings for your server and dangerous options
    </p>
    <v-form class="mt-4">
      <v-text-field
        label="Server Purpose"
        filled
        :rules="[v => !!v || 'Server Name is required']"
      >

      </v-text-field>
      <role-dropdown
        multiple
        label="Server Manager Roles"
      />
    </v-form>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import RoleDropdown from '@/components/RoleDropdown.vue';

@Component({
  components: {
    RoleDropdown,
  },
})
export default class GeneralGuildDashboardSettingsView extends Vue {
}
</script>
