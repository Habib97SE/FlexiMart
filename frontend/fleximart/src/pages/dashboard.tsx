import CommonLayout from "@/components/CommonLayout";

const Dashboard = () => {

    const data = {
        title: "Dashboard",
        path: [
            { name: "Home", href: "/" },
            { name: "Dashboard", href: "/dashboard" }
        ]
    }

    return (
        <CommonLayout data={data}>
            <div className="min-h-screen">
                <h1>Dashboard</h1>
                {/* Add two columns, one for sidebar menu, other for content */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {/* Sidebar */}
                    <div className="col-span-1">
                        <ul>
                            <li> {">"} Dashboard</li>
                            <li>Orders</li>
                            <li>Products</li>
                            <li>Customers</li>
                            <li>Settings</li>
                        </ul>
                    </div>
                    {/* Content */}
                    <div className="col-span-4">
                        <h2>Dashboard</h2>
                        <p>Welcome to the dashboard</p>
                    </div>
                </div>
            </div>
        </CommonLayout>
    );
}

export default Dashboard;