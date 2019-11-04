// import React, { Component } from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
// import {LinearProgress, withStyles} from '@material-ui/core';
// import { Typography } from '@material-ui/core';
// import { ArrowDownward as ArrowDownwardIcon } from '@material-ui/icons';
// import { Paper } from 'components';
// import BookingIcon from './booking_icon.png'
// import styles from './styles';

// class BookingCard extends Component {
//   render() {
//     const { classes, className, ...rest } = this.props;

//     const rootClassName = classNames(classes.root, className);

//     return (
//       <Paper
//         {...rest}
//         className={rootClassName}
//       >
//         <div className={classes.content}>
//           <div className={classes.details}>
//             <Typography
//               className={classes.title}
//               variant="body2"
//             >
//               Booking.com
//             </Typography>
//             <Typography
//               className={classes.value}
//               variant="h3"
//             >
//               7.3
//             </Typography>
//           </div>
//           <div className={classes.iconWrapper}>
//             <img alt="Booking.com"  src={BookingIcon}/>
//           </div>
//         </div>
//         <div>
//           <div className={classes.progressWrapper}>
//             <Typography variant="body1">Staff: %89</Typography>
//             <LinearProgress
//               value={89}
//               variant="determinate"
//             />
//           </div>
//           <div className={classes.progressWrapper}>
//             <Typography variant="body1">Facilities: %30</Typography>
//             <LinearProgress
//               value={30}
//               variant="determinate"
//             />
//           </div>
//           <div className={classes.progressWrapper}>
//             <Typography variant="body1">Cleanliness: %64</Typography>
//             <LinearProgress
//               value={64}
//               variant="determinate"
//             />
//           </div>
//         </div>
//         <div className={classes.footer}>
//           <Typography
//             className={classes.difference}
//             variant="body2"
//           >
//             <ArrowDownwardIcon />
//             12%
//           </Typography>
//           <Typography
//             className={classes.caption}
//             variant="caption"
//           >
//             Since last month
//           </Typography>
//         </div>
//       </Paper>
//     );
//   }
// }

// BookingCard.propTypes = {
//   className: PropTypes.string,
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(BookingCard);


import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {LinearProgress, withStyles} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { ArrowDownward as ArrowDownwardIcon } from '@material-ui/icons';
import { Paper } from 'components';
import BookingIcon from './booking_icon.png'
import styles from './styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

class BookingCard extends Component {
  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Paper
        {...rest}
        className={rootClassName}
      >
        <div style={{ paddingTop: 30 }} className={classes.content}>
           <Grid container spacing={4}>

              <Grid item xs={9} sm={9}>
                <div className={classes.details}>
                  <Typography
                    
                    variant="h6"
                  >
                    Account Balance
                  </Typography>
                  <Typography
                    className={classes.value}
                    variant="h1"
                  >
                    1000.00
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={3} sm={3}>
                <Link to="/TopUp"><Fab color="primary" aria-label="add" className={classes.fab}>
                  <AddIcon />
                </Fab></Link>
              </Grid>
              </Grid>

          
        </div>
      </Paper>
    );
  }
}

BookingCard.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookingCard);
