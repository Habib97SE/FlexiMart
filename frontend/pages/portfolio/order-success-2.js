import React from "react";
import { Table, Media } from "reactstrap";
import pro2 from "../../public/assets/images/email-temp/pro-2.jpg";
import pro3 from "../../public/assets/images/email-temp/pro-3.jpg";
import pro1 from "../../public/assets/images/email-temp/pro-1.jpg";
import space from "../../public/assets/images/email-temp/space.jpg";
import delivery2 from "../../public/assets/images/email-temp/delivery-2.png";
import SocialEmailTemplate from "./common/social-email-template";

const OrderSuccess2 = () => (
  <>
    <Table
      style={{
        padding: "0 30px",
        marginBottom: "0",
        backgroundColor: "#fff",
        boxShadow: "0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353)",
      }}
      borderless
      className="email-template-table order-success2"
      cellPadding="0"
      cellSpacing="0"
    >
      <tbody>
        <tr>
          <td>
            <Table
              className="main-sec"
              align="left"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              style={{ textAlign: "left" }}
              width="100%"
            >
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <Media
                      src={delivery2.src}
                      alt=""
                      style={{ margin: "0 auto 30px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style={{ fontSize: "14px" }}>
                      <b>Hi John Doe,</b>
                    </p>
                    <p style={{ fontSize: "14px" }}>
                      Order Is Successfully Processsed And Your Order Is On The
                      Way,
                    </p>
                    <p style={{ fontSize: "14px" }}>
                      Transaction ID : 267676GHERT105467,
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table
              className="product-info"
              cellPadding="0"
              cellSpacing="0"
              border="0"
              align="left"
              style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: "#fafafa",
                      border: "1px solid #ddd",
                      padding: "15px",
                      letterSpacing: "0.3px",
                      width: "50%",
                    }}
                  >
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#000000",
                        lineHeight: "16px",
                        paddingBottom: "13px",
                        borderBottom: "1px solid #e6e8eb",
                        letterSpacing: "-0.65px",
                        marginTop: "0",
                        marginBottom: "13px",
                      }}
                    >
                      Your Shipping Address
                    </h5>
                    <p
                      style={{
                        textAlign: "left",
                        fontWeight: "normal",
                        fontSize: "14px",
                        color: "#000000",
                        lineHeight: "21px",
                        marginTop: "0",
                      }}
                    >
                      268 Cambridge Lane New Albany,
                      <br /> IN 47150268 Cambridge Lane <br />
                      New Albany, IN 47150
                    </p>
                  </td>
                  <td>
                    <Media src={space.src} alt=" " height="25" width="30" />
                  </td>
                  <td
                    style={{
                      backgroundColor: "#fafafa",
                      border: "1px solid #ddd",
                      padding: "15px",
                      letterSpacing: "0.3px",
                      width: "50%",
                    }}
                  >
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#000000",
                        lineHeight: "16px",
                        paddingBottom: "13px",
                        borderBottom: "1px solid #e6e8eb",
                        letterSpacing: "-0.65px",
                        marginTop: "0",
                        marginBottom: "13px",
                      }}
                    >
                      Your Billing Address:
                    </h5>
                    <p
                      style={{
                        textAlign: "left",
                        fontWeight: "normal",
                        fontSize: "14px",
                        color: "#000000",
                        lineHeight: "21px",
                        marginTop: "0",
                      }}
                    >
                      268 Cambridge Lane New Albany,
                      <br /> IN 47150268 Cambridge Lane <br />
                      New Albany, IN 47150
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table
              className="order-detail"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              align="left"
              style={{ width: "100%", marginBottom: "50px" }}
            >
              <thead>
                <tr className="email-tr">
                  <th>PRODUCT</th>
                  <th style={{ paddingLeft: "15px" }}>DESCRIPTION</th>
                  <th>QUANTITY</th>
                  <th>PRICE </th>
                </tr>
              </thead>
              <tbody>
                <tr className="email-tr">
                  <td>
                    <Media src={pro1.src} alt="" width="80" />
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ marginTop: "15px" }}>
                      Three seater Wood Style sofa for Leavingroom{" "}
                    </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5
                      style={{
                        fontSize: "14px",
                        color: "#444",
                        marginTop: "15px",
                        marginBottom: "0px",
                      }}
                    >
                      Size : <span> L</span>{" "}
                    </h5>
                    <h5
                      style={{
                        fontSize: "14px",
                        color: "#444",
                        marginTop: "10px",
                      }}
                    >
                      QTY : <span>1</span>
                    </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5
                      style={{
                        fontSize: "14px",
                        color: "#444",
                        marginTop: "15px",
                      }}
                    >
                      <b>$500</b>
                    </h5>
                  </td>
                </tr>
                <tr className="email-tr">
                  <td>
                    <Media src={pro2.src} alt="" width="80" />
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ marginTop: "15px" }}>
                      Three seater Wood Style sofa for Leavingroom{" "}
                    </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5
                      style={{
                        fontSize: "14px",
                        color: "#444",
                        marginTop: "15px",
                        marginBottom: "0px",
                      }}
                    >
                      Size : <span> L</span>{" "}
                    </h5>
                    <h5
                      style={{
                        fontSize: "14px",
                        color: "#444",
                        marginTop: "10px",
                      }}
                    >
                      QTY : <span>1</span>
                    </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5
                      style={{
                        fontSize: "14px",
                        color: "#444",
                        marginTop: "15px",
                      }}
                    >
                      <b>$500</b>
                    </h5>
                  </td>
                </tr>
                <tr className="email-tr">
                  <td>
                    <Media src={pro3.src} alt="" width="80" />
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ marginTop: "15px" }}>
                      Three seater Wood Style sofa for Leavingroom{" "}
                    </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5
                      style={{
                        fontSize: "14px",
                        color: "#444",
                        marginTop: "15px",
                        marginBottom: "0px",
                      }}
                    >
                      Size : <span> L</span>{" "}
                    </h5>
                    <h5
                      style={{
                        fontSize: "14px",
                        color: "#444",
                        marginTop: "10px",
                      }}
                    >
                      QTY : <span>1</span>
                    </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5
                      style={{
                        fontSize: "14px",
                        color: "#444",
                        marginTop: "15px",
                      }}
                    >
                      <b>$500</b>
                    </h5>
                  </td>
                </tr>
                <tr className="email-tr">
                  <td>
                    <Media src={pro2.src} alt="" width="80" />
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ marginTop: "15px" }}>
                      Three seater Wood Style sofa for Leavingroom{" "}
                    </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5
                      style={{
                        fontSize: "14px",
                        color: "#444",
                        marginTop: "15px",
                        marginBottom: "0px",
                      }}
                    >
                      Size : <span> L</span>{" "}
                    </h5>
                    <h5
                      style={{
                        fontSize: "14px",
                        color: "#444",
                        marginTop: "10px",
                      }}
                    >
                      QTY : <span>1</span>
                    </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5
                      style={{
                        fontSize: "14px",
                        color: "#444",
                        marginTop: "15px",
                      }}
                    >
                      <b>$500</b>
                    </h5>
                  </td>
                </tr>
                <tr className="pad-left-right-space">
                  <td className="m-t-5" colSpan={2} align="left">
                    <p style={{ fontSize: "14px" }}>Subtotal : </p>
                  </td>
                  <td className="m-t-5" colSpan={2} align="right">
                    <b>$2000</b>
                  </td>
                </tr>
                <tr className="pad-left-right-space">
                  <td colSpan={2} align="left">
                    <p style={{ fontSize: "14px" }}>TAX :</p>
                  </td>
                  <td colSpan={2} align="right">
                    <b>$5</b>
                  </td>
                </tr>
                <tr className="pad-left-right-space">
                  <td colSpan={2} align="left">
                    <p style={{ fontSize: "14px" }}>VAT :</p>
                  </td>
                  <td colSpan={2} align="right">
                    <b>$5</b>
                  </td>
                </tr>
                <tr className="pad-left-right-space">
                  <td colSpan={2} align="left">
                    <p style={{ fontSize: "14px" }}>SHIPPING Charge :</p>
                  </td>
                  <td colSpan={2} align="right">
                    <b>$2</b>
                  </td>
                </tr>
                <tr className="pad-left-right-space">
                  <td colSpan={2} align="left">
                    <p style={{ fontSize: "14px" }}>Discount :</p>
                  </td>
                  <td colSpan={2} align="right">
                    <b> $1000</b>
                  </td>
                </tr>
                <tr className="pad-left-right-space ">
                  <td className="m-b-5" colSpan={2} align="left">
                    <p style={{ fontSize: "14px" }}>Total :</p>
                  </td>
                  <td className="m-b-5" colSpan={2} align="right">
                    <b>$2600</b>
                  </td>
                </tr>
              </tbody>
            </Table>
          </td>
        </tr>
      </tbody>
    </Table>
    <SocialEmailTemplate />
    <style global jsx>
      {`
        body {
          text-align: center;
          margin: 0 auto;
          width: 650px;
          font-family: "Open Sans", sans-serif;
          background-color: #e2e2e2;
          display: block;
        }
        .order-success2 .order-detail th{
            text-align: left;
        }
        ul {
          margin: 0;
          padding: 0;
        }

        li {
          display: inline-block;
          text-decoration: unset;
        }

        a {
          text-decoration: none;
        }

        p {
          margin: 15px 0;
          color: #000;
        }

        h5 {
          color: #444;
          text-align: left;
          font-weight: 400;
        }

        .text-center {
          text-align: center;
        }

        .main-bg-light {
          background-color: #fafafa;
        }

        .title {
          color: #444444;
          font-size: 22px;
          font-weight: bold;
          margin-top: 10px;
          margin-bottom: 10px;
          padding-bottom: 0;
          text-transform: uppercase;
          display: inline-block;
          line-height: 1;
        }

        table {
          margin-top: 30px;
        }

        table.top-0 {
          margin-top: 0;
        }

        table.order-detail {
          border: 1px solid #ddd;
          border-collapse: collapse;
        }

        table.order-detail tr:nth-child(even) {
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
        }

        table.order-detail tr:nth-child(odd) {
          border-bottom: 1px solid #ddd;
        }

        .pad-left-right-space {
          border: unset !important;
        }

        .pad-left-right-space td {
          padding: 5px 15px;
        }

        .pad-left-right-space td p {
          margin: 0;
        }

        .pad-left-right-space td b {
          font-size: 15px;
          font-family: "Roboto", sans-serif;
        }

        .order-detail th {
          font-size: 16px;
          padding: 15px;
          text-align: center;
          background: #fafafa;
        }

        .footer-social-icon tr td img {
          margin-left: 5px;
          margin-right: 5px;
        }
        @media (max-width: 767px){
          .email-template-table, .main-bg-light{
            width: 520px;
            margin-left: 20px
          }
        }
        @media (max-width: 575px){
          .email-template-table, .main-bg-light{
            width: 430px;
            margin-left: 18px
          }
          .product-info tbody tr {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .product-info tbody tr td img{
            display: none;
          }
          .main-sec{
            text-align: center !important;
            margin-bottom: 0;
          }
          .footer-social-icon tbody tr{
            flex-flow: wrap;
          }
          .order-detail{
            margin-top: 15px;
            margin-bottom: 25px !important;
          }
          .order-detail thead tr th:nth-child(2), .order-detail tbody tr:nth-child(-n+4) td:nth-child(2), 
          .order-detail tbody tr:nth-child(3) td:nth-child(2){
            display: none;
          }
        }
        @media (max-width: 479px){
          .email-template-table, .main-bg-light{
            width: 322px;
            margin-left: 12px
          }
          .main-sec tbody tr td img{
            margin: 0 auto 18px !important;
          }
          .product-info tbody tr td {
            width: 100% !important;
          }
          .product-info tbody tr td h5, .product-info tbody tr td p {
            text-align: center !important;
          }
          .email-media{
            margin-top: 15px;
          }
          .order-detail tbody tr td[valign="top"]{
            padding-left: 0 !important;
          }
          .main-bg-light .footer-social-icon ~ table{
            margin: 6px auto 0 !important;
          }
          .order-detail th{
            font-size: 14px;
          }
        }
        @media (max-width: 359px){
          .email-template-table, .main-bg-light{
            width: 280px;
          }
          .order-detail th{
            font-size: 12px;
            padding: 8px;
          }
          .order-detail tbody tr td img{
            width: 50px;
          }
        }
      `}
    </style>
  </>
);

export default OrderSuccess2;
