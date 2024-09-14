import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import TextEditor from "@/Components/TextEditor";
import { SetStateAction, useState } from "react";
import { Card, CardBody, FormGroup } from "reactstrap";

const DescriptionForm = () => {
  const [value, setValue] = useState<string | undefined>("");

  const onChange = (e: SetStateAction<string | undefined>) => {
    setValue(e);
  };
  return (
    <Card>
      <CommonCardHeader title="Add Description" />
      <CardBody>
        <div className="digital-add needs-validation">
          <FormGroup className=" mb-0">
            <div className="description-sm">
              <TextEditor />
            </div>
          </FormGroup>
        </div>
      </CardBody>
    </Card>
  );
};

export default DescriptionForm;
