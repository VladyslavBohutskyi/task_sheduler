import { makeAutoObservable } from "mobx"
import { purpleTheme, blueTheme, blackTheme, orangeTheme } from "../themes"

class ThemeStore {
  constructor() {
    makeAutoObservable(this)
  }

  activeTheme: any = blackTheme
  setActiveTheme(theme: any){
    this.activeTheme = theme
  }
}

export default new ThemeStore()