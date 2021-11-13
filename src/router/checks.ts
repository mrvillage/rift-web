import router from "./router";
import { Route, NavigationGuardNext } from "vue-router";
import store from "../store";
const restrictedCheck = (to: Route, from: Route, next: NavigationGuardNext) => {
  if (store.getters.supabase.auth.user()) {
    next();
  } else {
    router.replace({
      name: "Landing",
      params: { errorCode: "103", previousPath: to.path },
    });
  }
};

export default restrictedCheck;
