'use client';

import { LoadMore } from '@/components/share';
import { inter, noto_sans_jp } from '@/config/fonts';
import { useDiaries } from '@/hooks/diary.hooks';
import { twMerge } from 'tailwind-merge';
import { DiaryItem } from './diary-item';

export function Diary() {
    const { isLoading, diaries, fetchMoreDiary } = useDiaries();

    return (
        <div id="my_diary">
            <div className="uppercase text-[22px] text-dark/500">My diary</div>
            <div className="grid grid-cols-4 gap-3">
                {diaries.map((item) => (
                    <DiaryItem key={item.id} />
                ))}
            </div>

            <div className="text-center mt-[24px]">
                <LoadMore onClick={fetchMoreDiary}>
                    自分の日記をもっと見る
                </LoadMore>
            </div>
        </div>
    );
}
