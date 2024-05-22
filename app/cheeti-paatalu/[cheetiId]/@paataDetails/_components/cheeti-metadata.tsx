import { Badge, Button } from "flowbite-react";
import { ICheetiPaata } from "@/lib/mongo/models/cheeti-paata.model";
import FormSubmitButton from "@/components/form-submit-button";
import { closeCheetiPaataAction } from "@/lib/actions/cheeti-paata.actions";

type Props = {
  cheeti: ICheetiPaata;
};

export default function CheetiMetadata(props: Props) {
  const { cheeti } = props;
  return (
    <div className="cheeti-metadata flex justify-between items-center  py-2 px-4">
      {cheeti.isClosed ? (
        <Badge color="pink" className="py-1 px-2 hover:cursor-default">
          Closed
        </Badge>
      ) : (
        <Badge color="info" className="py-1 px-2">
          Open
        </Badge>
      )}
      <div className="controls">
        <form action={closeCheetiPaataAction}>
          <input hidden name="cheetiId" value={cheeti.cheetiId} />
          <FormSubmitButton
            color={"failure"}
            size={"xs"}
            label="Close Cheeti"
          />
        </form>
      </div>
    </div>
  );
}
