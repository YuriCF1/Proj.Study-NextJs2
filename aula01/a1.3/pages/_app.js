//Esse documento está caindo a desuso, juntamente com o _document. Sendo ambos substituidos pelo layout

//Esse documento não é mais recomendado, pois ele faz parte apenas do modo de ornização Page Folder.
//O NextJs está mudando para o App folder, similar ao do react
//Agora os estilos globais podem ser colocados no arquivo global 'layout'
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
