import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import Datatable from "@/CommonComponents/DataTable";
import { VendorsListData } from "@/Data/Vendors";
import { Fragment } from "react";
import { Card, CardBody, Container } from "reactstrap";

const VendorsList = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="Vendor List" parent="Vendors" />
      <Container fluid>
        <Card>
          <CommonCardHeader title="Vendors Details" />
          <CardBody>
            <div className="clearfix"></div>
            <div id="batchDelete" className="category-table user-list order-table coupon-list-delete list-vendor-table">
              <Datatable multiSelectOption={true} myData={VendorsListData} pageSize={10} pagination={true} class="-striped -highlight" />
            </div>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default VendorsList;
