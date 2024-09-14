import { Href, ImagePath } from "@/Constants";
import { SetStateAction, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Button, Col, Modal, ModalHeader } from "reactstrap";
import ProductQuantity from "./ProductQuantity";
import ProductTimer from "./ProductTimer";
const ProductInformation = () => {
  const sizes = ["s", "m", "l", "xl"];
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState<number>(1);
  const [active, setActive] = useState(0);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };
  const onStarClick = (nextValue: SetStateAction<number>) => {
    setRating(nextValue);
  };

  return (
    <Col xl="8">
      <div className="product-page-details product-right mb-0">
        <h2>WOMEN PINK SHIRT</h2>
        <div style={{ fontSize: 27, height: 31 }}>
          <ReactStars count={5} onChange={onStarClick} size={40} activeColor="#ffd700" value={0} />
        </div>
        <hr />
        <h6 className="product-title">product details</h6>
        <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,</p>
        <div className="product-price digits mt-2">
          <h3>
            $26.00 <del>$350.00</del>
          </h3>
        </div>
        <ul className="color-variant">
          <li className="bg-light0"></li>
          <li className="bg-light1"></li>
          <li className="bg-light2"></li>
        </ul>
        <hr />
        <h6 className="product-title size-text">
          select size
          <span className="pull-right">
            <a href={Href} data-toggle="modal" data-target="#sizemodal" onClick={onOpenModal}>
              size chart
            </a>
          </span>
        </h6>
        <Modal className="size-modal" isOpen={open} toggle={onCloseModal}>
          <ModalHeader toggle={onCloseModal}>
            <img src={`${ImagePath}/size-chart.jpg`} alt="" className="img-fluid blur-up lazyloaded" />
          </ModalHeader>
        </Modal>
        <div className="size-box">
          <ul>
            {sizes.map((item, i) => (
              <li key={i} onClick={() => setActive(i)} className={`${active == i ? "active" : ""}`}>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <ProductQuantity />
        <hr />
        <ProductTimer />
        <div className="m-t-15">
          <Button color="primary" className="m-r-10">
            Add To Cart
          </Button>
          <Button color="secondary">Buy Now</Button>
        </div>
      </div>
    </Col>
  );
};

export default ProductInformation;
