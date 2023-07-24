import { BodyRecord, Diary, Exercise, MenuRecord } from '@/components/record';
import { Container } from '@/components/share';

export default function RecordPage() {
    return (
        <Container>
            <div className="grid gap-[55px] mt-[56px]">
                <MenuRecord />
                <BodyRecord />
                <Exercise />
                <Diary />
            </div>
        </Container>
    );
}
