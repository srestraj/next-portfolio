import Link from "next/link";
import ArrowIcon from "@/components/Arrow";

export default function NotFound() {
  return (
    <main className="not-found container">
      <p className="eyebrow">404</p>
      <h1>That page went somewhere else.</h1>
      <Link href="/" className="button button-dark">
        Back home <ArrowIcon className="arrow-icon" />
      </Link>
    </main>
  );
}
