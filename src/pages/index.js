import React from 'react';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <>
      <h1>Hello Gatsby!</h1>
      <Link to="/about">Learn about me &rarr;</Link>
    </>
  );
}
