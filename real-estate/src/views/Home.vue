<template>
  <div class="home">
    <home></home>
  </div>
</template>

<script>
// @ is an alias to /src
import home from '@/components/Home.vue'
export default {
  name: 'Home',
  components: {
    'home':home
  }
}
</script>
