
<template>
  <quick-menu
    :menu-count="count"
    :icon-class="icons"
    :menu-url-list="list"
  ></quick-menu>
</template>

<script>
/*
  Source: https://vuejsexamples.com/web-navigation-component-base-on-vue2-0/
  Demo: https://ashleylv.github.io/vue-quick-menu/index.html#/
  GitHub: https://github.com/AshleyLv/vue-quick-menu
    https://github.com/AshleyLv/vue-quick-menu/tree/master/example/src

*/
import quickMenu from "vue-quick-menu";

export default {
  name: 'demo',
  data() {
    return {
      count: 4,
      icons: ["fa fa-github", "fa fa-comment", "fa fa-code", "fa fa-envelope"],
      list: [
        { isLink: true, url: "/" },
        { isLink: true, url: "/doo" },
        { isLink: true, url: "/foo" },
        { isLink: false }
      ],
      backgroundColor: "#17c4c5",
      color: "#ffffff",
      position: "top-left",
      isOpenNewTab: false
    };
  },
  components: { quickMenu },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
