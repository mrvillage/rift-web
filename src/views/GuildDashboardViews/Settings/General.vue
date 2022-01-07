<template>
  <div>
    <section id="admin-settings">
      <h2>
        <a href="#admin-settings">Admin Settings</a>
      </h2>
      <p>
        High level settings for your server and dangerous options
      </p>
      <v-form class="mt-4 form-border" style="max-width: 700px">
        <p class="form-element-label">
          Use this field to set the purpose of your server, this is displayed to people to let them know
          more about what they're joining.
        </p>

        <v-text-field
          label="Server Purpose"
          filled
        />

        <p class="form-element-label">
          Use this field to set the purpose of your server, this is displayed to people to let them know
          more about what they're joining.
        </p>

        <v-text-field
          label="Server Purpose Argument"
          filled
        />

        <p class="form-element-label">
          The roles you select below will be able to modify many of the server settings available here.
        </p>

        <role-dropdown
          multiple
          label="Server Manager Roles"
        />
      </v-form>
    </section>
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

<style scoped>
  .form-element-label {
    font-size: 14px;
    opacity: 0.8;
    margin-bottom: 8px;
  }

  .form-border {
    border: 1px solid #e0e0e067;
    border-radius: 8px;
    padding: 16px;
    margin-left: 8px;
  }

  h2 a {
    color: white;
    text-decoration: none;
  }
</style>
