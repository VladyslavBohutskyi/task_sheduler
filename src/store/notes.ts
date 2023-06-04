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
      categoryUrl: 'game',
      name: 'Game',
      color: purple[400],
    },
    {
      categoryUrl: 'my-movie',
      name: 'Movie',
      color: '#8345F7',
    },
    {
      categoryUrl: 'work',
      name: 'Work',
      color: '#413BD4',
    },
    {
      categoryUrl: 'food',
      name: 'Food',
      color: '#0BCDD7',
    },
  ]

}

const notesStore = new NoteStore()
export { notesStore }