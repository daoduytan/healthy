export type DishType = 'Morning' | 'Lunch' | 'Dinner' | 'Snack';

export type Dish = {
    id: string;
    type: DishType;
    date: string;
    image: string;
};
