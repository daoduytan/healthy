import type { ColumnItem, ColumnPostItem } from '@/models/column';

export async function fetchColumnCat(): Promise<{
    columnCats: Array<ColumnItem>;
    columnPosts: Array<ColumnPostItem>;
}> {
    const resp = await fetch('/api/column');

    return await resp.json();
}

export async function fetchPosts(): Promise<Array<ColumnPostItem>> {
    const resp = await fetch('/api/column/posts');

    return await resp.json();
}
