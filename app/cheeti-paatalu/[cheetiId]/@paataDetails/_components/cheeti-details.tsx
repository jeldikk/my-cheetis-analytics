import CheetiMonthStamp from "@/app/cheeti-paatalu/_components/cheeti-month-stamp";
import { ICheetiPaata } from "@/lib/mongo/models/cheeti-paata.model";
import { Card } from "flowbite-react";

type Props = {
  cheeti: ICheetiPaata;
};

export default function CheetiDetailsBanner(props: Props) {
  const { cheeti } = props;
  return (
    <div className="cheeti-details-banner flex justify-between px-4">
      <div className="name-details">
        <h2 className="text-3xl font-bold py-3">{cheeti.cheetiName}</h2>
        <h4 className="text-xl font-semibold">{cheeti.managerName}</h4>
      </div>
      <div className="misc-details">
        <CheetiMonthStamp
          startMonth={cheeti.cheetiStartMonth}
          startYear={cheeti.cheetiStartYear}
        />

        <h4 className="py-2 text-3xl font-bold">{cheeti.cheetiValue}</h4>
      </div>
    </div>
  );
}
