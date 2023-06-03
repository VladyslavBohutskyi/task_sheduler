import { makeAutoObservable } from "mobx"
import { toJS } from "mobx"
import { ICategory } from "../modules/notes/models"
import { purple } from "@mui/material/colors"

class NoteStore {
  constructor() {
    makeAutoObservable(this)
  }

  notesArray: ICategory[] = [
    {
      name: 'Game',
      color: purple[400],
    },
    {
      name: 'Movie',
      color: '#8345F7',
    },
    {
      name: 'Work',
      color: '#413BD4',
    },
    {
      name: 'Food',
      color: '#0BCDD7',
    }
  ]

}

const noteStore = new NoteStore()
export { noteStore }