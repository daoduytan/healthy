export type ColumnItem = {
    id: string;
    label: string;
    sub: string;
};

export type ColumnPostItem = {
    id: string;
    date: Date;
    thumbnail: string;
    title: string;
    tags: Array<string>;
};
