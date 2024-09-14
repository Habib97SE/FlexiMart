import CommonLayout from "@/components/CommonLayout";
import Head from "next/head";

const Home =  () => {
    const data = {
        title: "Home",
        path: [
            {name: "Home", href: "/"}
        ]
    }
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
                    
                </div>
            </CommonLayout>
        </>
        
    );
}

export default Home;