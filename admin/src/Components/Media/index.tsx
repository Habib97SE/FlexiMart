import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import MyUploader from "@/CommonComponents/CommonDropzone";
import Datatable from "@/CommonComponents/DataTable";
import { MediaData } from "@/Data/Media";
import { Fragment } from "react";
import { Card, CardBody, CardHeader, Container } from "reactstrap";

const Media = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="Media" parent="Media" />
      <Container fluid>
        <Card>
          <CardHeader>
            <h5>Dropzone Media</h5>
          </CardHeader>
          <CardBody>
            <MyUploader />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h5>Media File List</h5>
          </CardHeader>
          <CardBody>
            <div id="batchDelete" className="category-table media-table coupon-list-delete">
              <Datatable multiSelectOption={true} myData={MediaData} pageSize={10} pagination={true} class="-striped -highlight" />
            </div>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Media;
