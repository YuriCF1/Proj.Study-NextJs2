import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>DASH 404</h2>
      <p>Exemplo de 404 exclusivo de uma pasta</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
