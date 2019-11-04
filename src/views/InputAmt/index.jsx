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
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

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

class InputAmt extends Component {
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <DashboardLayout title="">
        <div className={classes.root}>
          <Grid style={{ paddingTop: 80, justify: 'center' }} container spacing={4}>
            <Grid item md={7} xs={12}>
            <Card className={classes.card}>
      <CardContent>
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
        <div>
            <Grid container direction="row" justify="space-between"  alignItems="center">

            <Grid item lg={4} sm={4}>
            <form className={classes.container} noValidate autoComplete="off">
        <TextField
          type="password"
          id="outlined-basic"
          className={classes.textField}
          label="Input Pin"
          margin="normal"
          placeholder="only digits"
          variant="outlined"
        />      
    </form>
    </Grid>
    <Grid  item lg={4} sm={4}>
    <Link to="/Reciept"><Button style={{padding: 15}} variant="contained" color="primary" className={classes.button}>
        Pay
      </Button></Link>
            </Grid>

            </Grid>
        </div>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}


export default withStyles(styles)(InputAmt);
