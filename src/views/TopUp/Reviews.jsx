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
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


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

export default function TopUp() {
  const classes = useStyles();
  // const { classes } = this.props;

  return (
  <DashboardLayout title="TopUp">
  <div className={classes.root}>
          <Grid container justify="center"  alignItems="center" spacing={4}>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Card className={classes.card}>
            <CardContent>
              <Typography variant="body2" color="textSecondary"component="p">
                Card Name
              </Typography>
                <Typography style={{ paddingBottom: 2 }} variant="h6"  component="h6">
                GTbank
                </Typography>
              </CardContent>
            </Card>
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="body2" color="textSecondary"component="p">
                  Card Name
                </Typography>
                  <Typography style={{ paddingBottom: 2 }} variant="h6"  component="h6">
                  FIrst Bank
                  </Typography>
                </CardContent>
            </Card>
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Card className={classes.card}>
            <CardContent>
              <Typography variant="body2" color="textSecondary"component="p">
                Card Name
              </Typography>
                <Typography style={{ paddingBottom: 2 }} variant="h6"  component="h6">
                Zenith Bank
                </Typography>
              </CardContent>
            </Card>
            </Grid>

          </Grid>
          <div style={{ paddingTop: 25 }}>
          <Link to="/"><Button  variant="contained" color="primary"> Proceed </Button></Link>
          </div>
          
        </div>
    
    </DashboardLayout>
  );
}
