<template>
  <div class="Landing">

    <three-cols>

      <div class="toprow">

        <h1>
          Hello {{user.firstname}}!
        </h1>

        <div>
          <button>
            + spark a new idea
          </button>
          <button>
            + create a new project
          </button>
        </div>

      </div>

      <h3>My sparks</h3>
      <idea-list :owner="user.id"></idea-list>
      <idea-list :notowner="user.id" following header="Sparks I have engaged with"></idea-list>

      <br />

      <h3>My projects</h3>
      <project-list :owner="user.id"></project-list>
      <project-list :notowner="user.id" following header="Projects I have engaged with"></project-list>

      <hr />

      <h3>Sparks that might need my help</h3>
      <idea-list :notowner="user.id" notfollowing></idea-list>

      <br />

      <h3>Projects that might need my help</h3>
      <project-list :notowner="user.id"></project-list>

    </three-cols>

  </div>
</template>

<script>

import ThreeCols from '@/components/ThreeCols'
import IdeaList from '@/components/IdeaList'
import ProjectList from '@/components/ProjectList'

export default {
  name: 'Landing',
  components: {
    ThreeCols,
    IdeaList,
    ProjectList
  },
  props: {
    msg: String
  },
  computed: {
    user: function () {
      return this.$store.state.user
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .Landing{
    margin-top: 50px;
  }

  .toprow{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  button{
    margin: 5px;
  }

</style>
