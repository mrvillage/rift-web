import { SupabaseClient } from "@supabase/supabase-js";
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  interface State {
    supabase: SupabaseClient;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
