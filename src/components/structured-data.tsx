export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jumper Studio",
    url: "https://jumper.studio",
    logo: "https://jumper.studio/assets/logos/jumper-white.png",
    description:
      "Arquitetura de Performance Digital — gestão de tráfego pago com tracking server-side, CRM integrado e atendimento via WhatsApp.",
    email: "contato@jumper.studio",
    sameAs: ["https://instagram.com/jumper.studio"],
    areaServed: ["BR", "PT", "US"],
    knowsAbout: [
      "Performance Marketing",
      "Server-Side Tracking",
      "Google Tag Manager",
      "Meta Conversions API",
      "CRM Integration",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Jumper Studio",
    url: "https://jumper.studio",
    description:
      "Empresa de performance digital especializada em tracking server-side e gestão de tráfego pago.",
    email: "contato@jumper.studio",
    priceRange: "$$$$",
    openingHours: "Mo-Fr 09:00-18:00",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jumper Studio",
    url: "https://jumper.studio",
    description:
      "Arquitetura de Performance Digital — dados limpos, resultados reais.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://jumper.studio/cases?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
