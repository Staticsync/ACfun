import Vue from 'vue'
import Router from 'vue-router'
import Show from '@/components/show.vue'
import showPlay from '@/components/showPlay.vue'
import Recommond from '@/components/recommond.vue'
import recommondPlay from '@/components/recommondPlay.vue'
import Info from '@/components/info.vue'
import Comments from '@/components/comment.vue'
import Drama from '@/components/drama.vue'
import dramaPlay from '@/components/dramaPlay.vue'
import Partition from '@/components/partition.vue'
import Follow from '@/components/follow.vue'
import Find from '@/components/find.vue'
import Search from '@/components/search.vue'
import searchList from '@/components/searchList.vue'
import home from '@/components/home'
import Lishi from '@/pages/lishi'
import GameShop from '@/pages/gameshop'
import DownLoad from '@/pages/download'
import Login from '@/pages/Login'
import Register from '@/pages/register'
import Forget from '@/pages/forget'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'show',
      component: Show,
    },
    {
    path: '/show',
    component: Show,
       
    },
    {
      path: '/showPlay/:aid',
      name: 'showPlay',
      component: showPlay
    },
    {
      path: '/recommond',
      name: 'Recommond',
      component: Recommond,     
    },
    {
      path: '/recommondPlay/:aid',
      name: 'recommondPlay',
      component: recommondPlay,
      child: [
        {
          path: '/recommondPlay/:aid/info',
          name: 'Info',
          component: Info
        },
         {
          path: '/comment/:aid/comments',
          name: 'Comments',
          component: Comments
        },
      ]
    },
    {
      path: '/drama',
      component: Drama
    },
    {
      path: '/drama/:season_id',
      name: 'dramaPlay',
      component: dramaPlay
    },
    {
      path: '/partition',
      component: Partition
    },
     {
      path: '/follow',
      component: Follow
    },
    {
      path: '/find',
      component: Find
    },
    {
      path: '/search',
      component: Search
    },
     {
      path: '/lishi',
      component: Lishi
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/forget',
      component: Forget
    },
         {
      path: '/Login',
      component: Login
    },
         {
      path: '/gameshop',
      component: GameShop
    },
         {
      path: '/download',
      component: DownLoad
    },
    {
      path: '/searchList/:aid',
      name: 'searchList',
      component: searchList
    }
  ]
})
