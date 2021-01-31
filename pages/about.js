import DefaultLayout from "@layouts/default";
import Link from "next/link";
import Image from "next/image";

export default function () {
  return (
    <DefaultLayout title="about " description="A little about me">
      <h2>About me</h2>
      <Image
        src="/me.jpeg"
        alt="Picture of the author"
        width={400}
        height={400}
      />
      <p>I am a software engineer from london, currently living in Berlin</p>
      <p>
        I organise and coach at <a href="https://codebar.io/">codebar</a> Berlin
      </p>
      <Link href="/">
        <a>Back home</a>
      </Link>
    </DefaultLayout>
  );
}
