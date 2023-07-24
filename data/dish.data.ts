import { Dish, DishType } from '@/models/dish';
import { randomUUID } from 'crypto';
import { chunk } from 'lodash';

export const dishsData: Array<Dish> = [
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Morning',
        image: '/images/dish/m01.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Morning',
        image: '/images/dish/m02.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Morning',
        image: '/images/dish/m03.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Snack',
        image: '/images/dish/s01.jpg',
    },

    {
        id: randomUUID(),
        date: '05.21',
        type: 'Lunch',
        image: '/images/dish/l01.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Lunch',
        image: '/images/dish/l02.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Lunch',
        image: '/images/dish/l03.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Snack',
        image: '/images/dish/s01.jpg',
    },

    {
        id: randomUUID(),
        date: '05.21',
        type: 'Dinner',
        image: '/images/dish/d01.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Dinner',
        image: '/images/dish/d02.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Snack',
        image: '/images/dish/s01.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Morning',
        image: '/images/dish/m01.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Morning',
        image: '/images/dish/m02.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Morning',
        image: '/images/dish/m03.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Snack',
        image: '/images/dish/s01.jpg',
    },

    {
        id: randomUUID(),
        date: '05.21',
        type: 'Lunch',
        image: '/images/dish/l01.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Lunch',
        image: '/images/dish/l02.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Lunch',
        image: '/images/dish/l03.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Snack',
        image: '/images/dish/s01.jpg',
    },

    {
        id: randomUUID(),
        date: '05.21',
        type: 'Dinner',
        image: '/images/dish/d01.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Dinner',
        image: '/images/dish/d02.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Snack',
        image: '/images/dish/s01.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Morning',
        image: '/images/dish/m01.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Morning',
        image: '/images/dish/m02.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Morning',
        image: '/images/dish/m03.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Snack',
        image: '/images/dish/s01.jpg',
    },

    {
        id: randomUUID(),
        date: '05.21',
        type: 'Lunch',
        image: '/images/dish/l01.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Lunch',
        image: '/images/dish/l02.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Lunch',
        image: '/images/dish/l03.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Snack',
        image: '/images/dish/s01.jpg',
    },

    {
        id: randomUUID(),
        date: '05.21',
        type: 'Dinner',
        image: '/images/dish/d01.jpg',
    },
    {
        id: randomUUID(),
        date: '05.21',
        type: 'Dinner',
        image: '/images/dish/d02.jpg',
    },

    {
        id: randomUUID(),
        date: '05.21',
        type: 'Snack',
        image: '/images/dish/s01.jpg',
    },
];

export function getDishData({
    page = 1,
    type,
}: {
    page?: number;
    type?: string | null;
}) {
    if (!type || type === 'null') {
        const chunkArr = chunk(dishsData, 8);
        return {
            total: dishsData.length,
            dishs: chunkArr[page - 1],
        };
    }

    const dishWithType = dishsData.filter((item) => item.type === type);
    const chunkArrWithType = chunk(dishWithType, 8);

    return {
        total: dishWithType.length,
        dishs: chunkArrWithType[page - 1],
    };
}
