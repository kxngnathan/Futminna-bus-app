// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core';
// import {CircularProgress, Grid, Typography} from '@material-ui/core';
// import { Dashboard as DashboardLayout } from 'layouts';
// import { getProducts } from 'services/channel';
// import { ProductsToolbar, ProductCard } from './components';

// import styles from './styles';

// class Channels extends Component {
//   signal = true;

//   state = {
//     isLoading: false,
//     limit: 6,
//     products: [],
//     productsTotal: 0,
//     error: null
//   };

//   async getProducts(limit) {
//     try {
//       this.setState({ isLoading: true });

//       const { products, productsTotal } = await getProducts(limit);

//       if (this.signal) {
//         this.setState({
//           isLoading: false,
//           products,
//           productsTotal,
//           limit
//         });
//       }
//     } catch (error) {
//       if (this.signal) {
//         this.setState({
//           isLoading: false,
//           error
//         });
//       }
//     }
//   }

//   componentWillMount() {
//     this.signal = true;

//     const { limit } = this.state;

//     this.getProducts(limit);
//   }

//   componentWillUnmount() {
//     this.signal = false;
//   }

//   renderProducts() {
//     const { classes } = this.props;
//     const { isLoading, products } = this.state;

//     if (isLoading) {
//       return (
//         <div className={classes.progressWrapper}>
//           <CircularProgress />
//         </div>
//       );
//     }

//     if (products.length === 0) {
//       return (
//         <Typography variant="h6">There are no products available</Typography>
//       );
//     }

//     return (
//       <Grid
//         container
//         spacing={3}
//       >
//         {products.map(product => (
//           <Grid
//             item
//             key={product.id}
//             lg={3}
//             md={6}
//             xs={12}
//           >
//             <Link to="#">
//               <ProductCard product={product} />
//             </Link>
//           </Grid>
//         ))}
//       </Grid>
//     );
//   }

//   render() {
//     const { classes } = this.props;

//     return (
//       <DashboardLayout title="Channels">
//         <div className={classes.root}>
//           <ProductsToolbar />
//           <div className={classes.content}>{this.renderProducts()}</div>
//         </div>
//       </DashboardLayout>
//     );
//   }
// }

// Channels.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(Channels);



import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Dashboard as DashboardLayout } from 'layouts';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class ScanReader extends Component {
  state = {
    result: 'No result',
    isScanned: false,
    scanSuccessfull: null,
  }

  handleScan = data => {
    if (data) {
      this.setState({
        isScanned: true,
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
         <DashboardLayout title="Scan">
            <div>
              <Grid container spacing={4}>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <div style={{ padding: 20 }}>
                    <QrReader
                      delay={300}
                      onError={this.handleError}
                      onScan={this.handleScan}
                      style={{ width: '100%' }}
                    />
                      {this.state.isScanned ? <p style={{ paddingTop: 15, fontSize: 25, color: "green"}}>Scanned</p> : <p style={{ paddingTop: 15, fontSize: 25, color: "black"}}>Scanning...</p> }
                  </div>
                </Grid>
              </Grid>
            </div>
          <div style={{ width: 100, padding: 20}}>
        <Link to="/InputAmt"><Button  variant="contained" color="primary">
        Proceed
      </Button></Link>
        </div>
    
    </DashboardLayout>
    )
  }
}

export default ScanReader;