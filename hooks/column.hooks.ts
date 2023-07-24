'use client';

import type { ColumnItem, ColumnPostItem } from '@/models/column';
import { fetchColumnCat, fetchPosts } from '@/service/column.service';
import { useCallback, useEffect, useMemo, useState } from 'react';

export function useColumnCat() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [columns, setColumns] = useState<Array<ColumnItem>>([]);
    const [posts, setPosts] = useState<Array<ColumnPostItem>>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const data = await fetchColumnCat();

                setColumns(data.columnCats);
                setPosts(data.columnPosts);
            } catch (error) {
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    return useMemo(
        () => ({ columns, posts, isLoading }),
        [columns, posts, isLoading]
    );
}

export function useColumnPosts(initialPosts: Array<ColumnPostItem>) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [posts, setPosts] = useState<Array<ColumnPostItem>>(initialPosts);

    const fetchMorePost = useCallback(async () => {
        try {
            setIsLoading(true);
            const data = await fetchPosts();
            setPosts((prevState) => [...prevState, ...data]);
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    }, []);

    return useMemo(
        () => ({ posts, isLoading, fetchMorePost }),
        [posts, isLoading, fetchMorePost]
    );
}
