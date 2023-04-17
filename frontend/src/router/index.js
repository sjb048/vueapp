import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import ProjectList from '@/components/ProjectList'
import ProjectDetails from '@/components/ProjectDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/projects',
      name: 'ProjectList',
      component: ProjectList
    },
    {
      path: '/projects/:id',
      name: 'ProjectDetails',
      component: ProjectDetails
    }
  ]
})
