import Link from "next/link";
import Image from "next/image";
import { MainLayout } from "../components/layout/MainLayout";
import { LightLayout } from "../components/layout/LightLayout";

const about = () => (
  <>
    <h1>About Page</h1>

    <div className={"center"}>
      <Image
        className={"logo"}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <div className={"thirteen"}>
        <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
      </div>
    </div>

    <div className={"grid"}>
      <Link href="/" className={"card"} rel="noopener noreferrer">
        <h2>Home</h2>
      </Link>
    </div>
  </>
);

about.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <LightLayout>{page}</LightLayout>
    </MainLayout>
  );
};

export default about;
