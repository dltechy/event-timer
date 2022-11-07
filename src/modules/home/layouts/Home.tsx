import { Box, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import { FC, useState } from 'react';

const targetDate = new Date(2022, 11, 2);

const getCurrentDate = (): Date => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

const getDaysLeft = (): number => {
  const currentDate = getCurrentDate();
  const timeLeft = targetDate.getTime() - currentDate.getTime();
  const daysLeft = timeLeft / 1000 / 60 / 60 / 24;
  return daysLeft;
};

export const Home: FC = () => {
  // Properties

  const appName = process.env.NEXT_PUBLIC_APP_NAME ?? '';

  const [daysLeft, setDaysLeft] = useState(getDaysLeft());

  // Timer

  setInterval(() => {
    setDaysLeft(getDaysLeft());
  }, 1000);

  // Element

  return (
    <Box paddingX={32} paddingY={16}>
      <Head>
        <title>{appName}</title>
      </Head>

      <Stack spacing={8}>
        <Typography
          variant="h2"
          component="span"
          textAlign="center"
          fontWeight="bold"
        >
          Save The Date!
        </Typography>

        <Stack direction="column" alignSelf="center" alignItems="baseline">
          <Typography
            variant="h1"
            component="span"
            width="100%"
            textAlign="center"
            fontWeight="bold"
          >
            {daysLeft}
          </Typography>
          <Typography
            variant="h4"
            component="span"
            width="100%"
            textAlign="center"
          >
            days left
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <Stack direction="row" spacing={1} alignItems="baseline">
            <Typography variant="h4" component="span" fontWeight="bold">
              Date:
            </Typography>
            <Typography variant="h4" component="span">
              December 2, 2022
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="baseline">
            <Typography variant="h4" component="span" fontWeight="bold">
              Event:
            </Typography>
            <Typography variant="h4" component="span">
              XU Agricultural and Biosystems Engineering Class 1985 Reunion
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="baseline">
            <Typography variant="h4" component="span" fontWeight="bold">
              Venue:
            </Typography>
            <Typography variant="h4" component="span">
              Signature Resort Initao
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
