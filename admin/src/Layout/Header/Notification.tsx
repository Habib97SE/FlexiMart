import { Href } from "@/Constants";
import React, { Fragment } from "react";
import { ShoppingBag, Download, AlertCircle } from "react-feather";
import { Media } from "reactstrap";

const Notification = () => {
  return (
    <Fragment>
      <ul className="notification-dropdown onhover-show-div p-0">
        <li>
          Notification <span className="badge rounded-pill badge-primary pull-right">3</span>
        </li>
        <li>
          <Media>
            <Media body>
              <h6 className="mt-0">
                <span>
                  <ShoppingBag />
                </span>
                Your order ready for Ship..!
              </h6>
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
            </Media>
          </Media>
        </li>
        <li>
          <Media>
            <Media body>
              <h6 className="mt-0 txt-success">
                <span>
                  <Download />
                </span>
                Download Complete
              </h6>
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
            </Media>
          </Media>
        </li>
        <li>
          <Media>
            <Media body>
              <h6 className="mt-0 txt-danger">
                <span>
                  <AlertCircle />
                </span>
                250 MB trash files
              </h6>
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
            </Media>
          </Media>
        </li>
        <li className="txt-dark">
          <a href={Href}>All</a> notification
        </li>
      </ul>
    </Fragment>
  );
};

export default Notification;
