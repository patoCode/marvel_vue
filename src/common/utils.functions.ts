import { marvelApi, params } from '@/api/marvelApi'
import type { ComicInterface } from '@/interfaces/ComicInterface'
import type {
  DetailComicResponse,
  Result as resultDetalle,
} from '@/interfaces/DetailComicResponse'
import type { ResponseMarvel, Result } from '@/interfaces/ResponseMarvel'

export const arrayComics = async (): Promise<ComicInterface[]> => {
  const list = await marvelApi.get<ResponseMarvel>('/comics' + params)
  const _dataComic: ComicInterface[] = list.data.data.results.map(
    (comic: Result) => {
      return {
        name: comic.title,
        id: +comic.id,
        pageCount: comic.pageCount,
        thumb: comic.thumbnail.path + '.' + comic.thumbnail.extension,
        abstract: comic.textObjects[0]?.text,
      }
    },
  )
  return _dataComic
}

export const detailComic = async (id: string): Promise<resultDetalle> => {
  const _comic = await marvelApi.get<DetailComicResponse>(
    '/comics/' + id + params,
  )
  return _comic.data.data.results[0]
}
