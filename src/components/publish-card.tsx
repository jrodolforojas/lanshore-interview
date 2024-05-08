import { useDispatch } from "react-redux"
import { RealState } from "../types/real-state"
import { togglePublishRealState } from "../state/redux/realStateReducer"

export default function PublishCard({ info }: {
  info: RealState
}) {
  const { location, description, owner, listingPrice, isPublished, id } = info

  const dispatch = useDispatch()
  const togglePublish = () => {
    dispatch(togglePublishRealState(id))
  }
  return (
    <article className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover h-full w-48 rounded-none rounded-s-lg" src="https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A0d37867b-d0a8-44b7-8c62-a1c73809e34e?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1" alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{location}</h5>
        <span>{owner}</span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <h4 className="font-bold text-lg text-green-500">${listingPrice}</h4>
        <label className="inline-flex items-center mb-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" checked={isPublished} onClick={togglePublish} />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{isPublished ? 'Unpublish' : 'Publish'}</span>
        </label>
      </div>
    </article>

  )
}