<template>
  <div class="IdeaPreview">

    <div>
    </div>

    <span>
      {{idea.name}}
    </span>

    <span class="fire">
      🔥
    </span>

  </div>
</template>

<script>

//import UserIcon from '@/components/UserIcon'

export default {
  name: 'IdeaPreview',
  components: {
  },
  data () {
    return {
    }
  },
  props: {
    idea: Object
  },
  computed: {
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.IdeaPreview{
  background: rgb(245,245,245);
  border: 1px solid lightgray;
  box-shadow: 2px 2px 2px lightgray;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  height: 2em;
  border-radius: 5px;
}

.IdeaPreview:hover{
  filter: brightness(1.1);
}

.fire{
  float: right;
  font-size: 2em;
}

</style>
