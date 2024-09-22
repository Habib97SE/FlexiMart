import React from "react";
import Header from "@/components/header/Header";
import Footer from "./footer/Footer";
import Newsletter from "./Newsletter";

/**
 * Common layout for all pages
 * @param children - The children to render
 * @constructor
 */
const CommonLayout = ({ children, data }) => {
    return (
        <>
            <Header title={data.title} paths={data.paths} />
            <main>
                {children}
            </main>
            <Newsletter />
            <Footer />
        </>
    );
}

export default CommonLayout;