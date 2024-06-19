

export class VMPortal {

  constructor(data) {
    // this.id = generateID()
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.rarity = data.rarity
    this.topping1 = data.topping1
    this.portal = data.portal
    this.icon = data.icon
  }

  get portalsIconTemplate() {
    return `
    <div class="col-4">
      <div onclick="app.PortalController.setActivePortal('${this.name}')">
        <img class="w-100 m-1 rounded rounded-2 border border-2 mb-4" src="${this.imgUrl}"></img>
    </div>
  </div>
  `
  }
  // <button class="selector-button" onclick="app.PortalController.setActivePortal('${this.name}')" class="btn rounded rounded-2 btn-outline-light p-2">


  get activeCard() {
    return `
    <div class="card bg-dark shadow portal-card p-2">
      <img src="${this.imgUrl}" alt="" class="w-75 rounded rounded-1">
      <div class="card-body text-light">
        <h2 class="text-center">${this.name}</h2>
        <p class="text-wrap text-center">Pizza Portal beams you the pizza of your dreams</p>
      </div>
    </div>
    `
  }

  get buyButtonContent() {
    return `
    <button class="btn btn-success" onclick="app.PortalController.buySpecificPortal('${this.name}')">Buy
    This</button>
    `
  }

  static get inactiveBuyButton() {
    return `
    <button class="btn" disabled>Select Portal to Purchase</button>
    `
  }

  static get cardSilhouette() {
    return `
    <div class="card bg-dark shadow portal-card p-2">
      <img src="./assets/img/pizza-portal-ring.png" alt="" class="w-75 rounded rounded-1">
      </div>
      `
  }

  // <div class="card-body">
  //   <h2 class="text-center">Could be Anything</h2>
  //   <p class="text-wrap text-center">Pizza Portal beams you the pizza of your dreams</p>
  // </div>





















}