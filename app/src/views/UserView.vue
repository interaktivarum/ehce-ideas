<template>
  <div class="UserView">

    <three-cols>

      <div class="row justify-between">

        <div class="row-item user-top">

          <div class="profile-image">
            <img :src="require('@/assets/images/users/'+user.image)" />
          </div>

          <div class="presentation">
            <h1>
              {{user.firstname}} {{user.lastname}}
            </h1>

            <p>
              <span class="motto">{{user.motto}}</span>
            </p>

            <p>
              {{user.description}}
            </p>

          </div>
        </div>

        <div>
          <button v-if="userSelf">Edit profile</button>
          <button v-else>Message {{user.firstname}}</button>
        </div>

      </div>

      <div class="row">

        <div class="row-item">
          <h3>
            Organisation
          </h3>
          <a>{{user.organisation}}</a>
        </div>

        <div class="row-item">
          <h3>
            Location
          </h3>
          <a :href="'https://www.google.com/maps/place/'+user.location" target="_blank">{{user.location}}</a>
        </div>

      </div>

      <hr />

      <div class="row">

        <div class="row-item">
          <h3>
            Skills
          </h3>
          <div v-for="(skill,key) in user.skills" v-bind:key="key">
            <a>{{skill}}</a>
          </div>
        </div>

        <div class="row-item">
          <h3>
            Areas of expertise
          </h3>
          <div v-for="(expertise,key) in user.expertise" v-bind:key="key">
            <a>{{expertise}}</a>
          </div>
        </div>

        <div class="row-item">
          <h3>
            People network
          </h3>
          <div v-for="(network,key) in user.networks" v-bind:key="key">
            <a>{{network}}</a>
          </div>
        </div>

      </div>

      <hr />

      <h3 v-if="userSelf">My sparks</h3>
      <h3 v-else>{{user.firstname}}'s sparks</h3>
      <idea-list :owner="user.id"></idea-list>
      <idea-list :notowner="user.id" following header="Sparks I have engaged with" v-if="userSelf"></idea-list>

      <br />

      <h3 v-if="userSelf">My projects</h3>
      <h3 v-else>{{user.firstname}}'s projects</h3>
      <project-list :owner="user.id"></project-list>
      <project-list :notowner="user.id" following header="Projects I have engaged with" v-if="userSelf"></project-list>

    </three-cols>

  </div>
</template>

<script>

import ThreeCols from '@/components/ThreeCols'
import IdeaList from '@/components/IdeaList'
import ProjectList from '@/components/ProjectList'

export default {
  name: 'UserView',
  components: {
    ThreeCols,
    IdeaList,
    ProjectList
  },
  data () {
    return {
    }
  },
  props: {
  },
  computed: {
    user: function () {
      if(this.$route.params.id){
        return this.$store.state.users[this.$route.params.id]
      }
      else{
        return this.$store.state.user
      }
    },
    userSelf: function () {
      return this.user == this.$store.state.user;
    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.UserView{
  margin-top: 50px;
}

.user-top{
  display: flex;
  flex-direction: row;
}

.motto{
  font-weight: 400;
  font-style: italic;
}

.profile-image{
  width: 200px;
  margin-right: 50px;
}

.profile-image img{
  width: 100%;
}

</style>
