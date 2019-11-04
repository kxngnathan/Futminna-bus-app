import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Dashboard as DashboardLayout } from 'layouts';
import { Notifications, Password } from './components';
import { createStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
});

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
})
);

class Reciept extends Component {
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <DashboardLayout title="Reciept">
        <div className={classes.root}>
          <Grid style={{ paddingTop: 80, justify: 'center' }} container spacing={4}>
            <Grid item md={7} xs={12}>
            <Card className={classes.card}>
      <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
          Transaction ID
        </Typography>
        <Typography variant="h5" component="h2">
          A129YD-230
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Account Name
        </Typography>
        <Typography variant="h5" component="h2">
          FUTMINNA
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Amount to be paid
        </Typography>
        <Typography variant="h5" component="h2">
          50.00
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Service charge
        </Typography>
        <Typography variant="h5" component="h2">
          00.10
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Total
        </Typography>
        <Typography variant="h5" component="h2">
          50.10
        </Typography>


        
      </CardContent>
      <CardActions>
        <Link to="/dashNew"><Button size="small">Go To Dashboard</Button></Link>
      </CardActions>
    </Card>
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

export default withStyles(styles)(Reciept);
