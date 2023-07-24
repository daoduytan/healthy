'use client';
import { useDishs } from 'context/dish.context';
import { DishItem } from './dish-item';
import { Center, Loading } from '@/components/share';

export function ListDish() {
    const {
        state: { isLoading, dishs, page, type },
    } = useDishs();

    if (isLoading) {
        return (
            <Center className="h-72">
                <Loading />
            </Center>
        );
    }

    return (
        <div className="grid grid-cols-4 gap-2">
            {dishs.map((item) =>
                item.map((dish) => <DishItem key={dish.id} dish={dish} />)
            )}
        </div>
    );
}
