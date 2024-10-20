import CommonLayout from "@/components/CommonLayout";
import { HeaderData } from "@/interface/HeaderData";
import path from "path";

function WishlistPage() {

    const data: HeaderData = {
        title: "Wishlist",
        paths: [
            { name: "Home", href: "/" },
            { name: "Profile", href: "/profile" },
            { name: "Wishlist", href: "/profile/wishlist" },
        ],
    }

    return (
        <>
            <CommonLayout data={data}>

            </CommonLayout>
        </>
    );

}

export default WishlistPage;