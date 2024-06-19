import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Portal } from "./models/Portal.js"
import { VMPortal } from "./models/VMPortal.js"

class ObservableAppState extends EventEmitter {

  money = 0

  portals = [
    new VMPortal({
      name: 'Pepperoni',
      price: 1,
      imgUrl: './assets/img/Pizza_Portal_0085.png',
      rarity: 1,
      topping1: 'Pepperoni',
      portal: 'legs',
      icon: '🍕',
    }),
    new VMPortal({
      name: 'Hawaiian',
      price: 1,
      imgUrl: `./assets/img/Pizza_Portal_0004.png`,
      rarity: 3,
      topping1: 'Ham',
      portal: 'cylinder',
      icon: '🍕',
    }),
    new VMPortal({
      name: 'Oops, All Meat',
      price: 1,
      imgUrl: `./assets/img/Pizza_Portal_0050.png`,
      rarity: 1,
      topping1: 'Sausage',
      portal: 'platter',
      icon: '🍕',
    }),
    new VMPortal({
      name: 'Gummy Worms',
      price: 1,
      imgUrl: `./assets/img/Pizza_Portal_0064.png`,
      rarity: 3,
      topping1: 'Gummy Worms',
      portal: 'cylinder',
      icon: '🍕',
    }),
    new VMPortal({
      name: 'Cheese',
      price: 1,
      imgUrl: './assets/img/Pizza_Portal_0083.png',
      rarity: 1,
      topping1: 'Cheese',
      portal: 'platter',
      icon: '🍕',
    }),
    new VMPortal({
      name: 'Bacon Spice',
      price: 1,
      imgUrl: `./assets/img/Pizza_Portal_0105.png`,
      rarity: 2,
      topping1: 'Jalapeno',
      portal: 'cylinder',
      icon: '🍕',
    }),
    new VMPortal({
      name: 'Pepperoni',
      price: 1,
      imgUrl: './assets/img/Pizza_Portal_0085.png',
      rarity: 1,
      topping1: 'Pepperoni',
      portal: 'legs',
      icon: '🍕',
    }),
    new VMPortal({
      name: 'Hawaiian',
      price: 1,
      imgUrl: `./assets/img/Pizza_Portal_0004.png`,
      rarity: 3,
      topping1: 'Ham',
      portal: 'cylinder',
      icon: '🍕',
    }),
    new VMPortal({
      name: 'Oops, All Meat',
      price: 1,
      imgUrl: `./assets/img/Pizza_Portal_0050.png`,
      rarity: 1,
      topping1: 'Sausage',
      portal: 'platter',
      icon: '🍕',
    }),
    new VMPortal({
      name: 'Gummy Worms',
      price: 1,
      imgUrl: `./assets/img/Pizza_Portal_0064.png`,
      rarity: 3,
      topping1: 'Gummy Worms',
      portal: 'cylinder',
      icon: '🍕',
    }),
    new VMPortal({
      name: 'Cheese',
      price: 1,
      imgUrl: './assets/img/Pizza_Portal_0083.png',
      rarity: 1,
      topping1: 'Cheese',
      portal: 'platter',
      icon: '🍕',
    }),
    new VMPortal({
      name: 'Bacon Spice',
      price: 1,
      imgUrl: `./assets/img/Pizza_Portal_0105.png`,
      rarity: 2,
      topping1: 'Jalapeno',
      portal: 'cylinder',
      icon: '🍕',
    })

  ]

  /**@type {VMPortal} */
  activePortal = null

  /** @type {VMPortal[]} */
  myPortals = []


}

export const AppState = createObservableProxy(new ObservableAppState())