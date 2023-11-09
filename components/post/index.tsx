import { Post } from "@/types/post";
import ImagePost from "./image";
import AchievementPost from "./achievement";
import WorkoutPost from "./workout";
import PostFooter from "./layout/footer";
import PostHeader from "./layout/header";

export default function Post({post, hideUser}: { post: Post, hideUser?: boolean }) {
    return (
        <article className="flex flex-col gap-2">
            <PostHeader user={post.user} caption={post.caption} hideUser={hideUser} />
            {post.type === 'achievement' && <AchievementPost {...post} />}
            {post.type === 'image' && <ImagePost {...post} />}
            {post.type === 'workout' && <WorkoutPost {...post} />}
            <PostFooter likeCount={post.likeCount} commentCount={post.commentCount} />
        </article>
    )
}