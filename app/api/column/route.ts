import { columnCats, fakePostColumn } from '@/data/column.data';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 1;

    const columnPosts = fakePostColumn();

    return NextResponse.json({ columnCats, columnPosts });
}
