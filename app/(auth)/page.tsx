import { Chart, CircleChart } from '@/components/my-page';
import { Dishs } from '@/components/page/my-page';
import { Container } from '@/components/share';

export default async function Home() {
    return (
        <div>
            <div className="bg-dark/600 grid grid-cols-12 mb-6">
                <div
                    className="bg-cover col-span-5 bg-gray/400 flex justify-center items-center"
                    style={{
                        backgroundImage: 'url(/images/main_photo.jpg)',
                    }}
                >
                    <CircleChart />
                </div>
                <div className="col-span-7 p-8 bg-pink-100">
                    <Chart />
                </div>
            </div>

            <Container>
                <Dishs />
            </Container>
        </div>
    );
}
