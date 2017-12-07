<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Admin',
  computed: {
    ...mapState([
      'statusLogin'
    ])
  },
  created () {
    let parsing = localStorage.getItem('token')
    if (parsing) {
      this.is_user = parsing
    } else {
      this.$router.push('/login')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
