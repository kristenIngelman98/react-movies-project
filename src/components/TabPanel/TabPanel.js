import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MovieTab from '../MovieTab/MovieTab';
import TVTab from '../TVTab/TVTab';
import DisplayList from './DisplayList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginLeft: '10px',
    marginRight: '10px'
  },

}));

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const results = props.displayResults;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Movies" />
          <Tab label="Search Results" />
          <Tab label="Tv Shows" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} style={{marginLeft: '10px', marginRight: '10px'}}>
          <MovieTab />
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* <DisplayList displayResults={props.displayResults} /> */}
          {
          (results.length === 0) 
          ? <div style={{textAlign: 'center'}}>Please initiate a search</div>
          : <DisplayList displayResults={props.displayResults} /> 
          }
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <TVTab />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
