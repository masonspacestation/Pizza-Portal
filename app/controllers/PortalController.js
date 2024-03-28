import { AppState } from "../AppState.js";
import { Portal } from "../models/Portal.js";
import { portalService } from "../services/PortalService.js";
import { setHTML, setText } from "../utils/Writer.js"


export class PortalController {
  constructor() {
    console.log('🍕');
    this.drawPortalIcons()
    this.drawActivePortal()

    // this.setActivePortal()

    // this.setActivePortal()
    AppState.on('money', () => console.log('money has changed', AppState.money))
    AppState.on('money', this.drawMoney)
    AppState.on('activePortal', this.drawActivePortal)
    AppState.on('myPortals', this.drawMyPortals)
    portalService.loadMyPortals()




  }


  // #region buy

  buyRandomPortal() {
    portalService.buyRandomPortal()
  }

  buySpecificPortal(portalName) {
    console.log('🎯', portalName);
    portalService.buySpecificPortal(portalName)

  }
  // #endregion buy

  // #region money

  addMoney() {
    portalService.addMoney()

    console.log(AppState.money);
    this.drawMoney()
  }

  drawMoney() {
    const money = AppState.money
    setText(('money'), `$${money.toFixed(2)}`)
  }
  // #endregion money

  // #region set

  setActivePortal(selectedPortal) {
    console.log('🍕🔮');
    portalService.setActivePortal(selectedPortal)
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
    myPortals.forEach(portal => myPortalsContent += myPortals)
    setHTML('my-portals', myPortalsContent)
  }

  drawActivePortal() {
    const activePortal = AppState.activePortal
    console.log('controller draw', activePortal);
    if (activePortal != null) {
      setHTML('active-portal', activePortal.activeCard)
    }
    else {
      setHTML('active-portal', Portal.cardSilhouette)
    }
  }

  // #endregion draw







  test() {
    console.log('you can do that');
  }
}