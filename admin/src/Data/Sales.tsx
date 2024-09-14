export const SalesTransactionData = [
  {
    order_id: "142",
    transaction_id: "#212145214510",
    date: "Sep 2,19",
    payment_method: "Paypal",
    status: "Pending",
    amount: "$175/-",
  },
  {
    order_id: "217",
    transaction_id: "#784561421721",
    date: "Dec 10,19",
    payment_method: "Stripe",
    status: "Process ",
    amount: "$845/-",
  },
  {
    order_id: "546",
    transaction_id: "#476547821142",
    date: "Feb 15,19",
    payment_method: "Stripe",
    status: "Delivered ",
    amount: "$314/-",
  },
  {
    order_id: "671",
    transaction_id: "#745384127541",
    date: "Mar 27,19",
    payment_method: "Paypal",
    status: "Pending",
    amount: "$271/-",
  },
  {
    order_id: "565",
    transaction_id: "#96725125102",
    date: "Sep 2,19",
    payment_method: "Paypal",
    status: "Pending",
    amount: "$175/-",
  },
  {
    order_id: "754",
    transaction_id: "#547121023651",
    date: "May 18,19",
    payment_method: "Paypal",
    status: "Pending",
    amount: "$2141/-",
  },
  {
    order_id: "164",
    transaction_id: "#876412242215",
    date: "Jan 14,19",
    payment_method: "Stripe",
    status: "Delivered",
    amount: "$4872/-",
  },
  {
    order_id: "841",
    transaction_id: "#31534221621",
    date: "Apr 22,19",
    payment_method: "Paypal",
    status: "Process",
    amount: "$7841/-",
  },
  {
    order_id: "345",
    transaction_id: "#78412457421",
    date: "Mar 26,19",
    payment_method: "Paypal",
    status: "Pending",
    amount: "$2784/-",
  },
  {
    order_id: "784",
    transaction_id: "#241524757448",
    date: "Feb 29,19",
    payment_method: "Stripe",
    status: "Delivered ",
    amount: "$461/-",
  },
  {
    order_id: "142",
    transaction_id: "#212145214510",
    date: "Sep 2,19",
    payment_method: "Paypal",
    status: "Pending",
    amount: "$175/-",
  },
  {
    order_id: "142",
    transaction_id: "#212145214510",
    date: "Sep 2,19",
    payment_method: "Paypal",
    status: "Pending",
    amount: "$175/-",
  },
  {
    order_id: "217",
    transaction_id: "#784561421721",
    date: "Dec 10,19",
    payment_method: "Stripe",
    status: "Process",
    amount: "$845/-",
  },
  {
    order_id: "546",
    transaction_id: "#476547821142",
    date: "Feb 15,19",
    payment_method: "Stripe",
    status: "Delivered ",
    amount: "$314/-",
  },
  {
    order_id: "671",
    transaction_id: "#745384127541",
    date: "Mar 27,19",
    payment_method: "Paypal",
    status: "Pending",
    amount: "$217/-",
  },
  {
    order_id: "564",
    transaction_id: "#96725125102",
    date: "Sep 1,19",
    payment_method: "Stripe",
    status: "Process",
    amount: "$542/-",
  },
];

const pro13 = "/electronics/product/13.jpg";
const pro16 = "/electronics/product/16.jpg";
const pro25 = "/electronics/product/25.jpg";
const pro12 = "/electronics/product/12.jpg";
const pro3 = "/electronics/product/3.jpg";
const pro14 = "/electronics/product/14.jpg";
const pro6 = "/electronics/product/6.jpg";
const furniture8 = "/furniture/8.jpg";
const fashion06 = "/fashion/pro/06.jpg";
const jwellery = "/jewellery/pro/18.jpg";
const pro17 = "/electronics/product/17.jpg";
const pro18 = "/electronics/product/18.jpg";
const pro19 = "/electronics/product/19.jpg";
const pro20 = "/electronics/product/20.jpg";
const pro21 = "/electronics/product/21.jpg";
const pro23 = "/electronics/product/23.jpg";
const pro24 = "/electronics/product/24.jpg";
const pro8 = "/electronics/product/8.jpg";
const fashion14 = "/fashion/product/14.jpg";
const fashion19 = "/fashion/product/19.jpg";
const furniture6 = "/furniture/6.jpg";
const furniture7 = "/furniture/7.jpg";
const furniture16 = "/furniture/product/16.jpg";
const furniture4 = "/furniture/product/4.jpg";

import { ImagePath } from "@/Constants";
import Image from "next/image";
import { Badge } from "reactstrap";

const MultipleImage = ({ data }: { data: string[] }) => {
  return (
    <div>
      <div className="d-flex">
        {data.map((res, i) => {
          return <img src={`${ImagePath}${res}`} alt="" key={i} className="img-fluid img-30 me-2 blur-up lazyloaded" />;
        })}
      </div>
    </div>
  );
};

export const SaleOrdersData = [
  {
    oder_id: "#51240",
    image: <MultipleImage data={[pro25, pro13, pro16]} />,
    status: <Badge color="secondary">Cash On Delivery</Badge>,
    payment_method: "Visa",
    order_status: <Badge color="success">Delivery</Badge>,
    date: "Dec 10,18",
    total: "$54671",
  },
  {
    oder_id: "#51245",
    image: <MultipleImage data={[pro12, pro3]} />,
    status: <Badge color="success">Paid</Badge>,
    payment_method: "Paypal",
    order_status: <Badge color="success">Delivery</Badge>,
    date: "Jan 14,18",
    total: "$6791",
  },
  {
    oder_id: "#51245",
    image: <MultipleImage data={[pro14]} />,
    status: <Badge color="warning">Awaiting Authentication</Badge>,
    payment_method: "Debit Card",
    order_status: <Badge color="warning">Processing</Badge>,
    date: "Mar 27,18",
    total: "$8791",
  },
  {
    oder_id: "#51243",
    image: <MultipleImage data={[pro6, furniture8]} />,
    status: <Badge color="danger">Payment Failed</Badge>,
    payment_method: "Master Card",
    order_status: <Badge color="danger">Cancelled</Badge>,
    date: "Sep 1,18",
    total: "$139",
  },
  {
    oder_id: "#51244",
    image: <MultipleImage data={[jwellery, fashion06]} />,
    status: <Badge color="success">Paid</Badge>,
    payment_method: "Paypal",
    order_status: <Badge color="primary">Shipped</Badge>,
    date: "May 18,18",
    total: "$4678",
  },
  {
    oder_id: "#51245",
    image: <MultipleImage data={[pro19, pro20, pro23]} />,
    status: <Badge color="success">Paid</Badge>,
    payment_method: "Visa",
    order_status: <Badge color="success">Delivered</Badge>,
    date: "Jan 14,18",
    total: "$6791",
  },
  {
    oder_id: "#51246",
    image: <MultipleImage data={[pro24]} />,
    status: <Badge color="warning">Awaiting Authentication</Badge>,
    payment_method: "Credit Card",
    order_status: <Badge color="warning">Processing</Badge>,
    date: "Apr 22,18",
    total: "$976",
  },
  {
    oder_id: "#51247",
    image: <MultipleImage data={[pro21, pro8]} />,
    status: <Badge color="danger">Payment Failed</Badge>,
    payment_method: "Master Card",
    order_status: <Badge color="danger">Cancelled</Badge>,
    date: "Mar 26,18",
    total: "$3212",
  },
  {
    oder_id: "#51248",
    image: <MultipleImage data={[pro18]} />,
    status: <Badge color="secondary">Cash On Delivery</Badge>,
    payment_method: "Paypal",
    order_status: <Badge color="primary">Shipped</Badge>,
    date: "Feb 29,18",
    total: "$6719",
  },
  {
    oder_id: "#51249",
    image: <MultipleImage data={[pro17]} />,
    status: <Badge color="success">Paid</Badge>,
    payment_method: "Master Card",
    order_status: <Badge color="secondary">Processing</Badge>,
    date: "Sep 2,18",
    total: "$9765",
  },
  {
    oder_id: "#51250",
    image: <MultipleImage data={[fashion14, fashion19]} />,
    status: <Badge color="secondary">Cash On Delivered</Badge>,
    payment_method: "0.70 %",
    order_status: <Badge color="primary">Shipped</Badge>,
    date: "Apr 8,18",
    total: "$59.76",
  },
  {
    oder_id: "#51251",
    image: <MultipleImage data={[furniture4, furniture6, furniture7]} />,
    status: <Badge color="danger">Payment Failed</Badge>,
    payment_method: "Paypal",
    order_status: <Badge color="danger">Cancelled</Badge>,
    date: "Apr 12,18",
    total: "$37.60",
  },
  {
    oder_id: "#51252",
    image: <MultipleImage data={[furniture16]} />,
    status: <Badge color="success">Paid</Badge>,
    payment_method: "Credit Card",
    order_status: <Badge color="success">Delivered</Badge>,
    date: "Apr 15,18",
    total: "$86.53",
  },
];
