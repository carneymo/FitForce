import { Calculate, Timer, Article } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  page: string;
}

export function FitNaviBar(props: Props) {
  let page = props.page;
  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '552px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '10px',
        marginTop: '25px',
      }}
      elevation={3}
    >
      <BottomNavigation showLabels value={page}>
        <BottomNavigationAction
          label="Calculator"
          value={'calculator'}
          icon={<Calculate />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="Timer"
          value={'timer'}
          icon={<Timer />}
          component={Link}
          to="/Timer"
        />
        <BottomNavigationAction
          label="Resources"
          value={'resources'}
          icon={<Article />}
          component={Link}
          to="/Resources"
        />
      </BottomNavigation>
    </Paper>
  );
}

export default FitNaviBar;
