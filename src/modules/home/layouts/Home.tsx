import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';

import { theme } from '@app/styles/theme';

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

  const xl = useMediaQuery(theme.breakpoints.up('xl'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));

  const [daysLeft, setDaysLeft] = useState(getDaysLeft());

  const [containerPaddingX, setContainerPaddingX] = useState<number>();
  const [containerPaddingY, setContainerPaddingY] = useState<number>();

  const [defaultSpacing, setDefaultSpacing] = useState<number>();
  const [detailsSpacing, setDetailsSpacing] = useState<number>();

  type TextVariantType = 'h1' | 'h2' | 'h4' | 'h6';

  const [largeHeaderVariant, setLargeHeaderVariant] =
    useState<TextVariantType>();
  const [timerVariant, setTimerVariant] = useState<TextVariantType>();
  const [miscTextVariant, setMiscTextVariant] = useState<TextVariantType>();

  // Timer

  setInterval(() => {
    setDaysLeft(getDaysLeft());
  }, 1000);

  // Effects

  useEffect(() => {
    setContainerPaddingX(8);
    setContainerPaddingY(8);

    setDefaultSpacing(2);
    setDetailsSpacing(0);

    setLargeHeaderVariant('h4');
    setTimerVariant('h2');
    setMiscTextVariant('h6');

    if (lg) {
      setContainerPaddingX(16);

      setDefaultSpacing(8);

      setLargeHeaderVariant('h2');
      setTimerVariant('h1');
      setMiscTextVariant('h4');
    }
    if (xl) {
      setContainerPaddingX(32);
      setContainerPaddingY(16);
    }
  }, [xl, lg]);

  // Element

  return (
    <Box
      position="absolute"
      width="100%"
      height="100%"
      paddingX={containerPaddingX}
      paddingY={containerPaddingY}
      overflow="auto"
    >
      <Head>
        <title>{appName}</title>
      </Head>

      <Stack spacing={defaultSpacing}>
        <Typography
          variant={largeHeaderVariant}
          component="span"
          textAlign="center"
          fontWeight="bold"
        >
          Save The Date!
        </Typography>

        <Stack direction="column" alignSelf="center" alignItems="baseline">
          <Typography
            variant={timerVariant}
            component="span"
            width="100%"
            textAlign="center"
            fontWeight="bold"
          >
            {daysLeft}
          </Typography>
          <Typography
            variant={miscTextVariant}
            component="span"
            width="100%"
            textAlign="center"
          >
            days left
          </Typography>
        </Stack>

        <Stack spacing={detailsSpacing}>
          <Stack direction="row" spacing={1} alignItems="baseline">
            <Typography
              variant={miscTextVariant}
              component="span"
              fontWeight="bold"
            >
              Date:
            </Typography>
            <Typography variant={miscTextVariant} component="span">
              December 2, 2022
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="baseline">
            <Typography
              variant={miscTextVariant}
              component="span"
              fontWeight="bold"
            >
              Event:
            </Typography>
            <Typography variant={miscTextVariant} component="span">
              XU Agricultural and Biosystems Engineering Class 1985 Reunion
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="baseline">
            <Typography
              variant={miscTextVariant}
              component="span"
              fontWeight="bold"
            >
              Venue:
            </Typography>
            <Typography variant={miscTextVariant} component="span">
              Signature Resort Initao
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
