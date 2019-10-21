<template>
  <div class="Comment">
    <router-link :to="{ name: 'user', params: {id: user.id} }" class="router-link-black">{{user.firstname}} {{user.lastname}}</router-link>
    : <span v-html="commentTagged"></span>
  </div>
</template>

<script>

export default {
  name: 'Comment',
  components: {
  },
  data () {
    return {
    }
  },
  props: {
    comment: Object
  },
  computed: {
    user: function () {
      return this.$store.state.users[this.comment.userId]
    },
    commentTagged: function () {
      let words = this.comment.comment.split(" ")
      //let tags = words.filter(word => word[0] == '@')
      words.forEach((word,index) => {
        console.log(word[0])
        if(word[0] == '@'){
          words[index] = '<a>'+word+'</a>'
        }
      });
      return words.join(" ")
    }
  },
  methods: {
  },
  mounted: function () {

  }
}
</script>

<style scoped>

.Comment{
  padding: 10px;
}

</style>
