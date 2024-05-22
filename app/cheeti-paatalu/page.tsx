import { getAllCheetiPaatalu } from "@/lib/mongo/operations/cheeti-paata.operations";
import CheetiPaataList from "./_components/cheeti-paata-list";

export default async function CheetiPaataluPage() {
  const cheetiPaatalu = await getAllCheetiPaatalu();

  return (
    <div className="cheeti-paatalu-list min-h-screen">
      <h1 className="text-2xl font-bold text-center pb-10">
        List of Cheeti Paatalu Participated
      </h1>
      <CheetiPaataList list={cheetiPaatalu} />
    </div>
  );
}
