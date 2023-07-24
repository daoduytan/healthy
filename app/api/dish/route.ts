import { getDishData } from '@/data/dish.data';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const page = searchParams.get('page') || 1;
    const type = searchParams.get('type');

    const data = await getDishData({ page: +page, type });

    return NextResponse.json({ data });
}
