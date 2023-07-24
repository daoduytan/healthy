import { DiaryType } from '@/models/diary';
import { randomUUID } from 'crypto';

export const diaryData: Array<DiaryType> = [
    {
        id: randomUUID(),
        date: new Date(),
        content: `
        私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
        `,
    },
    {
        id: randomUUID(),
        date: new Date(),
        content: `
        私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
        `,
    },
    {
        id: randomUUID(),
        date: new Date(),
        content: `
        私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
        `,
    },
    {
        id: randomUUID(),
        date: new Date(),
        content: `
        私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
        `,
    },
    {
        id: randomUUID(),
        date: new Date(),
        content: `
        私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
        `,
    },
    {
        id: randomUUID(),
        date: new Date(),
        content: `
        私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
        `,
    },
    {
        id: randomUUID(),
        date: new Date(),
        content: `
        私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
        `,
    },
    {
        id: randomUUID(),
        date: new Date(),
        content: `
        私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
        `,
    },
];

export function fakeDiaryData() {
    return diaryData;
}
