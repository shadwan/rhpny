export const SITE_URL = "https://rhpny.com";
export const SITE_NAME = "Regen Health Physicians";
export const PHONE_NUMBER = "+1 (929) 577-4222";
export const PHONE_HREF = "tel:+19295774222";
export const EMAIL = "admin@rhpny.com";
export const BOOKING_URL = "/book";
export const TYPEFORM_ID = "01KQFVB33ZMA1S6H8D205BJ7PD";

export const ADDRESSES = {
  nyc: {
    label: "New York City",
    street: "184 E 70th St Level B1, Suite B1",
    city: "New York, NY 10021",
  },
  utah: {
    label: "Salt Lake City",
    street: "1345 East 3900 South, Suite 110",
    city: "Salt Lake City, UT 84124",
  },
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
] as const;
