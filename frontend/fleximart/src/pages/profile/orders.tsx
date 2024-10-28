import CommonLayout from "@/components/CommonLayout";

export default function OrdersPage() {


    const data = {
        title: "My orders",
        paths: [
            {
                name: "Home",
                href: "/"
            },
            {
                name: "My orders",
                href: "/profile/orders"
            }
        ]
    }
    return (
        <CommonLayout data={data}>
            <div className="container mx-auto">
                <span>
                    Orders
                </span>
            </div>
        </CommonLayout>
    );
}