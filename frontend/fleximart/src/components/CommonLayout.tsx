import React from "react";
import Header from "@/components/header/Header";
import Footer from "./footer/Footer";

/**
 * Common layout for all pages
 * @param children - The children to render
 * @constructor
 */
const CommonLayout = ({ children, data}) => {
    return (
        <>
            <Header title={data.title} paths={data.path} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default CommonLayout;