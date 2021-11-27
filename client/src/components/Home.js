import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Day from './Day';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`/api`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      {data &&
        data.days.map((day) => (
          <Day key={day.day} day={day} defaultImage={data.defaultImage} />
        ))}
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 20px;
  background-image: linear-gradient(45deg, #710000, #cf0000);
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  box-sizing: border-box;
  background-size: cover;

  @media (max-width: 580px) {
    padding: 10px;
  }
`;
