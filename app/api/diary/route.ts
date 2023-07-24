import { columnCats, fakePostColumn } from '@/data/column.data';
import { fakeDiaryData } from '@/data/diary.data';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const diaries = fakeDiaryData();

    return NextResponse.json(diaries);
}
