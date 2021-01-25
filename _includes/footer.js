import Github from "../_assets/github.svg";
import Linkedin from "../_assets/linkedin.svg";
import Twitter from "../_assets/twitter.svg";
import Link from "next/link";

export default function Footer() {
  const d = new Date();
  return (
    <footer>
      <Link href="https://github.com/khamiltonuk">
        <a>
          <Github width="30" />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/kristian-hamilton-56a43714">
        <a>
          <Linkedin width="30" />
        </a>
      </Link>
      <Link href="https://twitter.com/home">
        <a>
          <Twitter width="30" />
        </a>
      </Link>
      <hr />
      <p>&copy; {d.getFullYear()} | footer</p>
    </footer>
  );
}
