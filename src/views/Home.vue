<template>
  <div class="home">
    <h2>Books I've enjoyed reading:</h2>
    <Books />
  </div>
</template>

<script>
// @ is an alias to /src
import Books from '@/components/Books.vue'

export default {
  name: 'Home',
  components: {
    Books
  },
  
}
</script>
