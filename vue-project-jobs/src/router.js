import { createMemoryHistory, createRouter } from 'vue-router';
import HomeView from "./components/HomeView.vue";
import EditJobView from "./components/EditJobView.vue";
import JobDetailView from "./components/JobDetailView.vue";
import AddJobView from "./components/AddJobView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/home", redirect: {name: "home"} },
  { path: "/detail/:id", component: JobDetailView},
  { path: "/edit/:id", component: EditJobView},
  { path: "/add", component: AddJobView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
