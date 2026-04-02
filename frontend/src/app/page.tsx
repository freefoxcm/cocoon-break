import { Background } from "@/components/login/Background";
import { LoginCard } from "@/components/login/LoginCard";
import { TitleCard } from "@/components/login/TitleCard";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* 背景层 */}
      <Background />

      {/* 层叠布局 */}
      <div className="relative z-10 flex h-screen items-center justify-center">
        <div className="absolute top-1/3 -translate-y-1/2">
          <TitleCard />
        </div>
        <div className="absolute top-1/2">
          <LoginCard />
        </div>
      </div>
    </main>
  );
}
