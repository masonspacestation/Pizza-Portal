import { AppState } from "../AppState.js";
import { Portal } from "../models/Portal.js";
import { loadState, saveState } from "../utils/Store.js";

class PortalService {


  addMoney() {
    AppState.money += .5
  }

  //#region buy

  buyRandomPortal() {
    if (AppState.money >= 1) {
      let randomPortal = AppState.portals[Math.floor(Math.random() * AppState.portals.length)]
      AppState.money -= 1
      AppState.myPortals.unshift(randomPortal)
      console.log('bought random portal', randomPortal);
      this.saveMyPortals()
    }
  }

  buySpecificPortal(portalName) {
    if (AppState.money >= 1) {
      let specificPortal = AppState.portals.find((portal) => portal.name == portalName)
      AppState.money -= 1
      AppState.myPortals.unshift(specificPortal)
      console.log('bought specific portal', specificPortal);
      this.saveMyPortals()
    }
    else {
      console.log(`didn't buy`);
    }
  }

  // #endregion buy

  setActivePortal(portalName) {
    const selectedPortal = AppState.portals.find(portal => portal.name == portalName)
    console.log('At your service', portalName);
    AppState.activePortal = selectedPortal
    console.log('service 2', selectedPortal);
  }

  saveMyPortals() {
    saveState('my-portals,', AppState.myPortals)
  }

  loadMyPortals() {
    const myPortals = loadState('my-portals', [Portal])
  }







}

export const portalService = new PortalService