<template>
  <div class="IdeaList">

    <h4 v-if="ideasFiltered.length && header">
      {{header}}
    </h4>

    <div class="list">
      <div v-for="idea in ideasFiltered" v-bind:key="idea.id" class="list-item">
        <router-link :to="{ name: 'idea', params: {id: idea.id} }" class="router-link-a">
          <idea-preview :idea="idea" ></idea-preview>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>

import IdeaPreview from '@/components/IdeaPreview'

export default {
  name: 'IdeaList',
  components: {
    IdeaPreview
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
    ideas () {
      return this.$store.state.ideas
    },
    ideasFiltered: function () {

      let items = this.ideas.slice(0)

      if(this.owner != -1){
        items = items.filter(idea => idea.ownerId == this.owner)
      }
      else if(this.notowner != -1){
        items = items.filter(idea => idea.ownerId != this.notowner)
      }

      if(this.following){
        items = items.filter(idea => idea.following)
      }
      if(this.notfollowing){
        items = items.filter(idea => !idea.following)
      }

      return items

    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.IdeaList{
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
