import { LoadMore } from '@/components/share';
import { useColumnPosts } from '@/hooks/column.hooks';
import { ColumnPostItem } from '@/models/column';
import { PostItem } from './post-item';

type Props = {
    posts: Array<ColumnPostItem>;
};

export function ListPost({ posts }: Props) {
    const {
        isLoading,
        posts: morePosts,
        fetchMorePost,
    } = useColumnPosts(posts);

    return (
        <div>
            <div className="grid grid-cols-4 gap-y-4 gap-x-2 mt-[56px] mb-[24px]">
                {morePosts.map((item) => (
                    <PostItem key={item.id} post={item} />
                ))}
            </div>
            <div className="text-center">
                <LoadMore disabled={isLoading} onClick={fetchMorePost}>
                    コラムをもっと見る
                </LoadMore>
            </div>
        </div>
    );
}
