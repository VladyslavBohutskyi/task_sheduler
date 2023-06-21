import { makeAutoObservable } from "mobx"
import { toJS } from "mobx"
import { IBody, ICategory, INote } from "../modules/notes/models"


class NoteStore {
  constructor() {
    makeAutoObservable(this)
  }


  notesArray: ICategory[] =
    JSON.parse(localStorage.getItem('notes') ?? `[]`)


  addNoteCategory(note: ICategory) {
    this.notesArray.push(note)
    localStorage.setItem('notes', JSON.stringify(this.notesArray))
  }

  addNote(newNote: INote) {
    this.notesArray.map((e) => e.categoryUrl === newNote.parent ? e.notes.push(newNote) : false)
    localStorage.setItem('notes', JSON.stringify(this.notesArray))
  }

  saveNote({ category, name, body }: IBody) {
    this.notesArray.map(
      ((categoryNote) => categoryNote.categoryUrl === category
        ?
        categoryNote.notes.map((note) => note.noteUrl === name
          ?
          note.body = body
          :
          false)
        :
        false))
    localStorage.setItem('notes', JSON.stringify(this.notesArray))
  }
}

const notesStore = new NoteStore()
export { notesStore }