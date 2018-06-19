import Vue from 'vue'
import Router from 'vue-router'
import WorldCup from '@/components/WorldCup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'WorldCup',
      component: WorldCup
    }
  ]
})
