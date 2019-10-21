<template>
  <div class="ProjectView">

    <div class="cover" :style="{'background-image': 'url('+background+')'}">
    </div>

    <three-cols>

      <div class="row justify-between">

        <div :style="{'flex': 3}">

          <h1>
            {{project.name}}
          </h1>

          <p>
            {{project.description}}
          </p>

          <div v-if="project.youtube">
            <iframe width="560" height="315" :src="'https://www.youtube.com/embed/'+project.youtube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

        </div>

        <div class="row-item" :style="{'flex': 1, 'text-align': 'right'}">
          <button v-if="project.ownerId == user.id">Edit project</button>
          <button v-if="project.ownerId != user.id && !project.following" @click="follow(true)">Follow project</button>
          <button v-if="project.ownerId != user.id && project.following" @click="follow(false)">Following</button>

          <h3>Project creator</h3>
          <router-link :to="{ name: 'user', params:{'id':creator.id}}">
            <user-icon :user="creator" :alt="creator.firstname + ' ' + creator.lastname" :title="creator.firstname + ' ' + creator.lastname"></user-icon>
          </router-link>

        </div>

      </div>

      <hr />

      <h2>Comments</h2>

      <h4>Join the conversation:</h4>
      <textarea v-model="comment"></textarea>
      <br />
      <button @click="addComment">Send comment</button>

      <div class="comments">

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
  name: 'ProjectView',
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
    project: function () {
      return this.$store.state.projects[this.$route.params.id]
    },
    creator: function () {
      return this.$store.state.users[this.project.ownerId]
    },
    comments: function () {
      return this.project.comments.slice().reverse()
    },
    background: function () {
      return require('@/assets/images/projects/'+this.project.image)
    }
  },
  methods: {
    follow: function (val) {
      this.project.following = val;
    },
    addComment: function () {
      this.project.comments.push({userId: this.$store.state.user.id, comment: this.comment})
      this.comment = ""

      if(!this.project.following){
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

.ProjectView{
}

.cover{
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  margin-bottom: 50px;
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
