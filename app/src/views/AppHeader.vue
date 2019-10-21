<template>
  <div class="AppHeader">
    <router-link :to="{ name: 'home'}" class="router-link-a">
      <img :src="require('@/assets/images/logo.png')" class="logo" />
    </router-link>
    <router-link :to="{ name: 'user'}">
      <div class="user">
        <img :src="require('@/assets/images/users/'+user.image)" />
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  computed: {
    user: function () {
      return this.$store.state.user
    },
    initials () {
      return this.$store.state.user.firstname.substr(0,1) + this.$store.state.user.lastname.substr(0,1)
    }
  }
}
</script>


<style scoped>

.AppHeader{
  background: lightgray;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.user{
  background: steelblue;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid gray;
  margin-right: 10px;
}

.user img {
  height: 100%;
}

.logo{
  height: 80px;
}

</style>
