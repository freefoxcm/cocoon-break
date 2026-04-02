import { Background } from "@/components/login/Background";
import { LoginCard } from "@/components/login/LoginCard";
import { TitleCard } from "@/components/login/TitleCard";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* 背景层 */}
      <Background />

      {/* 左侧标题卡片 */}
      <div className="absolute left-1/3 bottom-24 z-10">
        <TitleCard />
      </div>

      {/* 右侧登录卡片 */}
      <div className="relative z-10 flex h-screen items-center justify-end px-12">
        <LoginCard />
      </div>
    </main>
  );
}
