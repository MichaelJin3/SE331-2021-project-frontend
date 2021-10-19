import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/layout/home'
import page404 from './components/layout/404'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            // name: 'home',
            redirect: '/index'
        },
        {
            path: '/',
            component: Home,
            children: [{
                    path: '/index',
                    component: () =>
                        import ('./views/index.vue'),
                    meta: { title: 'Home' }
                }

                // {
                //   path: '/ho',
                //   redirect: '/home',
                //   meta: { title: 'UserCenter' }
                // }
            ]
        },
        // {
        //   path: '/login',
        //   component: () => import('./components/page/Login.vue')
        // },
        {
            path: '/people_list',
            component: () =>
                import ('./views/people_list.vue'),
            meta: { title: 'UserCenter' }
        },
        {
            path: '/people_show',
            component: () =>
                import ('./views/people_show.vue'),
            meta: { title: 'UserCenter' }
        },
        {
            path: '/people_input',
            component: () =>
                import ('./views/people_input.vue'),
            meta: { title: 'UserCenter' }
        },
    ]
})