import Image from "next/image";
import Link from "next/link";

import { MainLayout } from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>

      <div className="center">
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className="thirteen">
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className="grid">
        <Link href="/about" className="card" rel="noopener noreferrer">
          <h2>about</h2>
        </Link>
      </div>
    </MainLayout>
  );
}
