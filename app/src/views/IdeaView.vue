<template>
  <div class="IdeaView">

    <three-cols>

      <div class="row justify-between">

        <div :style="{'flex': 3}">

          <h1>
            {{idea.name}}
          </h1>

          <p>
            {{idea.description}}
          </p>

          <div v-if="idea.youtube">
            <iframe width="560" height="315" :src="'https://www.youtube.com/embed/'+idea.youtube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

        </div>

        <div class="row-item" :style="{'flex': 1, 'text-align': 'right'}">
          <button v-if="idea.ownerId == user.id">Edit spark</button>
          <button v-if="idea.ownerId != user.id && !idea.following" @click="follow(true)">Follow spark</button>
          <button v-if="idea.ownerId != user.id && idea.following" @click="follow(false)">Following</button>

          <h3>Spark creator</h3>
          <router-link :to="{ name: 'user', params:{'id':creator.id}}">
            <user-icon :user="creator" :alt="creator.firstname + ' ' + creator.lastname" :title="creator.firstname + ' ' + creator.lastname"></user-icon>
          </router-link>

          <div  v-if="idea.ownerId == user.id">
            <h4>Is the spark ready to become a project?</h4>
            <button>Create project</button>
          </div>

        </div>

      </div>

      <hr />

      <h2>Discussion ({{comments.length}})</h2>

      <h4>Join the conversation:</h4>
      <textarea v-model="comment"></textarea>
      <br />
      <button @click="addComment">Send comment</button>

      <div class="comments" v-if="comments.length">
        <h4>Latest posts</h4>
        <div class="comment" v-for="(comment,key) in comments" v-bind:key="key">
          <comment :comment="comment"></comment>
        </div>

      </div>

    </three-cols>

  </div>
</template>

<script>

import ThreeCols from '@/components/ThreeCols'
import UserIcon from '@/components/UserIcon'
import Comment from '@/components/Comment'

export default {
  name: 'IdeaView',
  components: {
    ThreeCols,
    UserIcon,
    Comment
  },
  data () {
    return {
      comment: {type: String, default: ""}
    }
  },
  props: {
  },
  computed: {
    user: function () {
      return this.$store.state.user
    },
    idea: function () {
      return this.$store.state.ideas[this.$route.params.id]
    },
    creator: function () {
      return this.$store.state.users[this.idea.ownerId]
    },
    comments: function () {
      return this.idea.comments.slice().reverse()
    }
  },
  methods: {
    follow: function (val) {
      this.idea.following = val;
    },
    addComment: function () {
      this.idea.comments.push({userId: this.$store.state.user.id, comment: this.comment})
      this.comment = ""

      if(!this.idea.following){
        this.follow(true)
      }

    }
  },
  mounted: function () {
    this.comment = ""
  }
}
</script>

<style scoped>

.IdeaView{
  margin-top: 50px;
}

.fire{
  font-size: 2em;
}

.comments{
  margin-top: 20px;
}

.comment{
  background: rgb(245,245,245);
}

.comment:nth-child(odd){
  background: rgb(250,250,250);
}

</style>
