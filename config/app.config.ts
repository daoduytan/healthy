export const appTitle = 'Healthy';

export type MenuItemHeader = {
    label: string;
    href: string;
    icon: any;
    notification?: number;
};

export const headerMenu: Array<MenuItemHeader> = [
    {
        label: '自分の記録',
        href: '/record',
        icon: '/icons/icon-header-menu-1.svg',
    },
    {
        label: 'チャレンジ',
        href: '#',
        icon: '/icons/icon-header-menu-2.svg',
    },
    {
        label: 'お知らせ',
        href: '#',
        icon: '/icons/icon-header-menu-3.svg',
        notification: 1,
    },
];

export const menusDropdown: Array<{ label: string; href: string }> = [
    { label: '自分の記録', href: 'record' },
    { label: '体重グラフ', href: '' },
    { label: '目標', href: '' },
    { label: '選択中のコース', href: '' },
    { label: 'コラム一覧', href: 'column-list' },
    { label: '設定', href: '' },
];

export const footerMenus: Array<{ label: string; href: string }> = [
    {
        label: '会員登録',
        href: '#',
    },
    {
        label: '運営会社',
        href: '#',
    },
    {
        label: '利用規約',
        href: '#',
    },
    {
        label: '個人情報の取扱について',
        href: '#',
    },
    {
        label: '特定商取引法に基づく表記',
        href: '#',
    },
    {
        label: 'お問い合わせ',
        href: '#',
    },
];
