'use client';

import { dishsData } from '@/data/dish.data';
import { type Dish, type DishType } from '@/models/dish';
import { fetchListDish } from '@/service/dish.service';
import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useReducer,
} from 'react';

type State = {
    total: number;
    isLoading: boolean;
    isLoadingPage: boolean;
    dishs: Array<Dish[]>;
    type: null | DishType;
    page: number;
};

type Action = {
    type: string;
    payload?: any;
};

const initialState: State = {
    total: 0,
    isLoading: true,
    isLoadingPage: false,
    dishs: [],
    type: null,
    page: 1,
};

const actionDishTypes = {
    LOAD_MORE: 'dishs/load_more',
    FILTER_TYPE: 'dishs/filter_type',
    LOAD_DISH_DONE: 'dishs/load_dish_done',
};

function reducerDish(state: State, action: Action) {
    switch (action.type) {
        case actionDishTypes.FILTER_TYPE:
            return {
                ...state,
                isLoading: true,
                type: action.payload,
                dishs: [],
                page: 1,
            };

        case actionDishTypes.LOAD_MORE:
            return {
                ...state,
                isLoadingPage: true,
                page: state.page + 1,
            };

        case actionDishTypes.LOAD_DISH_DONE:
            return {
                ...state,
                isLoading: false,
                isLoadingPage: false,
                dishs: [...state.dishs, action.payload.dishs],
                total: action.payload.total,
            };

        default:
            return state;
    }
}

const Context = createContext<{
    state: State;
    loadMore: () => void;
    selectDishType: (type: DishType) => void;
}>({
    state: initialState,
    loadMore: () => {},
    selectDishType: () => {},
});

type Props = {
    children: ReactNode;
};

export function DishContext({ children }: Props) {
    const [state, dispatch] = useReducer(reducerDish, initialState);

    const loadMore = useCallback(() => {
        dispatch({
            type: actionDishTypes.LOAD_MORE,
        });
    }, []);

    const selectDishType = useCallback(async (type: DishType) => {
        dispatch({
            type: actionDishTypes.FILTER_TYPE,
            payload: type,
        });
    }, []);

    useEffect(() => {
        async function getData() {
            const res = await fetchListDish({
                page: state.page,
                type: state.type,
            });

            dispatch({
                type: actionDishTypes.LOAD_DISH_DONE,
                payload: res.data,
            });
        }

        getData();
    }, [state.type, state.page]);

    const value = useMemo(
        () => ({
            state,
            loadMore,
            selectDishType,
        }),
        [state, loadMore, selectDishType]
    );

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useDishs() {
    return useContext(Context);
}
