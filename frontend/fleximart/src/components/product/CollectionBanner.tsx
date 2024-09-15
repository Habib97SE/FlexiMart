import Image from "next/image";
import Link from "next/link";

const CollectionBanner = () => {
    return (
        <section className="pb-0 my-2">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Men's Banner */}
                    <div className="relative">
                        <Link href="/left-sidebar/collection" className="block text-center">
                            <Image
                                src="https://via.placeholder.com/600x400?text=Top+Banner"
                                alt="Men's Collection"
                                width={800}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white">
                                    <h4 className="text-2xl font-bold">10% off</h4>
                                    <h2 className="text-4xl font-bold">Men</h2>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Women's Banner */}
                    <div className="relative">
                        <Link href="/left-sidebar/collection" className="block text-center">

                            <Image
                                src="https://via.placeholder.com/600x400?text=Top+Banner"
                                alt="Women's Collection"
                                width={800}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white">
                                    <h4 className="text-2xl font-bold">10% off</h4>
                                    <h2 className="text-4xl font-bold">Women</h2>
                                </div>
                            </div>

                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollectionBanner;