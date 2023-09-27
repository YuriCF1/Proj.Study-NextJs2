export default function Page({ params }) {
  console.log(params);
  return (<>Meu post: {params.postId}</>);
}

export async function generateMetadata({ params }) {
  return {
    title: `Post ${params.slug}`,
    description: `Página do post ${params.slug}`,
  };
}
