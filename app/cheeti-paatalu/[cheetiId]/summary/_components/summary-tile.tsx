const { Card } = require("flowbite-react");

type Props = {
  title: string;
  subTitle: string;
  label: string | number;
};

export default function SummaryTile({ title, subTitle, label }: Props) {
  return (
    <div className="bg-blue-500 rounded-lg py-3 px-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="text-sm text-white mt-2 font-thin">{subTitle}</p>
      <div className="mt-2">
        <p className="text-3xl font-bold text-white text-right">{label}</p>
      </div>
    </div>
  );
}
