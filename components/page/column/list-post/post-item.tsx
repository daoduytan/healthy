import { inter, noto_sans_jp } from '@/config/fonts';
import type { ColumnPostItem } from '@/models/column';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type Props = {
    post: ColumnPostItem;
};

export function PostItem({ post }: Props) {
    return (
        <div className="grid gap-2" key={post.id}>
            <div className="relative">
                <Image
                    src={post.thumbnail}
                    width={234}
                    height={144}
                    alt={post.title}
                />
                <div
                    className={twMerge(
                        'flex h-[24px] posts-center px-2 gap-3 absolute bottom-0 bg-primary/300 text-[15px] font-light text-light',
                        inter.className
                    )}
                >
                    <span>2021.05.17</span>
                    <span>23:25</span>
                </div>
            </div>
            <h3
                className={twMerge(
                    'text-[15px] text-dark/500 font-light',
                    noto_sans_jp.className
                )}
            >
                {post.title}
            </h3>
            <div
                className={twMerge(
                    'flex gap-2 text-primary/400 text-xs font-light',
                    noto_sans_jp.className
                )}
            >
                {post.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                ))}
            </div>
        </div>
    );
}
