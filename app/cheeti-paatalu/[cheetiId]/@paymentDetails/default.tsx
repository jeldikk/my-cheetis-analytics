import PaymentDetailsPage from "./page";
type Props = {
  params: {
    cheetiId: string;
  };
};
export default function DefaultPaataDetails(props: Props) {
  return <PaymentDetailsPage params={props.params} />;
}
