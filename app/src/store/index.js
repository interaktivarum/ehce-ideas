import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import users from '@/assets/users.json'
import ideas from '@/assets/ideas.json'
import projects from '@/assets/projects.json'

export default new Vuex.Store({
  state: {
    users: Array,
    ideas: Array,
    projects: Array,
    user: Object
  },
  mutations: {
    init: (state) => {
      state.users = users.users;
      state.user = state.users[0];
      state.ideas = ideas.ideas;
      state.projects = projects.projects;
      console.log(state.projects)
      //store.commit('finishLoadPosts',{nPosts: 3});
    },
  },
  actions: {
  },
  modules: {
  }
})
