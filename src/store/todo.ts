import { makeAutoObservable } from "mobx"


class TodoStore {
  constructor() {
    makeAutoObservable(this)
  }
  todosArray = [
    {
      title: 'Drink coffe',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ad eos'
    },
  ]

  addNewTask(taskItem: ({title:string, body:string})){
    this.todosArray = [...this.todosArray, taskItem]
  }
}

export default new TodoStore()