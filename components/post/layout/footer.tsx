export default function PostFooter({ likeCount, commentCount }: {likeCount: number, commentCount: number}) {
    return (
        <div className="flex gap-4">
            <span>{likeCount} Likes</span>
            <span>{commentCount} Comments</span>
        </div>
    )
}