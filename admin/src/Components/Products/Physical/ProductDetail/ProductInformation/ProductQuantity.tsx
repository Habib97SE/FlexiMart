import { ChangeEvent, useState } from "react";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";

const ProductQuantity = () => {
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
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value));
  };
  
  return (
    <div className="add-product-form">
      <h6 className="product-title">quantity</h6>
      <fieldset className="qty-box mt-2 ms-0">
        <InputGroup className="bootstrap-touchspin">
          <div className="input-group-prepend">
            <Button color="primary" className="btn-square bootstrap-touchspin-down" onClick={DecreaseItem}>
              <i className="fa fa-minus"></i>
            </Button>
          </div>
          <div className="input-group-prepend">
            <InputGroupText className=" bootstrap-touchspin-prefix"></InputGroupText>
          </div>
          <Input className="touchspin" type="text" value={quantity} onChange={(event) => handleChange(event)} />
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
    </div>
  );
};

export default ProductQuantity;
