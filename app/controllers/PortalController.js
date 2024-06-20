import { AppState } from "../AppState.js";
import { Portal } from "../models/Portal.js";
import { VMPortal } from "../models/VMPortal.js";
import { portalService } from "../services/PortalService.js";
import { setHTML, setText } from "../utils/Writer.js"


export class PortalController {
  constructor() {
    console.log('🍕');
    this.drawPortalIcons()
    this.drawActivePortal()
    AppState.on('money', this.drawMoney)
    AppState.on('activePortal', this.drawActivePortal)
    AppState.on('myPortals', this.drawMyPortals)
    this.setBuyButtonArg()
  }


  // #region buy

  // async buyRandomPortal() {
  //   try {
  //     await portalService.buyRandomPortal()
  //   } catch (error) {
  //     setHTML('money', 'Insufficient Credits')
  //   }
  // }

  buySpecificPortal(portalName) {
    // try {
    portalService.buySpecificPortal(portalName)
    // }
    // catch (error) {
    //   setHTML('money', 'Insufficient Credits')
    // }
  }
  // #endregion buy

  // #region money

  addMoney() {
    portalService.addMoney()
    this.drawMoney()
  }

  drawMoney() {
    const money = AppState.money
    setText('money', `$${money.toFixed(2)}`)
  }
  // #endregion money

  // #region set

  setActivePortal(selectedPortal) {
    console.log('🍕🔮');
    portalService.setActivePortal(selectedPortal)
    this.setBuyButtonArg()
  }


  async unsetActivePortal() {
    await portalService.unSetActivePortal()
    this.setBuyButtonArg()
    setText('money', `$${AppState.money.toFixed(2)}`)
  }

  setBuyButtonArg() {
    const activePortal = AppState.activePortal
    if (activePortal != null) {
      let buyButtonContent = activePortal.buyButtonContent
      setHTML('buySpecificButton', buyButtonContent)
    }
    else {
      setHTML('buySpecificButton', VMPortal.inactiveBuyButton)
    }
  }
  // #endregion set

  // #region draw
  drawPortalIcons() {
    const portals = AppState.portals
    let iconsContent = ''
    portals.forEach(portal => iconsContent += portal.portalsIconTemplate)
    setHTML('portal-icons', iconsContent)
  }

  drawMyPortals() {
    const myPortals = AppState.myPortals
    let myPortalsContent = ''
    myPortals.forEach(portal => myPortalsContent += portal.portalsIconTemplate)
    setHTML('my-portals', myPortalsContent)
  }

  drawActivePortal() {
    const activePortal = AppState.activePortal
    console.log('controller draw', activePortal);
    if (activePortal != null) {
      setHTML('active-portal', activePortal.activeCard)
    }
    else {
      setHTML('active-portal', VMPortal.cardSilhouette)
    }
  }

  // #endregion draw







  test() {
    console.log('you can do that');
  }
}