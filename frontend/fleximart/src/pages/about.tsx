import CommonLayout from "@/components/CommonLayout";
import Image from 'next/image';
import aboutImage from '@/assets/images/about.jpg';
import TestimonialSlider from "@/components/TestimonialSlider";

const About = () => {
    const data = {
        title: 'About',
        paths: [
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' }
        ]
    }
    return (
        <>
            <CommonLayout data={data}>
                <section className="about-page section-b-space py-12">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1">
                            {/* Banner Section */}
                            <div className="banner-section mb-8">
                                <Image
                                    src={aboutImage}
                                    alt="About Us"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="text-content space-y-6">
                                <h4 className="text-2xl font-semibold text-gray-800">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                                </h4>
                                <p className="text-gray-700">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                </p>
                                <p className="text-gray-700">
                                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </CommonLayout>
        </>
    );
}

export default About;