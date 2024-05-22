import { ICheetiPaata } from "@/lib/mongo/models/cheeti-paata.model";

const MONTHS_LIST = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

type Props = {
  startMonth: ICheetiPaata["cheetiStartMonth"];
  startYear: ICheetiPaata["cheetiStartYear"];
};
function CheetiMonthStamp(props: Props) {
  const { startMonth, startYear } = props;
  return (
    <div className="cheeti-month-stamp">
      <div className="text-xs">Started From (month):</div>
      <div className="font-bold">
        <span>{`${MONTHS_LIST[startMonth - 1]}`}</span>
        {", "}
        <span>{`${startYear}`}</span>
      </div>
    </div>
  );
}

export default CheetiMonthStamp;
