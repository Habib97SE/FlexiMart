import React from "react";
import { Table, Media } from "reactstrap";
import delivery from "../../public/assets/images/email-temp/delivery.png";
import success from "../../public/assets/images/email-temp/success.png";
import orderSuccess from "../../public/assets/images/email-temp/order-success.png";
import thirteen from "../../public/assets/images/email-temp/13.jpg";
import fourteen from "../../public/assets/images/email-temp/14.jpg";
import space from "../../public/assets/images/email-temp/space.jpg";
import SocialEmailTemplate from "./common/social-email-template";

const OrderSuccess = () => {
  return (
    <>
      <Table
        style={{ marginBottom: "0" }}
        borderless
        className="email-template-table"
        cellPadding="0"
        cellSpacing="0"
      >
        <tbody>
          <tr>
            <td>
              <Table className="top-sec" align="center" border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td>
                      <Media
                        className="email-media"
                        src={delivery.src}
                        alt=""
                        style={{ marginBottom: "0" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Media className="email-media" src={success.src} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="title">thank you</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Payment Is Successfully Processsed And Your Order Is On
                        The Way
                      </p>
                      <p>Transaction ID:267676GHERT105467</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div
                        style={{ borderTop: "1px solid #777", height: "1px" }}
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Media
                        className="email-media"
                        src={orderSuccess.src}
                        alt=""
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <h2 className="title">YOUR ORDER DETAILS</h2>
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
              >
                <tbody>
                  <tr className="email-tr">
                    <th>PRODUCT</th>
                    <th style={{ paddingLeft: "15px" }}>DESCRIPTION</th>
                    <th>QUANTITY</th>
                    <th>PRICE </th>
                  </tr>
                  <tr className="email-tr">
                    <td>
                      <Media
                        style={{ margin: "0 auto" }}
                        src={thirteen.src}
                        alt=""
                        width="70"
                      />
                    </td>
                    <td valign="top" style={{ paddingLeft: "15px" }}>
                      <h5 style={{ marginTop: "15px", textAlign: "left" }}>
                      This comfotable headphones For ear.{" "}
                      </h5>
                    </td>
                    <td valign="top" style={{ paddingLeft: "0" }}>
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
                          marginTop: "0",
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
                      <Media
                        style={{ margin: "0 auto" }}
                        src={fourteen.src}
                        alt=""
                        width="70"
                      />
                    </td>
                    <td valign="top" style={{ paddingLeft: "15px" }}>
                      <h5 style={{ marginTop: "15px", textAlign: "left" }}>
                      This comfotable chairs and &amp; Sofa or etc.{" "}
                      </h5>
                    </td>
                    <td valign="top" style={{ paddingLeft: "0" }}>
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
                          marginTop: "0",
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
                    <td
                      colSpan="2"
                      style={{
                        lineHeight: "49px",
                        fontSize: "13px",
                        color: "#000000",
                        paddingLeft: "20px",
                        textAlign: "left",
                        borderRight: "unset",
                      }}
                    >
                      Products:
                    </td>
                    <td
                      colSpan="3"
                      className="price"
                      style={{
                        lineHeight: "49px",
                        textAlign: "right",
                        paddingRight: "28px",
                        fontSize: "13px",
                        color: "#000000",
                        borderLeft: "unset",
                      }}
                    >
                      <b>$2600.00</b>
                    </td>
                  </tr>
                  <tr className="email-tr">
                    <td
                      colSpan="2"
                      style={{
                        lineHeight: "49px",
                        fontSize: "13px",
                        color: "#000000",
                        paddingLeft: "20px",
                        textAlign: "left",
                        borderRight: "unset",
                      }}
                    >
                      Discount :
                    </td>
                    <td
                      colSpan="3"
                      className="price"
                      style={{
                        lineHeight: "49px",
                        textAlign: "right",
                        paddingRight: "28px",
                        fontSize: "13px",
                        color: "#000000",
                        borderLeft: "unset",
                      }}
                    >
                      <b>$10</b>
                    </td>
                  </tr>
                  <tr className="email-tr">
                    <td
                      colSpan="2"
                      style={{
                        lineHeight: "49px",
                        fontFamily: "Arial",
                        fontSize: "13px",
                        color: "#000000",
                        paddingLeft: "20px",
                        textAlign: "left",
                        borderRight: "unset",
                      }}
                    >
                      Gift Wripping:{" "}
                    </td>
                    <td
                      colSpan="3"
                      className="price"
                      style={{
                        lineHeight: "49px",
                        textAlign: "right",
                        paddingRight: "28px",
                        fontSize: "13px",
                        color: "#000000",
                        borderLeft: "unset",
                      }}
                    >
                      <b>$2600</b>
                    </td>
                  </tr>
                  <tr className="email-tr">
                    <td
                      colSpan="2"
                      style={{
                        lineHeight: "49px",
                        fontSize: "13px",
                        color: "#000000",
                        paddingLeft: "20px",
                        textAlign: "left",
                        borderRight: "unset",
                      }}
                    >
                      Shipping :
                    </td>
                    <td
                      colSpan="3"
                      className="price"
                      style={{
                        lineHeight: "49px",
                        textAlign: "right",
                        paddingRight: "28px",
                        fontSize: "13px",
                        color: "#000000",
                        borderLeft: "unset",
                      }}
                    >
                      <b>$30</b>
                    </td>
                  </tr>
                  <tr className="email-tr">
                    <td
                      colSpan="2"
                      style={{
                        lineHeight: "49px",
                        fontSize: "13px",
                        color: "#000000",
                        paddingLeft: "20px",
                        textAlign: "left",
                        borderRight: "unset",
                      }}
                    >
                      TOTAL PAID :
                    </td>
                    <td
                      colSpan="3"
                      className="price"
                      style={{
                        lineHeight: "49px",
                        textAlign: "right",
                        paddingRight: "28px",
                        fontSize: "13px",
                        color: "#000000",
                        textAlignLast: "right",
                        borderLeft: "unset",
                      }}
                    >
                      <b>$2600</b>
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
                style={{ width: "100%", marginTop: "0", marginBottom: "30px" }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontSize: "13px",
                        color: "#444444",
                        letterSpacing: "0.2px",
                        width: "50%",
                      }}
                    >
                      <h5
                        style={{
                          fontSize: "16px",
                          color: "#000",
                          lineHeight: "16px",
                          paddingBottom: "13px",
                          borderBottom: "1px solid #e6e8eb",
                          letterSpacing: "-0.65px",
                          marginTop: "0",
                          marginBottom: "13px",
                          textAlign: "left",
                        }}
                      >
                        DELIVERY ADDRESS
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
                        268 Cambridge Lane New Albany, IN 47150268 Cambridge
                        Lane <br />
                        New Albany, IN 47150
                      </p>
                    </td>
                    <td className="user-info">
                      <Media src={space.src} alt=" " height="25" width="57" />
                    </td>
                    <td
                      className="user-info"
                      style={{
                        fontSize: "13px",
                        color: "#444444",
                        letterSpacing: "0.2px",
                        width: "50%",
                      }}
                    >
                      <h5
                        style={{
                          fontSize: "16px",
                          color: "#000",
                          lineHeight: "16px",
                          paddingBottom: "13px",
                          borderBottom: "1px solid #e6e8eb",
                          letterSpacing: "-0.65px",
                          marginTop: "0",
                          marginBottom: "13px",
                          textAlign: "left",
                        }}
                      >
                        SHIPPING ADDRESS
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
                        268 Cambridge Lane New Albany, IN 47150268 Cambridge
                        Lane <br />
                        New Albany, IN 47150
                      </p>
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
            margin: 30px auto;
            width: 650px;
            font-family: "Open Sans", sans-serif;
            background-color: #e2e2e2;
            display: block;
          }
          .setting-box .setting-title h4{
            text-align: left;
          }
          .email-template-table {
            padding: 0 30px;
            background-color: #ffffff;
            box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353);
            width: 100%;
          }
          .email-tr {
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
          }
          .email-media {
            margin-top: 30px;
            display: inline;
          }
          .title {
            color: #444444;
            font-size: 22px;
            font-weight: bold;
            padding-bottom: 0;
            text-transform: uppercase;
            display: inline-block;
            line-height: 1;
          }
          table.order-detail,
          .order-detail th,
          .order-detail td {
            border: 1px solid #ddd;
            border-collapse: collapse;
            padding: 0;
          }
          .order-detail th {
            font-size: 16px;
            padding: 15px;
            text-align: center;
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
            .order-detail tbody tr:nth-child(1) th:nth-child(2), .order-detail tbody tr:nth-child(2) td:nth-child(2), 
            .order-detail tbody tr:nth-child(3) td:nth-child(2){
              display: none;
            }
          }
          @media (max-width: 479px){
            .email-template-table, .main-bg-light{
              width: 322px;
              margin-left: 12px
            }
            .footer-social-icon tbody tr{
              flex-flow: wrap;
            }
            .product-info tbody tr {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
            .product-info tbody tr td {
              width: 100% !important;
            }
            .product-info tbody tr td h5, .product-info tbody tr td p {
              text-align: center !important;
            }
            .product-info tbody tr td:nth-child(2) {
              display: none;
            }
            .email-media{
              margin-top: 15px;
            }
            .top-sec tbody tr:last-child img{
              width: 260px;
              margin-top: 15px;
            }
            .order-detail tbody tr td[valign="top"]{
              padding-left: 0 !important;
            }
            .order-detail th{
              font-size: 14px;
            }
          }
          @media (max-width: 359px){
            .email-template-table, .main-bg-light{
              width: 280px;
            }
            .top-sec tbody tr:last-child img{
              width: 200px;
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
};

export default OrderSuccess;
