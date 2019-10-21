<template>
  <div class="ProjectList">

    <h4 v-if="projectsFiltered.length && header">
      {{header}}
    </h4>

    <div class="list">
      <div v-for="project in projectsFiltered" v-bind:key="project.id" class="list-item">
        <router-link :to="{ name: 'project', params: {id: project.id} }" class="router-link-a">
          <project-preview :project="project" ></project-preview>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>

import ProjectPreview from '@/components/ProjectPreview'

export default {
  name: 'ProjectList',
  components: {
    ProjectPreview
  },
  data () {
    return {
    }
  },
  props: {
    header: String,
    owner: {type: Number, default: -1},
    notowner: {type: Number, default: -1},
    following: Boolean,
    notfollowing: Boolean,
  },
  computed: {
    projects () {
      return this.$store.state.projects
    },
    projectsFiltered: function () {

      let projects = this.projects.slice(0)

      if(this.owner != -1){
        projects = projects.filter(idea => idea.ownerId == this.owner)
      }
      else if(this.notowner != -1){
        projects = projects.filter(idea => idea.ownerId != this.notowner)
      }

      if(this.following){
        projects = projects.filter(idea => idea.following)
      }
      if(this.notfollowing){
        projects = projects.filter(idea => !idea.following)
      }

      return projects

    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.ProjectList{
}

.list{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
}

.list-item{
  margin: 5px;
  flex: 0 1 45%;
}

</style>
