import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Portal } from "./models/Portal.js"

class ObservableAppState extends EventEmitter {

  money = 0

  portals = [
    new Portal({
      name: 'Pepperoni',
      price: 1,
      imgUrl: './assets/img/Pizza_Portal_0085.png',
      rarity: 1,
      topping1: 'Pepperoni',
      portal: 'legs',
      icon: '🍕',
    }),
    new Portal({
      name: 'Cheese',
      price: 1,
      imgUrl: './assets/img/Pizza_Portal_0083.png',
      rarity: 1,
      topping1: 'Cheese',
      portal: 'platter',
      icon: '🍕',
    }),
    new Portal({
      name: 'Hawaiian',
      price: 1,
      imgUrl: `./assets/img/Pizza_Portal_0001.png`,
      rarity: 3,
      topping1: 'Ham',
      portal: 'cylinder',
      icon: '🍕',
    }),

  ]



  myPortals = []


}

export const AppState = createObservableProxy(new ObservableAppState())