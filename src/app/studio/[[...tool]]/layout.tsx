// Server layout for the Studio segment. Supplies the metadata/viewport that
// Sanity Studio needs (and keeps /studio out of the search index).
export { metadata, viewport } from "next-sanity/studio";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
