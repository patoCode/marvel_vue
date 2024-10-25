export interface DetailComicResponse {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: Data
}

export interface Data {
  offset: number
  limit: number
  total: number
  count: number
  results: Result[]
}

export interface Result {
  id: number
  digitalId: number
  title: Title
  issueNumber: number
  variantDescription: string
  description: string
  modified: string
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects?: []
  resourceURI: string
  urls: URL[]
  series: Series
  variants: Series[]
  collections?: []
  collectedIssues?: []
  dates: DateElement[]
  prices: Price[]
  thumbnail: Thumbnail
  images?: []
  creators: Characters
  characters: Characters
  stories: Characters
  events: Characters
}

export interface Characters {
  available: number
  collectionURI: string
  items: Item[]
  returned: number
}

export interface Item {
  resourceURI: string
  name: string
  role?: string
  type?: string
}

export interface DateElement {
  type: string
  date: string
}

export interface Price {
  type: string
  price: number
}

export interface Series {
  resourceURI: string
  name: Title
}

export enum Title {
  MarvelPreviews2017 = 'Marvel Previews (2017)',
  MarvelPreviews2017Present = 'Marvel Previews (2017 - Present)',
}

export interface Thumbnail {
  path: string
  extension: string
}

export interface URL {
  type: string
  url: string
}
