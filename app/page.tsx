import Post from "@/components/post";
import { posts } from "@/data/posts";

export default function Home() {
    const user = {
        username: 'dzindzits',
        name: 'Kristers',
        weight: 67,
        dateOfBirth: new Date(26, 8, 2002)
    }

  return (
    <ul className="[&>*:not(:first-child)]:border-t">
        {posts.map(post => (
            <li key={post.id} className="p-4 border-yellow-400">
                <Post post={post} />
            </li>
        ))}
    </ul>
  )
}
