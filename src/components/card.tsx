import { RealState } from "../types/real-state"
import { DEFAULT_IMAGE } from "../utils/mocks/real-states"

export default function Card({ info }: {
  info: RealState
}) {
  const { location, description, owner, listingPrice, photoUrl } = info
  return (
    <article className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover h-full w-48 rounded-none rounded-s-lg" src={photoUrl ?? DEFAULT_IMAGE} alt={location} />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{location}</h5>
        <span>{owner}</span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <h4 className="font-bold text-lg text-green-500">${listingPrice}</h4>
      </div>
    </article>

  )
}