import { ColumnPostItem, type ColumnItem } from '@/models/column';
import { randomUUID } from 'crypto';

export const columnCats: Array<ColumnItem> = [
    {
        label: 'Recommended column',
        sub: 'オススメ',
        id: 'column',
    },
    {
        label: 'Recommended diet',
        sub: 'ダイエット',
        id: 'diet',
    },
    {
        label: 'Recommended beauty',
        sub: '美容',
        id: 'beauty',
    },
    {
        label: 'Recommended healthy',
        sub: '健康',
        id: 'healthy',
    },
];

export const postsColumn: Array<ColumnPostItem> = [
    {
        id: randomUUID(),
        date: new Date(),
        thumbnail: '/images/recommend/column-1.jpg',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['魚料理', '和食', 'DHA'],
    },
    {
        id: randomUUID(),
        date: new Date(),
        thumbnail: '/images/recommend/column-2.jpg',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['魚料理', '和食', 'DHA'],
    },
    {
        id: randomUUID(),
        date: new Date(),
        thumbnail: '/images/recommend/column-3.jpg',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['魚料理', '和食', 'DHA'],
    },
    {
        id: randomUUID(),
        date: new Date(),
        thumbnail: '/images/recommend/column-4.jpg',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['魚料理', '和食', 'DHA'],
    },
    {
        id: randomUUID(),
        date: new Date(),
        thumbnail: '/images/recommend/column-5.jpg',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['魚料理', '和食', 'DHA'],
    },
    {
        id: randomUUID(),
        date: new Date(),
        thumbnail: '/images/recommend/column-6.jpg',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['魚料理', '和食', 'DHA'],
    },
    {
        id: randomUUID(),
        date: new Date(),
        thumbnail: '/images/recommend/column-7.jpg',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['魚料理', '和食', 'DHA'],
    },
    {
        id: randomUUID(),
        date: new Date(),
        thumbnail: '/images/recommend/column-8.jpg',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['魚料理', '和食', 'DHA'],
    },
];

export function fakePostColumn() {
    return postsColumn;
}
