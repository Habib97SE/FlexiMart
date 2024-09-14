import { useState } from "react";
import { Button, Col, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";

const TotalProducts = () => {
  const [quantity, setQuantity] = useState(1);

  const IncrementItem = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
    } else {
      return null;
    }
  };
  const DecreaseItem = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      return null;
    }
  };
  const handleChange = (event: any) => {
    setQuantity(event.target.value);
  };

  return (
    <FormGroup className=" mb-3">
      <Row>
        <Col xl="3" sm="4">
          <Label className=" fw-bold mb-0">Total Products :</Label>
        </Col>
        <fieldset className="qty-box ms-0">
          <InputGroup className="bootstrap-touchspin">
            <div className="input-group-prepend">
              <Button color="primary" className=" btn-square bootstrap-touchspin-down" onClick={DecreaseItem}>
                <i className="fa fa-minus"></i>
              </Button>
            </div>
            <div className="input-group-prepend">
              <InputGroupText className="bootstrap-touchspin-prefix"></InputGroupText>
            </div>
            <Input className="touchspin" type="text" value={quantity} onChange={handleChange} />
            <div className="input-group-append">
              <InputGroupText className=" bootstrap-touchspin-postfix"></InputGroupText>
            </div>
            <div className="input-group-append ms-0">
              <Button color="primary" className="btn-square bootstrap-touchspin-up" onClick={IncrementItem}>
                <i className="fa fa-plus"></i>
              </Button>
            </div>
          </InputGroup>
        </fieldset>
      </Row>
    </FormGroup>
  );
};

export default TotalProducts;
