import type { Metadata } from "next";
import { SITE } from "./site";

// Shared share-card image (src/app/opengraph-image.png). Set explicitly on
// child pages because their openGraph object replaces the root one, image included.
const SHARE_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "SwapaPost app: swap your work location with a colleague at another branch. Same company, new city.",
};

// Per-page metadata. Each page gets its own canonical URL and share-card
// title, since a child page's openGraph object replaces the parent's.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "en_IN",
      title: `${title} - ${SITE.name}`,
      description,
      url: path,
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - ${SITE.name}`,
      description,
      images: [SHARE_IMAGE],
    },
  };
}

const ORG_ID = `${SITE.url}/#organization`;

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE.legalEntity,
  alternateName: "Faircode",
  url: SITE.website,
  email: SITE.supportEmail,
  telephone: SITE.phone.replace(/\s/g, ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: "B4, Pais Avenue, Water Land Road, Chilavannoor",
    addressLocality: "Kochi",
    addressRegion: "Kerala",
    postalCode: "682020",
    addressCountry: "IN",
  },
};

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organizationJsonLd,
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: "en-IN",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE.url}/#app`,
      name: SITE.name,
      description: SITE.definition,
      url: SITE.url,
      operatingSystem: "Android, iOS",
      applicationCategory: "BusinessApplication",
      image: `${SITE.url}/opengraph-image.png`,
      publisher: { "@id": ORG_ID },
      featureList: [
        "Find colleagues at other branches by location, company, job title and specialization",
        "Office ID verification",
        "Swap requests that share contact details once accepted",
      ],
    },
  ],
};

export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
