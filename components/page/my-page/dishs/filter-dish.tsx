import { FilterDishItem } from './filter-dish-item';

export function FilterDish() {
    return (
        <div className="flex gap-[80px] max-w-[740px]  mx-auto">
            <FilterDishItem type="Morning" />
            <FilterDishItem type="Lunch" />
            <FilterDishItem type="Dinner" />
            <FilterDishItem type="Snack" />
        </div>
    );
}
