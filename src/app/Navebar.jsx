import Link from "next/link";
export default function Navebar() {
  return (
    <ul>
      <ul>
        <Link href="/">Home</Link>
      </ul>
      <ul>
        <Link href="/clients">View Clients</Link>
      </ul>
      <ul>
        <Link href="/clients/add">Add Clients</Link>
      </ul>
    </ul>
  );
}
