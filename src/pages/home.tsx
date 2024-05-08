import Card from "../components/card";
import { realStates } from "../utils/mocks/real-states";

export default function Home() {
  return (
    <section className="flex w-full justify-center">
      <ul className="gap-y-5 flex flex-col">
        {realStates.filter((realStates) => realStates.isPublished).map((realState) =>
          <Card key={realState.id} info={realState} />
        )}
      </ul>
    </section>
  )
}