import { WelcomeCard } from "@/components/login";
import { ButterflyAnimation } from "@/components/login";

export default function WelcomePage() {
  return (
    <main className="bg-sunrise relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Butterfly animation overlay */}
      <ButterflyAnimation />

      {/* Centered welcome card */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        <WelcomeCard />
      </div>
    </main>
  );
}
