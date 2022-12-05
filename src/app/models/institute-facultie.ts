import {IAdministration} from "./administration";
//TODO: подумать что с ориентацией можно сделать можно сделатьприоритет средний

// мб тут лучше тайп использовать?
//https://stackoverflow.com/questions/35760096/typescript-enum-from-json-string
// export enum Orientation{
//   technical = 'technical',
//   humanitarian = 'humanitarian'
// }

export interface IInstituteFacultie {
  id?: string
  name:string
  abbreviation: string
  administration: IAdministration[] // мб лучше array<Administration> ибо будет легче работать
  orientation: string
  image_url:string
}
