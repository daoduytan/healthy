import { Container } from '../container';
import { Logo } from './logo';
import { NavigationHeader } from './navigation.header';

export function Header() {
    return (
        <header
            className="bg-dark/500 relative z-10"
            style={{
                boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.16)',
            }}
        >
            <Container>
                <div className="flex items-center justify-between h-[64px]">
                    <Logo />
                    <NavigationHeader />
                </div>
            </Container>
        </header>
    );
}
