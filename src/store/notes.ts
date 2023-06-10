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
      icon: 3,
      categoryUrl: 'game',
      name: 'Game',
      color: '#80A3FF',
    },
    {
      icon: 6,
      categoryUrl: 'my-movie',
      name: '#FDBE7E',
      color: '#F9A090',
    },
    {
      icon: 2,
      categoryUrl: 'work',
      name: 'Work',
      color: '#A59FDB',
    },
    {
      icon: 1,
      categoryUrl: 'food',
      name: 'Food',
      color: '#A59FDB',
    },
  ]

  addNote(note: ICategory){
    this.notesArray = [...this.notesArray, note]
  }
}

const notesStore = new NoteStore()
export { notesStore }