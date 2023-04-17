import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      id:null,
      email:"",
      username:""
    }
  },
  getters: {
  },
  mutations: {
    CURRENT_USER_FETCHED(state, user){
      state.user.id = user.id;
      state.user.email = user.email;
      state.user.username = user.username;
    }
  },
  actions: {
    async initialLoad(context){
      if(localStorage.trackerjwt){
        Vue.axios.defaults.headers.common.Authorization = `Bearer ${localStorage.trackerjwt}`;
        const res = await  Vue.axios.get("api/auth/currentUser");
        context.commit("CURRENT_USER_FETCHED",  res.data.user);
      }
    }
  },
  modules: {
  }
})
