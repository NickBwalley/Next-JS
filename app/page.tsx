import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div>
        <Link href="/performance">Performance</Link>
        <Link href="/reliability">reliability</Link>
        <Link href="/scale">scale</Link>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
