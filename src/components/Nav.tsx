import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Kogi List</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/kogi"><a>Kogi List</a></Link>
      
    </nav> 
  )
}

export default Navbar