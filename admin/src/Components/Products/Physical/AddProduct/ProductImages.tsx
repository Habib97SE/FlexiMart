import { ImagePath } from "@/Constants";
import { useState } from "react";
import { Col, Input, Row } from "reactstrap";

const ProductImages = () => {
  const [dummyImages, setDummyImages] = useState(["user.png", "user.png", "user.png", "user.png", "user.png", "user.png"]);

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    e.preventDefault();
    let reader = new FileReader();
    const image = e.target.files && e.target.files[0];

    if (image) {
      reader.onload = () => {
        const updatedDummyImages = [...dummyImages];
        updatedDummyImages[i] = reader.result as string; // Ensure result is a string
        setDummyImages(updatedDummyImages);
      };

      reader.readAsDataURL(image);
    }
  };

  return (
    <Col xl="5">
      <div className="add-product">
        <Row>
          <Col xl="9 " className="xl-50" sm="6" xs="9">
            <div className="add-product-image">
              <img src={`${ImagePath}/pro3/2.jpg`} alt="" className="img-fluid image_zoom_1 blur-up lazyloaded" />
            </div>
          </Col>
          <Col xl="3" className="xl-50" xs="3" sm="6 ">
            <ul className="file-upload-product">
              {dummyImages.map((res, i) => {
                return (
                  <li key={i}>
                    <div className="box-input-file">
                      <Input className="upload" type="file" onChange={(e) => handleImgChange(e, i)} />
                      <img alt="" src={`${ImagePath}/dashboard/${res}`} style={{ width: 50, height: 50 }} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ProductImages;
