import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/PagesView'
import LoginView from '../views/LoginView'

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
    // {
    //   path: '/Pages',
    //   component: PagesView,
    //   children: [
    //     {
    //       path: '',
    //       redirect: '/Pages/option1'
    //     },
    //     {
    //       path: 'option1',
    //       name: 'option1View',
    //       component: option1View
    //     },
    //     {
    //       path: 'option2',
    //       name: 'option2View',
    //       component: option2View
    //     },
    //     {
    //       path: 'option3',
    //       name: 'option3View',
    //       component: option3View
    //     }
    //   ]
    // }
  ]
})
