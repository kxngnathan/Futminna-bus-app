import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Dashboard as DashboardLayout } from 'layouts';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  },
  card: {
    padding: 20,
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
}));

export default function RecieveCard() {
  const classes = useStyles();
  // const { classes } = this.props;

  return (
  <DashboardLayout title="Recieve">
  <div className={classes.root}>
          <Grid container spacing={4}>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('./qrcode.jpg')}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography variant="body2" color="textSecondary"component="p">
           Account Name
        </Typography>
          <Typography style={{ paddingBottom: 5 }} variant="h6"  component="h6">
           Jonathan Johnson
          </Typography>
        </CardContent>
      </CardActionArea>
 
    </Card>
            </Grid>

          </Grid>
        </div>
    
    </DashboardLayout>
  );
}
