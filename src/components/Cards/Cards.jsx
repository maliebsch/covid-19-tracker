import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <p>Loading data...</p>;
  }
  const cards = [
    {
      label: 'Infected',
      end: confirmed.value,
      class: styles.infected,
      text: 'Number of active cases of Covid-19'
    },
    {
      label: 'Recovered',
      end: recovered.value,
      class: styles.recovered,
      text: 'Number of recoveries of COVID-19'
    },
    {
      label: 'Deaths',
      end: deaths.value,
      class: styles.deaths,
      text: 'Number of deaths caused by COVID-19'
    }
  ];

  const cardList = cards.map((card) => {
    return (
      <Grid
        item
        component={Card}
        xs={12}
        md={3}
        className={cx(styles.card, card.class)}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {card.label}
          </Typography>
          <Typography variant="h5">
            <CountUp start={0} end={card.end} duration={2.5} separator="," />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">{card.text}</Typography>
        </CardContent>
      </Grid>
    );
  });

  return (
    <div className={styles.container}>
      <Grid container spacing={3}>
        {cardList}
      </Grid>
    </div>
  );
};

export default Cards;
