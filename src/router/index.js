import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/PagesView'
import LoginView from '../views/LoginView'

import SummaryView from '../views/SummaryView'
import RecentView from '../views/RecentView'
import RecondView from '../views/RecondView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login/'
    },
    {
      path: '/login/',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/Pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/Pages/Summary'
        },
        {
          path: 'Summary',
          name: 'SummaryView',
          component: SummaryView
        },
        {
          path: 'Recent',
          name: 'RecentView',
          component: RecentView
        },
        {
          path: 'Recond',
          name: 'RecondView',
          component: RecondView
        }
      ]
    }
  ]
})
