export interface IEstimate {
  id?: string
  author_id: string
  source_id: string //это сурс где распологается данный элемент
  date_creation: string // это не строка а дата
  points: number[] //хня какая то вышла.....
  summary_result:number //это оценка которая будет рассчитывается из очков
}
