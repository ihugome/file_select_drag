import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Drag from '@/components/Drag'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'List',
            component: List
        },
        {
            path: '/Drag',
            name: 'Drag',
            component: Drag
        }
    ]
})
