import { useSelector } from "react-redux"
import { RealState } from "../types/real-state"
import PublishCard from "../components/publish-card"

export default function PublishListing() {
  const allRealStates = useSelector((state: RealState[]) => state)
  return (
    <section className="flex w-full justify-center flex-col items-center max-w-3xl mx-auto">
      <header className="mb-5">
        <h2 className="text-xl font-bold text-orange-600">Publish/Unpublish Listing</h2>
      </header>
      <ul className="gap-y-5 flex flex-col">
        {allRealStates.map((realState) =>
          <PublishCard key={realState.id} info={realState} />
        )}
      </ul>
    </section>
  )
}