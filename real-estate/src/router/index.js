import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Residence",
        name: "Residence",
        component: () => import("../views/Residence.vue"),
    },
    {
        path: "/Resdetails/1",
        name: "ResidenceDetails",
        component: () => import("../components/ResidenceDetail.vue")
    },
    {
        path: "/RentResidence",
        name: "RentResidence",
        component: () => import("../components/RentResidence.vue")
    },
    {
        path:"/SellResidence",
        name:"SellResidence",
        component:()=>import("../components/SellResidence.vue")
    
    },
    {
        path: "/AddResidence",
        name: "addResidence",
        component: () => import("../components/AddResidence.vue")
    },{
        path:"/EditResidence/1",
        name:"Edit",
        component:() => import("../components/EditResidence.vue")
    },
    {
        path: "/register",
        name: "Register",
        component:() => import("../views/Register.vue"),
    },
    {
        path: "/Office",
        name: "Office",
        component: () => import("../views/Office.vue"),
    },
    {
        path:"/AddOffice",
        name:"AddOffice",
        component:()=>import("../components/AddOffice.vue")
    },
    {
        path:"/EditOffice",
        name:"EditOffice",
        component:()=>import("../components/EditOffice.vue")
    },
    {
        path:"/RentOffice",
        name:"RentOffice",
        component:()=>import("../components/RentOffice.vue")
    },
    {
        path:"/SellOffice",
        name:"SellOffice",
        component:()=>import("../components/SellOffice.vue")
    },
    {
        path:"/AgentDetails/1",
        name:"AgentDetails",
        component:()=>import("../components/AgentDetails.vue")
    },
    {
        path:"/Agents",
        name:"Agents",
        component:()=>import("../views/Agents.vue")
    },
    {
        path: "/Properties",
        name: "Properties",
        component: () => import("../views/Properties.vue")
    },
    {
        path:"/AddProperties",
        name:"AddProperies",
        component:()=> import ("../components/AddProperites.vue")
    },
    {
        path:"/AddAgent",
        name:"AddAgent",
        component:()=>import("../components/AddAgent.vue")
    },
    {
        path:"/EditAgent",
        name:"EditAgent",
        component:() => import("../components/EditAgent.vue")
    },
    {
        path: "/PropDetails",
        name: "Properties Details",
        component: () => import("../components/PropertiesDetail.vue")
    },
    {
        path:"/EditProperties",
        name:"EditProperties",
        component:() => import("../components/EditProperties.vue")
    },
    {
        path: "/Office/Details/1",
        name: "Office Details",
        component: () => import("../components/OfficeDetail.vue")
    }
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;