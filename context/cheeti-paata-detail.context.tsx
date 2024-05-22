"use client";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { createContext } from "react";
import { ICheetiPaata } from "@/lib/mongo/models/cheeti-paata.model";
import { ICheetiPayment } from "@/lib/mongo/models/cheeti-payment.model";
import { getCheetiPaataById } from "@/lib/mongo/operations/cheeti-paata.operations";
import { getCheetiPaymentsById } from "@/lib/mongo/operations/cheeti-payment.operations";

// interface ICheetiPaataDetail {
//   cheeti: ICheetiPaata;
//   payments: ICheetiPayment[];
// }

export interface ICheetiPaataDetailContext {
  cheeti: ICheetiPaata | null;
  payments: ICheetiPayment[] | null;
  isCheetiOwned: boolean;
  isManagerOwned: boolean;
  generateSummary: () => Record<string, string | number>;
  getCheetiInfo: () => void;
  getCheetiPayments: () => void;
}

export const CheetiPaataDetailContext =
  createContext<ICheetiPaataDetailContext>({} as ICheetiPaataDetailContext);

type Props = {
  children: React.ReactNode;
  cheeti: ICheetiPaata;
  payments: ICheetiPayment[];
};
// type Props = {
//   params: {
//     cheetiId: string;
//   };
//   children: React.ReactNode;
// };

export function CheetiPaataDetailsProvider(props: Props) {
  const { cheeti, payments, children } = props;
  // const { cheeti, payments, children } = props;
  //   const { cheetiDetails, paymentDetails } =
  // console.log({ details });
  const [cheetiInfo, setCheetiInfo] = useState<ICheetiPaata>(cheeti);
  const [cheetiPayments, setCheetiPayments] =
    useState<ICheetiPayment[]>(payments);

  const [isCheetiOwned, setIsCheetiOwned] = useState<boolean>(false);
  const [isManagerOwned, setIsManagerOwned] = useState<boolean>(false);

  useEffect(() => {
    const selfOwned = payments.find((pmnt) => pmnt.isOwned);
    const managerOwned = payments.find((pmnt) => pmnt.isManagerOwned);
    if (selfOwned) {
      setIsCheetiOwned(true);
    }
    if (managerOwned) {
      setIsManagerOwned(true);
    }
  }, [cheeti, payments]);

  const getCheetiInfo = () => cheetiInfo;

  const getCheetiPayments = () => cheetiPayments;

  const generateSummary = () => {
    return {
      paymentsCount: 12,
      recentDate: new Date().toString(),
      remaining: 8,
      totalCount: 20,
      previousAmount: "1232",
      maxAmount: "12321",
    };
  };

  return (
    <CheetiPaataDetailContext.Provider
      value={{
        cheeti,
        payments,
        isCheetiOwned,
        isManagerOwned,
        generateSummary,
        getCheetiInfo,
        getCheetiPayments,
      }}
    >
      {/* <SessionProvider session={session}></SessionProvider> */}
      {children}
    </CheetiPaataDetailContext.Provider>
  );
}
