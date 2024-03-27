import { AppState } from "../AppState.js";
import { Portal } from "../models/Portal.js";
import { loadState, saveState } from "../utils/Store.js";

class PortalService {
  setActivePortal(activePortal) {
    console.log('At your service', activePortal);
  }


  addMoney() {
    AppState.money += .5
  }

  buyRandomPortal() {
    if (AppState.money >= 1) {
      let randomPortal = AppState.portals[Math.floor(Math.random() * AppState.portals.length)]
      AppState.money -= 1
      AppState.myPortals.unshift(randomPortal)
      console.log('bought random portal', randomPortal);
    }
  }

  buySpecificPortal(portalName) {
    if (AppState.money >= 1) {
      let specificPortal = AppState.portals.find((portal) => portal.name == portalName)
      AppState.money -= 1
      AppState.myPortals.unshift(specificPortal)
      console.log('bought specific portal', specificPortal);
    }
    else {
      console.log(`didn't buy`);
    }
  }








}

export const portalService = new PortalService