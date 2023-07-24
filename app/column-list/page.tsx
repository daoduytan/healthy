'use client';

import { ColumnItem, ListPost } from '@/components/page/column';
import { Center, Container, Loading } from '@/components/share';
import { useColumnCat } from '@/hooks/column.hooks';

export default function ColumnListPage() {
    const { isLoading, columns, posts } = useColumnCat();

    function renderContent() {
        if (isLoading) {
            return (
                <Center className="min-h-[320px]">
                    <Loading />
                </Center>
            );
        }

        return (
            <>
                <div className="grid grid-cols-4 gap-[30px] pt-[55px]">
                    {columns.map((item) => (
                        <ColumnItem key={item.id} column={item} />
                    ))}
                </div>
                <ListPost posts={posts} />
            </>
        );
    }

    return <Container>{renderContent()}</Container>;
}
