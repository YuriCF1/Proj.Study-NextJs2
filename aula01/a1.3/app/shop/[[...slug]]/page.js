//O colchete duplo no nome da página, diz que os parâmetros são opicionais
import Link from "next/link";

export default function Page({ params }) {
  console.log(params);
  return (
    <>
      <h2>Dados dinâmicos: {params.slug}</h2>
      <Link href="/">Ir para a Home</Link>
    </>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: `Página de ${params.slug}`,
    description: `Página de ${params.slug}`,
  };
}
