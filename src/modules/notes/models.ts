export interface INote {
  parent: string,
  title: string,
  body: string,
  date: string,
}

export interface ICategory {
  icon: number,
  categoryUrl?: string,
  name: string,
  color: string,
  notes: INote[]
}

