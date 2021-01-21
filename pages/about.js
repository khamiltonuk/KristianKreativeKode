import DefaultLayout from "@layouts/default";
import Link from "next/link";

export default function () {
  return (
    <DefaultLayout title="about " description="A little about me">
      <h2>About me</h2>
      <p>I am a software engineer from london, currently living in Berlin</p>
      <p>
        <a href="https://twitter.com/khamiltonuk">twitter</a>
      </p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </DefaultLayout>
  );
}
