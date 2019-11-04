import React, { Component } from 'views/InputAmt/components/ProductCard/node_modules/react';

// Externals
import PropTypes from 'views/InputAmt/components/ProductCard/node_modules/prop-types';
import classNames from 'views/InputAmt/components/ProductCard/node_modules/classnames';
import {Button, withStyles} from 'views/InputAmt/components/ProductCard/node_modules/@material-ui/core';
import { Typography, Divider } from 'views/InputAmt/components/ProductCard/node_modules/@material-ui/core';
import { Paper } from 'views/InputAmt/components/ProductCard/node_modules/components';

import styles from './styles';

class ProductCard extends Component {
  render() {
    const { classes, className, product } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Paper className={rootClassName}>
        <div className={classes.imageWrapper}>
          <img
            alt="Product"
            className={classes.image}
            src={product.imageUrl}
          />
        </div>
        <div className={classes.details}>
          <Typography
            className={classes.title}
            variant="h4"
          >
            {product.title}
          </Typography>
          <Typography
            className={classes.description}
            variant="body1"
          >
            {product.description}
          </Typography>
        </div>
        <Divider />
        <div className={classes.stats}>
          <Button
            className={classes.loginButton}
            color="primary"
            variant="contained"
          >
            Login
          </Button>
        </div>
      </Paper>
    );
  }
}

ProductCard.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCard);
