import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import { RealState } from "../types/real-state"
import { useDispatch } from "react-redux"
import { createRealState } from "../state/redux/realStateReducer"

interface RealStateForm {
  owner: string
  location: string
  description: string
  listingPrice: number
  url: string
}

const schema = yup.object({
  owner: yup.string().required(),
  location: yup.string().required(),
  description: yup.string().required(),
  listingPrice: yup.number().required().min(0),
  url: yup.string().required()
})

export default function SubmitListing() {
  const dispatch = useDispatch()

  const { register, handleSubmit, reset, formState: { isValid } } = useForm<RealStateForm>({
    resolver: yupResolver(schema),
    mode: "onChange"
  })

  const onSubmit: SubmitHandler<RealStateForm> = (data) => {
    const newRealState: RealState = {
      ...data,
      id: crypto.randomUUID(),
      isPublished: false
    }
    dispatch(createRealState(newRealState))
    reset()
  }
  return (
    <section className="flex w-full justify-center flex-col items-center max-w-3xl mx-auto">
      <header className="mb-5">
        <h2 className="text-xl font-bold text-orange-600">Add new Listing</h2>
      </header>

      <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Owner Name</label>
          <input {...register('owner')} type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="mb-5">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
          <input {...register('location')} type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="mb-5">
          <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <input {...register('description')} type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="mb-5">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Listing Price</label>
          <input {...register('listingPrice')} type="number" min={0} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture URL</label>
          <input {...register('url')} type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        <button type="submit" className={`focus:outline-none text-white ${isValid ? 'bg-orange-400 focus:ring-orange-900 hover:bg-orange-500'
          : 'bg-gray-800 hover:bg-gray-700 focus:ring-gray-400'} focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:ring-orange-900 mt-10`}>Submit</button>
      </form>
    </section>
  )
}