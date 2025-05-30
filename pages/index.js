import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import ServicesSection from '../components/ServicesSection';
// import WhyHueneuSection from '../components/WhyHueneuSection'; // To be implemented
// import ContactForm from '../components/ContactForm'; // To be implemented

export default function HomePage() {
  return (
    <>
      <Head>
        <title>hueneu - Where stories find their aesthetic.</title>
        <meta name="description" content="hueneu is a graphic design studio that crafts designs that whisper loud stories. We decode stories and bring them to life with intentional, balanced, and evocative visuals." />
        <meta name="keywords" content="graphic design, branding, packaging, social media, stationery, coffee table books, creative projects, design studio, hueneu" />
        <meta property="og:title" content="hueneu - Where stories find their aesthetic." />
        <meta property="og:description" content="Designs that whisper loud stories. Discover hueneu, a studio balancing quiet confidence with bold creativity." />
        {/* <meta property="og:image" content="/images/og-image.jpg" /> Update with actual OG image path */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://www.hueneu.com" /> Update with actual URL */}
      </Head>

      <main className="overflow-x-hidden">
        <HeroSection />
        <StorySection />
        <ServicesSection />
        {/* <WhyHueneuSection /> */}
        {/* <ContactForm /> */}
        
        {/* Footer placeholder - to be designed if needed */}
        {/* <footer className="py-12 text-center text-muted-mauve">
          <p>&copy; {new Date().getFullYear()} hueneu. All rights reserved.</p>
          <p>Instagram: @hueneu_</p> 
        </footer> */}
      </main>
    </>
  );
}
