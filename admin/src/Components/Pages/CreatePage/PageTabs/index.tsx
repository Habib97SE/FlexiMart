import { Fragment } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Button } from "reactstrap";
import GeneralForm from "./GeneralForm";
import SEOForm from "./SEOForm";

const PageTabs = () => {
  return (
    <Fragment>
      <div>
        <Tabs>
          <TabList className="nav nav-tabs tab-coupon">
            <Tab className="nav-link">General</Tab>
            <Tab className="nav-link">SEO</Tab>
          </TabList>
          <TabPanel>
            <GeneralForm />
          </TabPanel>
          <TabPanel>
            <SEOForm />
          </TabPanel>
        </Tabs>
        <div className="pull-right">
          <Button color="primary">Save</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default PageTabs;
