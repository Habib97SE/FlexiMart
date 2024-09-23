import CommonLayout from "@/components/CommonLayout";
import Newsletter from "@/components/Newsletter";
import CollectionBanner from "@/components/product/CollectionBanner";
import ProductCard from "@/components/product/ProductCard";
import Product from "@/components/product/ProductCard";
import ProductSection from "@/components/product/SpecialCollectionSection";
import Head from "next/head";

const Home = () => {
    const data = {
        title: "Home",
        paths: [
            { name: "Home", href: "/" }
        ]
    }
    const product = {
        title: 'Trim Dress',
        price: 87.0,
        originalPrice: 145.0,
        imageUrlFront: "https://via.placeholder.com/400x300?text=Front+Image",
        imageUrlBack: "https://via.placeholder.com/400x300?text=Back+Image",
        rating: 5,
        thumbImages: [
            "https://via.placeholder.com/100x100?text=Thumbnail+One",
            "https://via.placeholder.com/100x100?text=Thumbnail+Two",
            "https://via.placeholder.com/100x100?text=Thumbnail+Three",
        ],
        colors: ['yellow', 'white', 'pink'],
    };
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home page" />
            </Head>
            <CommonLayout data={data}>
                <div>
                    {/* Add slide */}
                    <div>
                        <img src="https://via.placeholder.com/1920x1080" alt="slide" />
                    </div>
                    <CollectionBanner />
                    <div className="container mx-auto my-4 flex flex-col justify-center items-center w-6/12 leading-10">
                        <h3 className="text-red-500 text-lg">Special Offers</h3>
                        <h2 className="text-2xl font-bold border-b border-black inline-block">Top Collection</h2>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam dolores cum iure ipsam ullam illum earum. Quis mollitia, aperiam quam, eligendi velit iste necessitatibus accusantium, rerum tenetur officia ab.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                        <ProductCard product={product} />
                        <ProductCard product={product} />
                        <ProductCard product={product} />
                        <ProductCard product={product} />
                        <ProductCard product={product} />
                        <ProductCard product={product} />
                        <ProductCard product={product} />
                        <ProductCard product={product} />
                    </div>
                </div>
                <div>
                    <ProductSection
                        newProducts={[product, product, product, product]}
                        featuredProducts={[product, product, product, product]}
                        specialProducts={[product, product, product, product]}
                    />
                </div>

            </CommonLayout>
        </>

    );
}

export default Home;