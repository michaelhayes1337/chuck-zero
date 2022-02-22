import React from 'react';
import Link from 'next/link';
type Props = {};

const Navbar = (props: Props) => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/jokes">Jokes</Link>
      </li>
    </ul>
  );
};

export default Navbar;
