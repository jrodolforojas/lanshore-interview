import { useSelector } from "react-redux";
import Card from "../components/card";
import { RealState } from "../types/real-state";

export default function Home() {
  const realStates = useSelector((state: RealState[]) => state)
  const publishedRealStates = realStates.filter((realStates) => realStates.isPublished)

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