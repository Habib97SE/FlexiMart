import CommonLayout from "@/components/CommonLayout";

const Contact = () => {
    const data = {
        title: 'Contact',
        paths: [
            { name: 'Home', href: '/' },
            { name: 'Contact', href: '/contact' }
        ]
    }
    return (
        <>
            <CommonLayout data={data}>
                <div>
                    <h1>Contact</h1>
                </div>
            </CommonLayout>
        </>
    );
}

export default Contact;