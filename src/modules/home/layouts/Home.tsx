import { Container } from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';

export const Home: FC = () => {
  // Properties

  const appName = process.env.NEXT_PUBLIC_APP_NAME ?? '';

  // Element

  return (
    <Container>
      <Head>
        <title>{appName}</title>
      </Head>
    </Container>
  );
};
