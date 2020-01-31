import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homeLink",
    component: Home
  },
  {
    path: "/menu",
    name: "menuLink",
    component: () => import("../views/Menu")
  },
  {
    path: "/admin",
    name: "adminLink",
    component: () => import("../views/Admin")
    //路由独享守卫
    // beforeEnter: (to, from, next) => {
    //   alert("非登录状态，不能跳转");
    //   next("/login");
    // }
  },
  {
    path: "/about",
    name: "aboutLink",
    redirect: { name: "historyLink" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about/About"),
    children: [
      {
        path: "/about/history",
        name: "historyLink",
        component: () => import("../views/about/History.vue")
      },
      {
        path: "/contact",
        name: "contackLink",
        redirect: { name: "people" },
        component: () => import("../views/about/contact/Contact.vue"),
        children: [
          {
            path: "about/contact/phone_num",
            name: "phoneNum",
            component: () => import("../views/about/contact/phone_num.vue")
          },
          {
            path: "about/contact/people",
            name: "people",
            component: () => import("../views/about/contact/people.vue")
          }
        ]
      },
      {
        path: "/delivery",
        name: "DeliveryLink",
        component: () => import("../views/about/Delivery.vue")
      },
      {
        path: "/orderingGuide",
        name: "OrderingGuideLink",
        component: () => import("../views/about/OrderingGuide.vue")
      }
    ]
  },
  {
    path: "/register",
    name: "registerLink",
    component: () => import("../views/Register")
  },
  {
    path: "/login",
    name: "LoginLink",
    component: () => import("../views/Login")
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});
// //全局守卫
// router.beforeEach((to, from, next) => {
//   //   ${//to and from are Route Object,next() must be called to resolve the hook}
//   // console.log(to);
//   if (to.path == "/login" || to.path == "/register") {
//     next();
//   } else {
//     alert("请先登录");
//     next("/login");
//   }
// });
// // 后置钩子
// router.afterEach((to, from) => {
//   alert("afterEach");
// });
export default router;
