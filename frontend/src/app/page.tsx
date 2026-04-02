import { Background } from "@/components/login/Background";
import { LoginCard } from "@/components/login/LoginCard";
import { TitleCard } from "@/components/login/TitleCard";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* 背景层 */}
      <Background />

      {/* 垂直居中的两卡片上下排列 */}
      <div className="relative z-10 flex h-screen flex-col items-center justify-center gap-12">
        <TitleCard />
        <LoginCard />
      </div>
    </main>
  );
}
