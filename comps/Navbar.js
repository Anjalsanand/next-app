import Link from "next/link";
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav >
        <div className="logo">
        <Image   src="/CM.png"  width={120}   height={100} />
        </div>
      
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninja">
        <a>Ninja</a>
      </Link>
    </nav>
  );
};

export default Navbar;
