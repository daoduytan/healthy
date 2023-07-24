import { type DishType } from '@/models/dish';

export async function fetchListDish({
    page,
    type,
}: {
    page: number;
    type: DishType;
}) {
    const res = await fetch(`/api/dish?page=${page}&type=${type}`);

    return res.json();
}
