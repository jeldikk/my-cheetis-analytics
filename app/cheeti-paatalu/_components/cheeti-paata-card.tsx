import { ICheetiPaata } from "@/lib/mongo/models/cheeti-paata.model";
import { Card, Badge } from "flowbite-react";
import Link from "next/link";
import CheetiMonthStamp from "./cheeti-month-stamp";

type Props = {
  cheetiPaata: ICheetiPaata;
};

export default function CheetiPaataCard(props: Props) {
  const {
    cheetiId,
    cheetiName,
    cheetiValue,
    cheetiTenure,
    managerName,
    cheetiStartMonth,
    cheetiStartYear,
    isClosed,
  } = props.cheetiPaata;
  return (
    <div className="cheeti-paata-item w-full shadow-2xl shadow-blue-400">
      <Card className="w-full border border-blue-300">
        <div className="metadata flex justify-end">
          {isClosed ? (
            <Badge color="failure">closed</Badge>
          ) : (
            <Badge color="purple">open</Badge>
          )}
        </div>
        <div className="flex justify-between">
          <div className="paata-names">
            <div className="text-lg font-bold">{cheetiName}</div>
            <div className="font-light">{managerName}</div>
          </div>
          <div className="paata-values">
            <div className="text-sm text-right">{cheetiValue}</div>
            <div className="text-right">0/{cheetiTenure}</div>
          </div>
        </div>
        <CheetiMonthStamp
          startMonth={cheetiStartMonth}
          startYear={cheetiStartYear}
        />
        <hr />
        <div className="actions flex justify-between font-mono">
          <Link href={`/cheeti-paatalu/${cheetiId}/payment`}>
            <span className="text-blue-600 underline font-bold">
              Add New Payment
            </span>
          </Link>
          <Link href={`/cheeti-paatalu/${cheetiId}/summary`}>
            <span className="text-purple-500 underline font-bold">
              Show Summary
            </span>
          </Link>
          <Link href={`/cheeti-paatalu/${cheetiId}/analysis`}>
            <span className="text-red-600 underline font-bold">Analyse</span>
          </Link>
        </div>
      </Card>
    </div>
  );
}
