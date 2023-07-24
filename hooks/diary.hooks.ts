'use client';

import { DiaryType } from '@/models/diary';
import { fetchDiaries } from '@/service/diary.service';
import { useCallback, useEffect, useMemo, useState } from 'react';

export function useDiaries() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [diaries, setDiaries] = useState<Array<DiaryType>>([]);

    const fetchMoreDiary = useCallback(async () => {
        try {
            setIsLoading(true);
            const data = await fetchDiaries();
            setDiaries((prevState) => [...prevState, ...data]);
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchMoreDiary();
    }, [fetchMoreDiary]);

    return useMemo(
        () => ({ diaries, isLoading, fetchMoreDiary }),
        [diaries, isLoading, fetchMoreDiary]
    );
}
