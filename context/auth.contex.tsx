'use client';

import { usePathname } from 'next/navigation';
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
    isLoading: boolean;
    isAuth: boolean;
};

type Action = {
    type: string;
    payload?: any;
};

const initialState: State = {
    isLoading: true,
    isAuth: false,
};

const actionAuthTypes = {
    LOAD_USER: 'auth/load_user',
    LOGIN: 'auth/login',
};

function reducerDish(state: State, action: Action) {
    switch (action.type) {
        case actionAuthTypes.LOAD_USER:
            return {
                ...state,
                isLoading: false,
                isAuth: action.payload,
            };

        case actionAuthTypes.LOGIN:
            return {
                ...state,
                isLoading: false,
                isAuth: !!action.payload,
            };

        default:
            return state;
    }
}

const Context = createContext<{
    state: State;
    loadUser: (value: boolean) => void;
    login: ({ email, password }: { email: string; password: string }) => void;
}>({
    state: initialState,
    loadUser: () => {},
    login: () => {},
});

type Props = {
    children: ReactNode;
};

export function AuthContext({ children }: Props) {
    const pathname = usePathname();
    const [state, dispatch] = useReducer(reducerDish, initialState);

    const loadUser = useCallback((value: boolean) => {
        dispatch({
            type: actionAuthTypes.LOAD_USER,
            payload: value,
        });
    }, []);

    const login = useCallback((values: { email: string; password: string }) => {
        localStorage.setItem('auth', JSON.stringify(values));
        dispatch({
            type: actionAuthTypes.LOGIN,
        });
    }, []);

    useEffect(() => {
        async function getData() {
            const data = localStorage.getItem('auth');

            if (!data && pathname !== 'login') {
                window.location.href = '/login';
                return;
            }

            loadUser(true);
        }

        getData();
    }, []);

    const value = useMemo(
        () => ({
            state,
            loadUser,
            login,
        }),
        [state, loadUser, login]
    );

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useAuth() {
    return useContext(Context);
}
