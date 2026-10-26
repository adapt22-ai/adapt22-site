import { notFound } from "next/navigation";
import BrandDirections from "./BrandDirections";
export const metadata = {
  title: "Brand directions | Private review",
  robots: { index: false, follow: false },
};
export default function Page() {
  if (process.env.VERCEL_ENV === "production") notFound();
  return <BrandDirections />;
}
