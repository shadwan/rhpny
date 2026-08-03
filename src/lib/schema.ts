// JSON-LD structured data for SEO. Rendered into <head> via <script type="application/ld+json">.

export const websiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "RegenHealth Physicians",
  url: "https://www.rhpny.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.rhpny.com/#medicalbusiness",
      name: "RegenHealth Physicians",
      description:
        "Doctor-led regenerative treatments, personalized to your biology and delivered through concierge medicine.",
      url: "https://www.rhpny.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://framerusercontent.com/images/heiUOx7MN7NGPPf4FSzuitKGDU.png?width=673&height=147",
        width: 673,
        height: 147,
      },
      image:
        "https://framerusercontent.com/images/heiUOx7MN7NGPPf4FSzuitKGDU.png?width=673&height=147",
      video: {
        "@type": "VideoObject",
        name: "RegenHealth Physicians - Regenerative Medicine",
        description:
          "Doctor-led regenerative treatments, personalized to your biology and delivered through concierge medicine.",
        thumbnailUrl:
          "https://framerusercontent.com/images/heiUOx7MN7NGPPf4FSzuitKGDU.png?width=673&height=147",
        contentUrl:
          "https://framerusercontent.com/assets/IptC1xgIzw7OpR2EvfSoENiKMQs.mp4",
        embedUrl:
          "https://framerusercontent.com/assets/IptC1xgIzw7OpR2EvfSoENiKMQs.mp4",
        uploadDate: "2024-01-01",
        publisher: {
          "@type": "Organization",
          name: "RegenHealth Physicians",
          url: "https://www.rhpny.com/",
        },
      },
      telephone: ["+13854427744", "+19295773424"],
      email: "admin@rhpny.com",
      medicalSpecialty: ["Physician", "Pain Management Physician"],
      founder: {
        "@type": "Physician",
        "@id": "https://www.rhpny.com/#physician",
        name: "Dr. Ajit Dhaliwal",
        jobTitle: "Doctor and Founder",
        description:
          "Dr. Dhaliwal focuses on clinical vision, protocol development, and outcome standards—bringing doctor-level insight to the systems and care models that guide every patient journey.",
        image: {
          "@type": "ImageObject",
          url: "https://framerusercontent.com/images/KH7devpjxVu1EtWOTSu1GGHCEE0.jpeg?width=1024&height=1024",
          width: 1024,
          height: 1024,
        },
      },
      employee: {
        "@type": "Physician",
        "@id": "https://www.rhpny.com/#physician",
        name: "Dr. Ajit Dhaliwal",
        jobTitle: "Doctor and Founder",
        description:
          "Dr. Dhaliwal focuses on clinical vision, protocol development, and outcome standards—bringing doctor-level insight to the systems and care models that guide every patient journey.",
        image: {
          "@type": "ImageObject",
          url: "https://framerusercontent.com/images/KH7devpjxVu1EtWOTSu1GGHCEE0.jpeg?width=1024&height=1024",
          width: 1024,
          height: 1024,
        },
      },
      location: [
        {
          "@type": "MedicalClinic",
          "@id": "https://www.rhpny.com/#location-newyork",
          name: "RegenHealth Physicians - New York",
          address: {
            "@type": "PostalAddress",
            streetAddress: "575 Madison Ave, Suite 2300",
            addressLocality: "New York City",
            addressRegion: "NY",
            postalCode: "10022",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 40.7624,
            longitude: -73.9722,
          },
          hasMap:
            "https://www.google.com/maps/search/?api=1&query=575+Madison+Ave+Suite+2300+New+York+NY+10022",
          sameAs: "https://en.wikipedia.org/wiki/New_York_City",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "10:00",
              closes: "20:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "12:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "00:00",
              closes: "00:00",
            },
          ],
        },
        {
          "@type": "MedicalClinic",
          "@id": "https://www.rhpny.com/#location-utah",
          name: "RegenHealth Physicians - Utah",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1345 East 3900 South, Suite 110",
            addressLocality: "Salt Lake City",
            addressRegion: "UT",
            postalCode: "84124",
            addressCountry: "US",
          },
          sameAs: "https://en.wikipedia.org/wiki/Salt_Lake_City",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Medical Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Stem Cells Therapy / Cellular Therapy",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Erectile Dysfunction Treatment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "MedicalTherapy", name: "Peptide Therapy" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "MedicalTherapy", name: "Skin Aesthetics" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Hair Restoration Therapy",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "PRP (Platelet-Rich Plasma) Therapy",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Treatment of Acne and Traumatic Scars",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "MedicalTherapy", name: "Lip Rejuvenation" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Regenerative Tissue Therapy",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Joint Pain Management",
            },
          },
        ],
      },
      areaServed: [
        {
          "@type": "City",
          name: "New York City",
          addressRegion: "NY",
          "@id": "https://en.wikipedia.org/wiki/New_York_City",
        },
        {
          "@type": "City",
          name: "Salt Lake City",
          addressRegion: "UT",
          "@id": "https://en.wikipedia.org/wiki/Salt_Lake_City",
        },
      ],
      review: {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: 4.9, bestRating: 5 },
        author: { "@type": "Person", name: "Anonymous" },
      },
      sameAs: [
        "https://www.facebook.com/RegenHeathPhysicians/",
        "https://maps.app.goo.gl/ZVYdcFrj6aKrCG4g7",
        "https://megmendes.com/regen-health-physicians-kypuf/",
        "https://stemcellauthority.com/business-directory/1257/regenhealth-physicians/",
        "https://www.zocdoc.com/doctor/ajitpal-dhaliwal-md-418155",
        "https://www.instagram.com/regenhealthphysicians/",
      ],
    },
    {
      "@type": "Physician",
      "@id": "https://www.rhpny.com/#physician",
      name: "Dr. Ajit Dhaliwal",
      jobTitle: "Doctor and Founder",
      description:
        "Dr. Dhaliwal focuses on clinical vision, protocol development, and outcome standards—bringing doctor-level insight to the systems and care models that guide every patient journey.",
      url: "https://www.rhpny.com/",
      image: {
        "@type": "ImageObject",
        url: "https://framerusercontent.com/images/KH7devpjxVu1EtWOTSu1GGHCEE0.jpeg?width=1024&height=1024",
        width: 1024,
        height: 1024,
      },
      telephone: ["+13854427744", "+19295773424"],
      email: "admin@rhpny.com",
      medicalSpecialty: [
        { "@type": "MedicalSpecialty", name: "Physician" },
        { "@type": "MedicalSpecialty", name: "Pain Management Physician" },
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "MD",
        recognizedBy: { "@type": "Organization", name: "Medical Board" },
      },
      worksFor: {
        "@type": "MedicalBusiness",
        "@id": "https://www.rhpny.com/#medicalbusiness",
        name: "RegenHealth Physicians",
        url: "https://www.rhpny.com/",
      },
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "575 Madison Ave, Suite 2300",
          addressLocality: "New York City",
          addressRegion: "NY",
          postalCode: "10022",
          addressCountry: "US",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "1345 East 3900 South, Suite 110",
          addressLocality: "Salt Lake City",
          addressRegion: "UT",
          postalCode: "84124",
          addressCountry: "US",
        },
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.7624,
        longitude: -73.9722,
      },
      hasMap:
        "https://www.google.com/maps/search/?api=1&query=575+Madison+Ave+Suite+2300+New+York+NY+10022",
      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "Stem Cells Therapy / Cellular Therapy",
        },
        { "@type": "MedicalTherapy", name: "Erectile Dysfunction Treatment" },
        { "@type": "MedicalTherapy", name: "Peptide Therapy" },
        { "@type": "MedicalTherapy", name: "Skin Aesthetics" },
        { "@type": "MedicalTherapy", name: "Hair Restoration Therapy" },
        { "@type": "MedicalTherapy", name: "PRP (Platelet-Rich Plasma) Therapy" },
        {
          "@type": "MedicalTherapy",
          name: "Treatment of Acne and Traumatic Scars",
        },
        { "@type": "MedicalTherapy", name: "Lip Rejuvenation" },
        { "@type": "MedicalTherapy", name: "Regenerative Tissue Therapy" },
        { "@type": "MedicalTherapy", name: "Joint Pain Management" },
      ],
      areaServed: [
        {
          "@type": "City",
          name: "New York City",
          addressRegion: "NY",
          "@id": "https://en.wikipedia.org/wiki/New_York_City",
        },
        {
          "@type": "City",
          name: "Salt Lake City",
          addressRegion: "UT",
          "@id": "https://en.wikipedia.org/wiki/Salt_Lake_City",
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "12:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "00:00",
          closes: "00:00",
        },
      ],
      review: {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: 4.9, bestRating: 5 },
        author: { "@type": "Person", name: "Anonymous" },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 4.9,
        reviewCount: 32,
      },
      sameAs: [
        "https://www.facebook.com/RegenHeathPhysicians/",
        "https://maps.app.goo.gl/ZVYdcFrj6aKrCG4g7",
        "https://megmendes.com/regen-health-physicians-kypuf/",
        "https://stemcellauthority.com/business-directory/1257/regenhealth-physicians/",
        "https://www.zocdoc.com/doctor/ajitpal-dhaliwal-md-418155",
        "https://www.instagram.com/regenhealthphysicians/",
      ],
    },
  ],
};
