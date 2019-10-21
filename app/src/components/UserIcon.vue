<template>
  <div class="UserIcon">
    <img :src="require('@/assets/images/users/'+user.image)" />
  </div>
</template>

<script>

export default {
  name: 'UserIcon',
  components: {
  },
  props: {
    user: Object
  },
  computed: {
  }
}
</script>


<style scoped>

.UserIcon{
  display: inline;
}

.UserIcon img {
  max-width: 3em;
  max-height: 3em;
  border-radius: 50%;
}

</style>
