import { type Dish } from '@/models/dish';

type Props = {
    dish: Dish;
};

export function DishItem({ dish }: Props) {
    return (
        <div
            className="bg-no-repeat cursor-pointer bg-center pb-[100%] relative"
            style={{ backgroundImage: `url("${dish.image}")` }}
        >
            <div className="bg-primary/300 absolute bottom-0 left-0">
                <span className="text-[15px] font-light text-light h-[32px] pl-3 pr-6">
                    {dish.date} {dish.type}
                </span>
            </div>
        </div>
    );
}
