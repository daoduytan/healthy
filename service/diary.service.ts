import type { DiaryType } from '@/models/diary';

export async function fetchDiaries(): Promise<Array<DiaryType>> {
    const resp = await fetch('/api/diary');

    return await resp.json();
}
