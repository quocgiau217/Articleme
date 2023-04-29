import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import ViewArticle from "../views/ViewArticle.vue";
import BlogPage from "../views/Blog.vue";
import Signin from "../views/Signin.vue";
import Register from "../views/Register.vue";
import Write from "../views/Write.vue";
import Profile from "../views/Profile.vue";
import ViewPosts from "../views/ViewPosts.vue";
import EditPost from "../views/EditPost.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path:'/',
      name:'home',
      component: Home,
    },
    {
      path:'/article/view/:id',
      name:'View Article',
      component:ViewArticle,
    },
    {
      path:'/blog',
      name:"View All Articles",
      component:BlogPage,
    },
    {
      path:'/signin',
      name:"Signin",
      component:Signin,
    },
    {
      path:"/register",
      name:"Register Now",
      component:Register,
    },
    {
      path:"/write",
      name:"Write Article",
      component:Write,
    },
    {
      path:"/profile",
      name:"View Profile",
      component:Profile,
    },
    {
      path:"/view/posts",
      name:"View Posts",
      component:ViewPosts,
    },
    {
      path:"/post/edit/:id",
      name:"Edit Post",
      component:EditPost,
    }
  ]
})

export default router
