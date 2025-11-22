import LoginPage from "pages/LoginPage.vue";
import DigimonPage from "pages/DigimonPage.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: LoginPage
      },
      {
        path: "digimons",
        component: DigimonPage
      }
    ]
  },

  // Ruta 404 (esto no se toca)
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
