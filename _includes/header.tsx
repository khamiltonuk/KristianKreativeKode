import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <Link href="/">
            <a>
              <h1>khamilton.co.uk</h1>
            </a>
          </Link>
          <Link href="/about">
            <a>About me</a>
          </Link>
        </div>
      </div>
    </header>
  );
}
