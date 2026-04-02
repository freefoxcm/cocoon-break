import { Background } from "@/components/login/Background";
import { LoginCard } from "@/components/login/LoginCard";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* 背景层 */}
      <Background />

      {/* 居中卡片 */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        <LoginCard />
      </div>
    </main>
  );
}
