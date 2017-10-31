import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import experience from '@/pages/experience'
import skills from '@/pages/skills'
import life from '@/pages/life'
import projectdemo from '@/pages/projectdemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
     {
      path: '/experience',
      name: 'experience',
      component: experience
    },
    {
      path: '/skills',
      name: 'skills',
      component: skills
    },
    {
      path: '/life',
      name: 'life',
      component: life
    },
    {
      path: '/projectdemo',
      name: 'projectdemo',
      component: projectdemo
    }
  ]
})
