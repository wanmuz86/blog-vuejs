import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
   state: {
      posts: [],
      selectedPost:null
   },
   getters: {

   },
   mutations: {
      setPosts(state, posts) {
         state.posts = posts;
      },
      setPost(state,post){
         state.selectedPost = post
      }

   },
   actions: {
      async getPosts({  commit }) {
         try {
            fetch('https://serene-crag-93594.herokuapp.com/api/posts')
               .then(response => response.json())
               .then(data => {
                  commit('setPosts', data.data)
            });
         } catch (error) {
            commit('setPosts', []);
         }
      },
      async getPostById({  commit }, id) {
         try {
            fetch(`https://serene-crag-93594.herokuapp.com/api/posts/${id}`)
               .then(response => response.json())
               .then(data => {
                  console.log(data)
                  commit('setPost', data.data)
            });
         } catch (error) {
            commit('setPost', null);
         }
      },
      async updatePost({commit,state},id){
         try {
         
            fetch(`https://serene-crag-93594.herokuapp.com/api/posts/${id}`, {
               method: 'put',
               headers: {
                 "Content-type": "application/json"
               },
               body: JSON.stringify(state.selectedPost)
             })
             .then()
             .then( (data)=> {
              
               commit('setPost',data.data)
             })
             .catch(function (error) {
               console.log('not ok')
               console.log('Request failed', error);
             });
         }
         catch (error){
            commit('setPost',null)
         }
      }
   }
})

