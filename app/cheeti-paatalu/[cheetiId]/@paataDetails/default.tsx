import PaataDetailsPage from "./page";

type Props = {
  params: {
    cheetiId: string;
  };
};
export default function DefaultPaataDetails(props: Props) {
  const { params } = props;
  return (
    <>
      <PaataDetailsPage params={params} />
    </>
  );
}
