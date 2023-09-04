import { getSortedPostsData } from "@/lib/posts"
import {notFound} from 'next/navigation';



export default function Post({params}:{params:{postId:string}}) {
    const posts = getSortedPostsData()
    const {postId} = params
    if(!posts.find(post => post.id === postId)) notFound
  return (
    <div>page</div>
  )
}
