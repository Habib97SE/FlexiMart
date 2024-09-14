import { Fragment } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Button, Form } from "reactstrap";
import AccountDetails from "./AccountDetails";
import CategoryPermissions from "./CategoryPermissions";
import ProductPermissions from "./ProductPermissions";

const UserTabs = () => {
  return (
    <Fragment>
      <Tabs>
        <TabList className="nav nav-tabs tab-coupon">
          <Tab className="nav-link">Account</Tab>
          <Tab className="nav-link">Permission</Tab>
        </TabList>
        <TabPanel>
          <AccountDetails />
        </TabPanel>
        <TabPanel>
          <Form className="needs-validation user-add" noValidate>
            <div className="permission-block">
              <ProductPermissions />
              <CategoryPermissions />
            </div>
          </Form>
        </TabPanel>
      </Tabs>
      <div className="pull-right">
        <Button color="primary">Save</Button>
      </div>
    </Fragment>
  );
};

export default UserTabs;
