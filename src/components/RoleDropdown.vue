<template>
  <v-select
    filled
    :label="label || 'Role'"
    v-model="roleOrRolesSelected"
    :items="roles"
    item-text="name"
    :multiple="multiple"
    return-object
    style="max-width: 400px"
  >
  </v-select>
</template>

<script lang="ts">
import { SupabaseClient, User } from '@supabase/supabase-js';
import {Component, Vue, Prop, Watch} from 'vue-property-decorator';

interface Role {
  id: number;
  name: string;
  guild: number;
  color: number;
  members: number[];
  permissions: number;
  position: number;
  tags: string[];
}

@Component
export default class RoleDropdownComponent extends Vue {
  get supabase(): SupabaseClient {
    return this.$store.getters.supabase;
  }

  get user(): User | null {
    return this.supabase.auth.user();
  }

  get userLinked(): boolean {
    return this.$store.getters.isUserLinked;
  }

  get currentGuildID(): number  {
    return this.$store.getters.getCurrentGuild.id;
  }

  isErroring = false;

  roles: Role[] = [
    {
      id: 1,
      name: 'Officer',
      guild: 1,
      color: 0,
      members: [1, 2, 3],
      permissions: 0,
      position: 1,
      tags: ['Officer'],
    },
    {
      id: 1,
      name: 'Manager',
      guild: 1,
      color: 0,
      members: [1, 2, 3],
      permissions: 0,
      position: 1,
      tags: ['Manager'],
    }
  ]
  roleOrRolesSelected: Role | null | Role[] = null;

  mounted() {
    if (this.multiple) this.roleOrRolesSelected = [];

    this.loadRoles();
  }

  async loadRoles() {
    const rolesReq = await this.supabase.from('cache_roles').select('id,name').eq('guild', this.currentGuildID)
    if (rolesReq.status === 200) {
      this.roles = rolesReq.data as Role[];
    } else {
      this.isErroring = true;
    }
  }

  @Prop(String) value!: string;
  @Prop(Boolean) multiple!: boolean;
  @Prop(String) label!: string;

  @Watch('value')
  onValueChanged(newValue: string) {
    const role = this.roles.find(role => role.name === newValue);
    if (role) {
      this.roleOrRolesSelected = role;
    }
  }
  
  @Watch('role')
  onRoleChanged(newValue: Role | null) {
    if (newValue) {
      this.$emit('input', newValue);
    }
  }
}
</script>
