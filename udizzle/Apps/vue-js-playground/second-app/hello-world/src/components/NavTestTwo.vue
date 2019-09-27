
<template>
  <vue-tree-nav
    :left="left"
    :right="right"
  ></vue-tree-nav>
</template>

<script>
/*
  Source: https://vuejsexamples.com/navigation-tree-menu-component-with-nice-integration-with-vue-router-2/
  Demo: https://marcodpt.github.io/vue-tree-nav/#/home
  GitHub: https://github.com/marcodpt/vue-tree-nav

*/
import treeNav from 'vue-tree-nav'

export default {
  name: 'nav-test-two',
  data: {
    left: [
      {
        label: 'Home',
        icon: 'home',
        href: '#/home'
      }, {
        label: 'Animals',
        children: [
          {
            label: 'Elephant',
            href: '#/animals/elephant'
          }, {
            label: 'Lion',
            href: '#/animals/lion'
          }, {
            label: 'Bear',
            href: '#/animals/bear'
          }, {
            label: 'Eagle',
            href: '#/animals/eagle'
          }, {
            label: 'Wolf',
            href: '#/animals/wolf'
          }

        ]
      }
    ],
    right: [
      {
        href: 'https://github.com/marcodpt/vue-tree-nav',
        icon: 'brands/github'
      }
    ]
  },
  components: { treeNav },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
