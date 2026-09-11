import { HomePage } from "@/components/HomePage";
import { siteConfig } from "@/config/siteConfig";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TalUp",
    description: siteConfig.seoDescription,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone.href.replace("tel:", ""),
    sameAs: [siteConfig.instagram.url],
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />
      <HomePage />
    </>
  );
}
