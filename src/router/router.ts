import VueRouter  from "vue-router";
import Vue from "vue";
import HomeHome from "../views/HomeHome.vue"
import TableTest from "../views/TableTest.vue"
import NotFound from "../views/NotFound.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeHome
    },
    {
        path:"/table_test/:search?",
        name:"table_test",
        component: TableTest
    },{
        path:"*",
        component: NotFound
    }
]

const router = new VueRouter(
    {
        mode: 'history',
        routes
    }
)

export default router