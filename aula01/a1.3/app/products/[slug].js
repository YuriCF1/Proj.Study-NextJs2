import { useRouter } from 'next/router'
 
export default function Page({params}) {
  const router = useRouter()

  console.log(params);
  return <p>Post: {router.query.slug}</p>
}
