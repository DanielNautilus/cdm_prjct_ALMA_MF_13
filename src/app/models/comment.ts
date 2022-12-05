import {IReputation} from "./reputation";

export interface IComment {
  id?: string
  author_id: string
  source_id: string //это сурс где распологается данный элемент
  date_creation: string // это не строка а дата
  content: string
  reputation: IReputation
}
