'use client';

import { Center } from '@/components/share';
import { noto_sans_jp } from '@/config/fonts';
import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

const menus = [
    {
        id: 'body_record',
        label: 'Body record',
        sub: '自分のカラダの記録',
        img: '/images/recommend/MyRecommend-1.jpg',
    },
    {
        id: 'my_exercise',
        label: 'My exercise',
        sub: '自分の運動の記録',
        img: '/images/recommend/MyRecommend-2.jpg',
    },
    {
        id: 'my_diary',
        label: 'My diary',
        sub: '自分の日記',
        img: '/images/recommend/MyRecommend-3.jpg',
    },
];

export function MenuRecord() {
    return (
        <div className="flex justify-between">
            {menus.map((item) => (
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="bg-primary/300 p-[24px]"
                >
                    <div className="relative">
                        <div
                            className="absolute bg-dark/600 h-full w-full"
                            style={{
                                backgroundImage: `url(${item.img})`,
                                filter: 'grayscale(100%)',
                            }}
                        />
                        <span className="absolute bg-dark/600 opacity-70 h-full w-full" />
                        <Center className="relative text-center flex-col h-[240px] w-[240px]">
                            <div className="text-primary/300 text-[25px] uppercase">
                                {item.label}
                            </div>
                            <span
                                className={twMerge(
                                    'inline-flex items-center justify-center text-light text-sm font-light bg-primary/400 h-[24px] min-w-[160px]',
                                    noto_sans_jp.className
                                )}
                            >
                                {item.sub}
                            </span>
                        </Center>
                    </div>
                </a>
            ))}
        </div>
    );
}
