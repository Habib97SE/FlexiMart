import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Button, Card, CardBody, FormGroup, Input, Label } from "reactstrap";

const MetaDataForm = () => {
  return (
    <Card>
      <CommonCardHeader title="Meta Data" />
      <CardBody>
        <div className="digital-add needs-validation">
          <FormGroup>
            <Label className="col-form-label pt-0"> Meta Title</Label>
            <Input id="validationCustom05" type="text" required />
          </FormGroup>
          <FormGroup>
            <Label className="col-form-label">Meta Description</Label>
            <textarea rows={4} cols={12}></textarea>
          </FormGroup>
          <FormGroup className="mb-0">
            <div className="product-buttons text-center">
              <Button color="primary">Add</Button>
              <Button color="light">Discard</Button>
            </div>
          </FormGroup>
        </div>
      </CardBody>
    </Card>
  );
};

export default MetaDataForm;
