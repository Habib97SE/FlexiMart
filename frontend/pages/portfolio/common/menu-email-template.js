import Link from "next/link";
import React from "react";
import { Media, Table } from "reactstrap";
import logo from "../../../public/assets/images/email-temp/logo.png";

const MasterMenu = () => {
  return (
    <>
      <Table
        style={{ marginBottom: "0" }}
        className="headerTable"
        cellPadding="0"
        cellSpacing="0">
        <tbody>
          <tr className="header">
            <td>
              <Media src={logo.src} className="main-logo" />
            </td>
            <td className="menu">
              <ul style={{ padding: "20px" }}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
                <li>
                  <Link href="/">Whishlist</Link>
                </li>
                <li>
                  <Link href="/">My Cart</Link>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>{" "}
    </>
  );
};

export default MasterMenu;
