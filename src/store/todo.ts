import { makeAutoObservable, toJS } from "mobx"
import { ITaskItem } from "../modules/todo/models";
import { log } from "console";



class TodoStore {
  constructor() {
    makeAutoObservable(this)
  }

  todosArray: ITaskItem[] =
    (localStorage.getItem('todo')) == null ? [] : JSON.parse(localStorage.getItem('todo') || '')

  addNewTask(taskItem: ITaskItem) {
    const newTask: ITaskItem = {
      ...taskItem,
      status: true,
      id: Date.now(),
    }
    this.todosArray = [...this.todosArray, newTask]
    localStorage.setItem('todo', JSON.stringify(this.todosArray))
  }

  changeStatusTask(id: number | undefined) {
    this.todosArray.map((e) => {
      if (e.id == id) {
        e.status = !e.status
      }
    })
    localStorage.setItem('todo', JSON.stringify(this.todosArray))
  }

  deleteTask(id: number | undefined) {
    this.todosArray = this.todosArray.filter(e => e.id !== id)
    localStorage.setItem('todo', JSON.stringify(this.todosArray))
  }


}

export default new TodoStore()