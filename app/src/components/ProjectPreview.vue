<template>
  <div class="ProjectPreview" :style="{'background-image': 'url('+background+')'}">

    <span>
      {{project.name}}
    </span>

  </div>
</template>

<script>

//import Idea from '@/components/Idea'

export default {
  name: 'ProjectPreview',
  /*components: {
    Component
  },*/
  data () {
    return {
    }
  },
  props: {
    project: Object
  },
  computed: {
    background: function () {
      return require('@/assets/images/projects/'+this.project.image)
    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.ProjectPreview{
  background: lightgray;
  background-size: cover;
  background-position: center;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 2px lightgray;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 5em;
  border-radius: 5px;
}

.ProjectPreview:hover{
  filter: brightness(1.1);
}

span{
  background: white;
  padding: 5px;
}

</style>
