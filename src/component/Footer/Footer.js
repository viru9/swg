import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';
import BugReportTwoToneIcon from '@material-ui/icons/BugReportTwoTone';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 500,
  }
});

export default function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.value);

  return (
    <Container style={{'marginTop':'3%', 'display':'flex','justifyContent':'center'}}>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/organizations" label="Organizations" icon={<HomeWorkTwoToneIcon />} />
      <BottomNavigationAction component={Link} to="/tickets" label="Tickets" icon={<BugReportTwoToneIcon />} />
      <BottomNavigationAction component={Link} to="/users" label="Users" icon={<PeopleAltTwoToneIcon />} />
    </BottomNavigation>
    </Container>
  );
}

