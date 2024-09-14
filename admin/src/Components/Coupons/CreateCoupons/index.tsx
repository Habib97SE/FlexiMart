import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Fragment } from "react";
import { Card, CardBody, Container } from "reactstrap";
import CouponTabs from "./CouponTabs";

const CreateCoupons = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="Create Coupon" parent="Coupon" />
      <Container fluid>
        <Card>
          <CommonCardHeader title="Discount Coupon Details" />
          <CardBody>
            <CouponTabs />
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default CreateCoupons;
