import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>oopps....</h1>
      <h2>Page Not Found</h2>
      <p>
        Go Back To The
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
