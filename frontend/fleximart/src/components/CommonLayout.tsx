import React from "react";
import Header from "@/components/header/Header";

/**
 * Common layout for all pages
 * @param children - The children to render
 * @constructor
 */
const CommonLayout = ({ children, data}) => {
    return (
        <>
            <Header title={data.title} path={data.path} />
            <main>
                {children}
            </main>
        </>
    );
}

export default CommonLayout;