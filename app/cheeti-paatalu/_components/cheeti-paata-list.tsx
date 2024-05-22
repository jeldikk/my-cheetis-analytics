import { ICheetiPaata } from "@/lib/mongo/models/cheeti-paata.model";
import CheetiPaataCard from "./cheeti-paata-card";

type Props = {
  list: ICheetiPaata[];
};

function CheetiPaataList(props: Props) {
  const { list } = props;
  // console.log({ list });
  return (
    <div className="cheeti-paata-list w-5/6 mx-auto grid gap-4 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {list &&
        list.map((cheeti) => (
          <CheetiPaataCard cheetiPaata={cheeti} key={cheeti.cheetiId} />
        ))}
    </div>
  );
}

export default CheetiPaataList;
