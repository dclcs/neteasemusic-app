<template>
  <div>
   <TopNav/>
   <SwipperTop/>
  </div>
</template>

<script>

// @ is an alias to /src
import TopNav from '@/components/home/TopNav.vue'
import SwipperTop from '@/components/home/SwipperTop.vue';
export default {
  name: 'HomeView',
  components: {
    TopNav,
    SwipperTop
  }
}
</script>
