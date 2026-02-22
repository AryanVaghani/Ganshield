import { AuthForm } from '../components/AuthForm';
import ClickSpark from '../components/ClickSpark';
import FlowFieldBackground from '@/components/ui/flow-field-background';

export const AuthPage = () => {
    return (
        <div className="relative min-h-screen pt-24 pb-12 flex items-center justify-center text-white overflow-hidden">
            {/* Flow Field Background — interactive particle canvas */}
            <ClickSpark
                sparkColor='#e78a53'
                sparkSize={10}
                sparkRadius={20}
                sparkCount={8}
                duration={400}
                className="absolute inset-0 z-0"
            >
                <FlowFieldBackground
                    color="#d4a060"
                    trailOpacity={0.08}
                    speed={0.6}
                    particleCount={400}
                />
            </ClickSpark>

            <AuthForm />
        </div>
    );
}
