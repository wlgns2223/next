import React from "react";
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { kogi: data },
  };
};

const Detail: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  kogi,
}) => {
  return (
    <div>
      <h1>{kogi.name}</h1>
      <p>{kogi.email}</p>
      <p>{kogi.website}</p>
    </div>
  );
};

export default Detail;
