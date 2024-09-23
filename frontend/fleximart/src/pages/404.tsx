import CommonLayout from "@/components/CommonLayout";
import HEAD from "next/head";

const PageNotFound = () => {
    const data = {
        title: '404 - Page Not Found',
        paths: [
            { name: 'Home', href: '/' },
            { name: '404 - Page Not Found', href: '/404' }
        ]
    }
    return (
        <>
            <HEAD>
                <title>404 - Page Not Found</title>
            </HEAD>
            <div>
                <p>Hello, world!</p>
            </div>
        </>
    );
}