import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
const routes =[
    {
        path:"/",
        name:"Home",
        component: Home,
    },
    {
        path:"/Residence",
        name:"Residence",
        component: ()=> import("../views/Residence.vue"),
    },
    {
        path:"/Resdetails/1",
        name:"ResidenceDetails",
        component:()=>import("../components/ResidenceDetail.vue")
    },
    {
        path:"/RentResidence",
        name:"RentResidence",
        component:() => import("../components/RentResidence.vue")
    },
    {
        path:"/Office",
        name:"Office",
        component:()=>import("../views/Office.vue"),
    },
    {
        path:"/Properties",
        name:"Properties",
        component:()=>import("../views/Properties.vue")
    },
    {
        path:"/Agents",
        name:"Agents",
        component:()=>import("../views/Agents.vue")
    },
    {
        path:"/PropDetails",
        name:"Properties Details",
        component:()=>import("../components/PropertiesDetail.vue")
    },
    {
        path:"Office/1",
        name:"Office Details",
        component:()=>import("../components/OfficeDetail.vue")
    }
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });

export default router;