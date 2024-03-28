

export class Portal {

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
        <img class="w-100 rounded rounded-2 border border-2 border-warning" src="${this.imgUrl}"></img>
      <div class="text-warning text-center fw-bold">${this.name}</div>
    </div>
  </div>
  `
  }
  // <button class="selector-button" onclick="app.PortalController.setActivePortal('${this.name}')" class="btn rounded rounded-2 btn-outline-light p-2">


  get activeCard() {
    return `
    <div class="card shadow portal-card p-2">
      <img src="${this.imgUrl}" alt="" class="w-100 rounded rounded-1">
      <div class="card-body">
        <h2 class="text-center">${this.name}</h2>
      </div>
      card will display here
    </div>
    `
  }

  static get cardSilhouette() {
    return `
    <div class="card shadow portal-card p-2">
      <img src="./assets/img/pizza-portal-ring.png" alt="" class="w-100 rounded rounded-1">
      <div class="card-body">
        <h2 class="text-center">Could be Anything</h2>
        <p>Pizza Portal beams you the pizza of your dreams</p>
      </div>
    </div>
    `
  }






















}