import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    marginBottom: 30,
    height: '400px'
  },
  content: {
    textAlign: 'center',
    justifyItems: 'center',
    paddingTop: '100px',
    paddingBottom: '100px'
  },
  moviePoster: {
    width: '300px',
    height: '100%'
  },
  overview: {
    textAlign: 'left',
    marginTop: 25
  }
}));

export default function DisplayDetails(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
      className={classes.moviePoster}
      image={`https://image.tmdb.org/t/p/w500/${props.image}`}
      title="Movie Poster"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.title} {props.name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
          Release Date: {props.release_date} | Popularity: {props.popularity}
          </Typography>
          <Typography className={classes.overview} variant="body2" color="textSecondary">
          {props.overview}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

