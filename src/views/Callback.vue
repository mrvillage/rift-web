<<<<<<< HEAD
=======
<template>
  <v-container />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import router from "../router";
import store from "../store";
import axios from "axios"

@Component
export default class Callback extends Vue {
  // $router = router;
  // $store = store;
  redirectHome = (): void => {
    // window.location.replace("https://rift.mrvillage.dev")
    window.location.replace("http://localhost:8081");
  };
  async created(): Promise<void> {
    console.log("HALLO");
    console.log(this.$router);
    console.log(this.$store);
    console.log(this.$store.getters);
    const state = this.$store.getters.isSignedIn;
    console.log(this.$store.getters.isSignedIn);
    if (state) {
      this.redirectHome();
    } else {
      const code = this.$route.query.code;
      if (code === undefined) {
        this.redirectHome();
      }
      // const disc = await fetch(`https://discord`)
      console.log("MEOW");
      const url = `https://rift.mrvillage.dev/auth/callback?code=${code}`
      const req = window
        .fetch(url, {
          method: "GET",
          mode: "no-cors",
        });
      console.log(req)
      const data = req
        .then(
          response => response.json(),
          response => response.json()
        )
        .then(
          json => json,
          json => json
        );
      // console.log(pro)
      // const req = await pro;
      console.log(data);
      console.log("HALLO");
      // const req = await fetch(`http://localhost:5000/auth/callback?code=${code}`, {
      //   mode: "no-cors",
      // });
      // console.log(await req.text());
      console.log("HERE");
      // const data = req.json();
      console.log(req);
      console.log(await this.$store.getters.getSupabase);
    }
  }
}
</script>
>>>>>>> d0b4b267e0b66950962034376d2bb327b34c4bad
