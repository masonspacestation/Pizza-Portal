

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
  <button onclick="app.PortalController.setActivePortal('${this.name}')" class="w-100 btn btn-outline-light p-2">
    
    <img height="200px" width="200px" class="fs-2" src="${this.imgUrl}"></img>
    <div class="fw-bold">${this.name}</div>
  </button>
</div>
`
  }

  get activeCard() {
    return `
    <div class="card shadow portal-card p-2">
      <img width="250px" height="250px" src="${this.imgUrl}" alt="" class="card-img">
      <div class="card-body">
        <h2 class="text-center">${this.name}</h2>
      </div>
      card will display here
    </div>
    `
  }






















}