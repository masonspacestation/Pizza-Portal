import { AppState } from "../AppState.js";
import { Portal } from "../models/Portal.js";
import { portalService } from "../services/PortalService.js";
import { setHTML, setText } from "../utils/Writer.js"


export class PortalController {
  constructor() {
    console.log('🍕');
    this.drawPortalIcons()

    // this.setActivePortal()
    // this.drawActiveIcons()

    // this.setActivePortal()
    AppState.on('money', () => console.log('money has changed', AppState.money))
    AppState.on('money', this.drawMoney)




  }

  // drawActivePortal(portalName) {
  //   // let activePortal = AppState.portals.find(portal => portal.name == portalName)
  //   console.log('🔮');
  // }



  buyRandomPortal() {
    // let portalToBuy = AppState.portals.find(portal => portal.name == portalToBuy)
    portalService.buyRandomPortal()
  }



  drawPortalIcons() {
    const portals = AppState.portals
    let iconsContent = ''
    portals.forEach(portal => iconsContent += portal.portalsIconTemplate)
    setHTML('portal-icons', iconsContent)
  }

  setActivePortal(selectedPortal) {
    console.log('🍕🔮');
    let activePortal = AppState.portals.find(portal => portal.name == selectedPortal)
    portalService.setActivePortal(activePortal)
    // this.drawActivePortal()
    console.log(activePortal);
  }


  buySpecificPortal(portalName) {
    console.log('🎯', portalName);
    portalService.buySpecificPortal(portalName)

  }

  addMoney() {
    portalService.addMoney()

    console.log(AppState.money);
    this.drawMoney()
  }

  drawMoney() {
    const money = AppState.money
    setText(('money'), `$${money.toFixed(2)}`)
  }








}