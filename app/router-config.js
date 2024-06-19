import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PortalController } from "./controllers/PortalController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [PortalController],
    view: '/app/views/VMPortalsView.html'
    // view: /*html*/`
    // <div class="bg-white p-3">
    //   <div class="card-body">
    //     <p>Home Page</p>
    //     <button class="btn btn-dark" onclick="app.PortalController.testButton()">😎</button>
    //   </div>
    // </div>
    // `
  }
])