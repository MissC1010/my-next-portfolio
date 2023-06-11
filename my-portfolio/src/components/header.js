import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects" legacyBehavior>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #cec9fa;
          background-image: url("/flower4.png");
          color: white;
          padding: 1rem;
        }

        ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        li {
          margin-right: 1rem;
        }

        a {
          color: black;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>
    </header>
  );
}
