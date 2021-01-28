import Vue from "vue";
import VueRouter from "vue-router";
import BucketList from "@/views/BucketList.vue";
import Add from "@/views/Add.vue";
import ShowList from "@/views/ShowList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "bucket-list",
    component: BucketList
  },
  {
    path: "/add",
    name: "add-list",
    component: Add
  },
  {
    path: "/add/:id",
    name: "show-list",
    component: ShowList,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
