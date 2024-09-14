import { ImagePath } from "@/Constants";
import Image from "next/image";

export const ProductCategoryData = [
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/1.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Headphones",
    price: "$20.00",
    status: <i className="fa fa-circle font-warning f-12" />,
    category: "Electronics",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/2.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Honor Mobile",
    price: "$462.00",
    status: <i className="fa fa-circle font-danger f-12" />,
    category: "Electronics",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/3.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Samsung LED TV",
    price: "$652.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "Electronics",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/4.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Motorola Bluetooth",
    price: "$25.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "Electronics",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/5.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Apple 6s",
    price: "$782.00",
    status: <i className="fa fa-circle font-danger f-12" />,
    category: "Electronics",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/6.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Printer",
    price: "$4825.00",
    status: <i className="fa fa-circle font-warning f-12" />,
    category: "Electronics",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/7.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Canon Camera",
    price: "$2461.00",
    status: <i className="fa fa-circle font-danger f-12" />,
    category: "Electronics",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/8.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "High uality Headphones",
    price: "$761.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "Electronics",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/9.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Hom Theater Speakers",
    price: "$672.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "Electronics",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/10.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Diamond Ring",
    price: "$237.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "Jewellery",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/11.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Diamond Nacklace",
    price: "$3579.00",
    status: <i className="fa fa-circle font-danger f-12" />,
    category: "Jewellery",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/12.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Diamond Earrings",
    price: "$3145.00",
    status: <i className="fa fa-circle font-danger f-12" />,
    category: "Jewellery",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/13.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Night lamp",
    price: "$84.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "furniture",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/14.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "men's shoes",
    price: "$67.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "shoes",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/15.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Ledi's red top",
    price: "$234.00",
    status: <i className="fa fa-circle font-warning f-12" />,
    category: "clothes",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/16.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "atest ledis shoes",
    price: "$357.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "shoes",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/17.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Woman one pis",
    price: "$682.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "clothes",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/18.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Mouse",
    price: "$24.00",
    status: <i className="fa fa-circle font-warning f-12" />,
    category: "electronics",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/19.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Coffee maker",
    price: "$9721.00",
    status: <i className="fa fa-circle font-warning f-12" />,
    category: "electronics",
  },
  {
    image: <img  alt="" src={`${ImagePath}/dashboard/product/20.jpg`} style={{ width: 50, height: 50 }} />,
    product_name: "Diamond Nacklace",
    price: "$3579.00",
    status: <i className="fa fa-circle font-warning f-12" />,
    category: "Jewellery",
  },
];

export const ProductRating = (
  <div className="rating">
    <i className="fa fa-star"></i>
    <i className="fa fa-star"></i>
    <i className="fa fa-star"></i>
    <i className="fa fa-star"></i>
    <i className="fa fa-star"></i>
  </div>
);

export const ColorVariant = (
  <ul className="color-variant">
    <li className="bg-light0"></li>
    <li className="bg-light1"></li>
    <li className="bg-light2"></li>
  </ul>
);

export const ProductListData = [
  {
    image: "/pro3/34.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$500.00",
    discount_price: "$600.00",
    tag: "old",
    discount: "not on sale",
  },
  {
    image: "/pro3/1.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$400.00",
    discount_price: "$600.00",
    tag: "old",
    discount: "not on sale",
  },
  {
    image: "/pro3/2.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$400.00",
    discount_price: "$600.00",
    tag: "new",
    discount: "on sale",
  },
  {
    image: "/pro3/27.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$400.00",
    discount_price: "$600.00",
    tag: "old",
    discount: "not on sale",
  },
  {
    image: "/pro3/27.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$400.00",
    discount_price: "$600.00",
    tag: "old",
    discount: "not on sale",
  },
  {
    image: "/pro3/34.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$400.00",
    discount_price: "$600.00",
    tag: "old",
    discount: "not on sale",
  },
  {
    image: "/pro3/1.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$400.00",
    discount_price: "$600.00",
    tag: "old",
    discount: "not on sale",
  },
  {
    image: "/pro3/2.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$400.00",
    discount_price: "$600.00",
    tag: "old",
    discount: "not on sale",
  },
];
