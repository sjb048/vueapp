<template>
  <div>
    <Topbar />
    <Body />
  </div>
</template>

<script>
import Topbar from './projects/TopBar.vue';
import Body from './projects/Body.vue';
export default {
  components: {
    Topbar,
    Body
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

