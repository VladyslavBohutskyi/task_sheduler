import { makeAutoObservable } from "mobx"
import { toJS } from "mobx"
import { ICategory, INote } from "../modules/notes/models"


class NoteStore {
  constructor() {
    makeAutoObservable(this)
  }

  notesArray: ICategory[] =
    JSON.parse(localStorage.getItem('notes') ?? `[]`)


  addNoteCategory(note: ICategory) {
    this.notesArray = [...this.notesArray, note]
    localStorage.setItem('notes', JSON.stringify(this.notesArray))
  }

  addNote(newNote: INote){
    console.log(newNote);
    
  }
}

const notesStore = new NoteStore()
export { notesStore }