import Link from "next/link";

const BreadcrumbSection = ({ title, paths }) => {

    const navItems = paths.map((item, index) => {
        return (
            <li className="breadcrumb-item" key={index}>
                <Link href={item.href} className="text-blue-600 hover:underline">
                    {item.name}
                    {/* if it is not last element add /  */}
                    {index !== paths.length - 1 && <span className="mx-1">/</span>}
                </Link>
            </li>
        )
    });

    return (
        <div className="breadcrumb-section py-6 bg-gray-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Page Title */}
                    <div className="page-title">
                        <h2 className="text-xl font-sens">
                            {title}
                        </h2>
                    </div>

                    {/* Breadcrumb Navigation */}
                    <div className="theme-breadcrumb text-right">
                        <nav aria-label="breadcrumb">
                            <ol className="inline-flex space-x-2 text-sm text-gray-500">
                                {navItems}
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadcrumbSection;
