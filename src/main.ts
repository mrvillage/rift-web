import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  methods: {
    async getNationId() {
      const userData = this.$store.getters.userData.user_info;
      const supabase = this.$store.getters.supabase;
      const { data, error } = await supabase
        .from("links")
        .select("id, nation")
        .eq("id", BigInt(userData.id));
      console.log(data, error);
      return data;
    },
  },
  render: (h) => h(App),
}).$mount("#app");
