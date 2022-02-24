<template>
  <div class="home">
    <home>
      <h1>test</h1>
    </home>
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
