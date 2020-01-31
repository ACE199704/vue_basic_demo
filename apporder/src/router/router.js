import Home from "../components/Home.vue";
import History from "../components/about/History.vue";
import Delivery from "../components/about/Delivery.vue";
import OrderingGuide from "../components/about/orderingGuide.vue";
export const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: Home,
      history: History,
      delivery: Delivery,
      orderingGuide: OrderingGuide
    }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../components/about/About.vue"),
    redirect: { name: "contactLink" },
    children: [
      {
        path: "/about/contact",
        name: "contactLink",
        component: () => import("../components/about/contact.vue"),
        children: [
          {
            path: "/about/contact/people",
            name: "peopleLink",
            component: () =>
              import("../components/about/content/contactpeople.vue")
          },
          {
            path: "/about/contact/number",
            name: "numberLink",
            component: () =>
              import("../components/about/content/contactNum.vue")
          }
        ],
        redirect: { name: "peopleLink" }
      },
      {
        path: "/about/history",
        name: "historyLink",
        component: History
      },
      {
        path: "/about/delivery",
        name: "deliveryLink",
        component: Delivery
      },
      {
        path: "/about/orderingGuide",
        name: "orderingGuideLink",
        component: OrderingGuide
      }
    ]
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../components/Menu.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/Register.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../components/Admin.vue")
  },
  { path: "*", redirect: "/" }
];
