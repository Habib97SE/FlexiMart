import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const GeneFormTop = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDate = (date: Date) => {
    setStartDate(date);
  };

  const handleEndDate = (date: Date) => {
    setEndDate(date);
  };

  return (
    <>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>* Name</Label>
          </Col>
          <Col md="7">
            <Input id="validationCustom0" type="text" required />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>* Code</Label>
          </Col>
          <Col md="7">
            <Input id="validationCustom1" type="text" required />
          </Col>
          <div className="valid-feedback">Please Provide a Valid Coupon Code.</div>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>Start Date</Label>
          </Col>
          <Col md="7">
            <DatePicker selected={startDate} onChange={handleStartDate} />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>End Date</Label>
          </Col>
          <Col md="7">
            <DatePicker selected={endDate} onChange={handleEndDate} />
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default GeneFormTop;
