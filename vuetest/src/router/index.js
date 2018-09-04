// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Content from '@/pages/Content'
 
Vue.use(Router)
 
export default new Router({
　　routes: [
　　　　{
　　　　　　path: '/',
　　　　　　component: Index
　　　　},
　　　　{
　　　　　　path: '/Content/:id',
　　　　　　component: Content
　　　　}
　　]
})
