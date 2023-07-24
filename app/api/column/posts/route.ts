import { columnCats, fakePostColumn } from '@/data/column.data';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const posts = fakePostColumn();

    return NextResponse.json(posts);
}
