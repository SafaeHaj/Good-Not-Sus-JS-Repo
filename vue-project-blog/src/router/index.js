import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreatePostView from "../views/CreatePostView.vue";
import PostDetailView from "../views/PostDetailView.vue";
import EditPostView from "@/views/EditPostView.vue";
import TagPostsView from "@/views/TagPostsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/createpost",
    name: "createpost",
    component: CreatePostView,
  },
  {
    path: "/editpost/:id",
    name: "editpost",
    component: EditPostView,
  },

  {
    path: "/postdetail/:id",
    name: "postdetail",
    component: PostDetailView,
  }, 
  {
    path: '/tags/:tag',
    component: TagPostsView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
