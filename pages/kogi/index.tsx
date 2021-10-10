import Link from "next/link";
import React from "react";
import styles from "../../styles/_KogiList.module.scss";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      kogis: data,
    },
  };
};

interface IJsonplacerholder {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  compnay: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface IKogi {
  kogis: IJsonplacerholder[];
}

const hello: React.FC<IKogi> = ({ kogis }) => {
  return (
    <div>
      <h1>Kogi List</h1>
      {kogis.map((kogi) => (
        <div key={kogi.id}>
          <Link href={`/kogi/${kogi.id}`}>
            <a className={styles.single}>
              <h3>{kogi.name}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default hello;
