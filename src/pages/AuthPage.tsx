import { Background } from '../components/Background';
import { AuthForm } from '../components/AuthForm';
import ClickSpark from '../components/ClickSpark';

export const AuthPage = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
            {/* ClickSpark wraps the background area. z-0 ensures it's behind the AuthForm which is z-10 */}
            <ClickSpark
                sparkColor='#00f0ff'
                sparkSize={10}
                sparkRadius={20}
                sparkCount={8}
                duration={400}
                className="absolute inset-0 z-0"
            >
                <Background />
            </ClickSpark>

            {/* AuthForm has relative z-10 in its own component definition, so it sits on top. 
          Clicks on AuthForm will naturally not trigger ClickSpark's onClick because they bubble,
          BUT ClickSpark is a sibling (wrapping Background) but visually behind.
      */}
            <AuthForm />
        </div>
    );
}
