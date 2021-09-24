declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.vue" {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $store: Store;
  }
}
