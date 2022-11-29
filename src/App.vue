<template>
  <div>

    <Navigation />
    <Loader v-show="isLoading"/> 
     
    <router-view />

    <Footer />
  </div>
</template>

<script>
import Loader from '@/components/Tools/Spinner.vue'
import Navigation from '@/components/Header/Nav.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  data() {
    return {}
  },
  components: {
    Loader, Navigation, Footer
  },
  mounted() {
  },
  methods: {

  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    },
  }

}
</script>
<style>
</style>
