import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Expertise } from "@/components/Expertise";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
      description: site.description,
      areaServed: "GB",
      founder: { "@id": `${site.url}#person` },
      slogan: site.tagline,
    },
    {
      "@type": "Person",
      "@id": `${site.url}#person`,
      name: site.owner,
      telephone: site.phone,
      email: site.email,
      jobTitle: "Product Owner & Technical Delivery Lead",
      address: { "@type": "PostalAddress", addressRegion: "Hampshire", addressCountry: "GB" },
      sameAs: [site.linkedin],
    },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Approach />
        <Expertise />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
