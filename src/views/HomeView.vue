<template>
  <div class="home">
    <homeview/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import homeview from '@/components/CoverSheetOfAnExercise.vue'

export default {
  name: 'HomeView',
  components: {
   homeview,
  }
}
</script>
