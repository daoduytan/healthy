import { LoadMore } from '@/components/share';
import { useDishs } from 'context/dish.context';

export function LoadMoreDish() {
    const {
        loadMore,
        state: { isLoadingPage, total, page },
    } = useDishs();

    if (Math.round(total / 8) > page) {
        return (
            <LoadMore disabled={isLoadingPage} onClick={loadMore}>
                記録をもっと見る
            </LoadMore>
        );
    }

    return null;
}
