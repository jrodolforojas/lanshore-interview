import { useSelector } from "react-redux";
import Card from "../components/card";
import { RealState } from "../types/real-state";
import { Link } from "wouter";

export default function Home() {
  const realStates = useSelector((state: RealState[]) => state)
  const publishedRealStates = realStates.filter((realStates) => realStates.isPublished)

  if (publishedRealStates.length === 0) {
    return (
      <section className="flex w-full justify-center items-center flex-col h-full gap-y-5">
        <span className="mt-10 font-bold text-xl">No published real states yet</span>
        <Link href="/submitListings" className="block py-2 px-3 text-black bg-orange-400 rounded-full">New Listings</Link>
      </section>
    )
  }

  return (
    <section className="flex w-full justify-center">
      <ul className="gap-y-5 flex flex-col">
        {publishedRealStates.map((realState) =>
          <Card key={realState.id} info={realState} />
        )}
      </ul>
    </section>
  )
}