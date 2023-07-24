'use client';

import { DishContext, useDishs } from 'context/dish.context';
import { FilterDish } from './filter-dish';
import { LoadMoreDish } from './load-more-dish';
import { ListDish } from './dishs';

export function Dishs() {
    return (
        <DishContext>
            <div className="grid gap-6">
                <FilterDish />
                <ListDish />
                <div className="flex items-center justify-center">
                    <LoadMoreDish />
                </div>
            </div>
        </DishContext>
    );
}
