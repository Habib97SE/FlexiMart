import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import Datatable from "@/CommonComponents/DataTable";
import { UserListData } from "@/Data/Users";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { Button, Card, CardBody, CardHeader, Container } from "reactstrap";

const UserList = () => {
  const router = useRouter();
  return (
    <Fragment>
      <CommonBreadcrumb title="User List" parent="Users" />
      <Container fluid>
        <Card>
          <CardHeader>
            <h5>User Details</h5>
          </CardHeader>
          <CardBody>
            <div className="btn-popup pull-right">
              <Button color="secondary" onClick={() => router.push("/users/create-user")}>
                Create User
              </Button>
            </div>
            <div className="clearfix"></div>
            <div id="batchDelete" className="category-table user-list order-table coupon-list-delete">
              <Datatable multiSelectOption={true} myData={UserListData} pageSize={10} pagination={true} class="-striped -highlight" />
            </div>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default UserList;
