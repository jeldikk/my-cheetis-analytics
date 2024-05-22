import { CheetiPaataDetailsProvider } from "@/context/cheeti-paata-detail.context";
import MenuTabs from "./_components/menu-tabs";
import { getCheetiPaataById } from "@/lib/mongo/operations/cheeti-paata.operations";
import { getCheetiPaymentsById } from "@/lib/mongo/operations/cheeti-payment.operations";
import { Suspense } from "react";
import CheetiPaataluPageLoader from "./loading";

type Props = {
  params: {
    cheetiId: string;
  };
  paataDetails: React.ReactNode;
  paymentDetails: React.ReactNode;
  children: React.ReactNode;
};

type CheetiPaataDetailProps = {
  cheetiId: string;
  children: React.ReactNode;
};

async function CheetiPaataDetailActions(props: CheetiPaataDetailProps) {
  const { cheetiId, children } = props;
  const cheeti = await getCheetiPaataById(cheetiId);
  const payments = await getCheetiPaymentsById(cheetiId);
  return (
    <CheetiPaataDetailsProvider cheeti={cheeti} payments={payments}>
      <MenuTabs />
      {children}
    </CheetiPaataDetailsProvider>
  );
}

export default async function CheetiPaataDetailLayout({
  params,
  paataDetails,
  paymentDetails,
  children,
}: Readonly<Props>) {
  return (
    <div className="cheeti-paata-detail-layout h-screen pt-16">
      <div className="container mx-auto h-full">
        <div className="flex gap-4 h-full">
          <div className="banner-with-tabs h-full  w-2/3">
            <div className="h-1/4 border rounded-lg shadow-lg">
              {paataDetails}
            </div>
            <div className="content h-3/4 py-3">
              <Suspense fallback={<CheetiPaataluPageLoader />}>
                <CheetiPaataDetailActions cheetiId={params.cheetiId}>
                  {children}
                </CheetiPaataDetailActions>
              </Suspense>
            </div>
          </div>
          <div className="cheeti-info w-1/3 border rounded-lg shadow-lg">
            {paymentDetails}
          </div>
        </div>
      </div>
    </div>
  );
}
