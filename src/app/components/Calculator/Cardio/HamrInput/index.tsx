import {
  Box,
  Chip,
  Grid,
  TextField,
  Typography,
  debounce,
} from '@mui/material';
import * as React from 'react';
import {
  calculateHAMRMinimum,
  calculateHamrPoints,
  maxShuttlePerLevel,
} from '../../utils/scorecharts';
import { Star } from '@mui/icons-material';
import RecommendIcon from '@mui/icons-material/Recommend';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

interface Props {
  age: number | string;
  gender: string;
}

export function HamrInput(props: Props) {
  let age = props.age;
  let gender = props.gender;

  const [hamrlevel, setHamrLevel] = React.useState('');
  const [hamrshuttle, setHamrShuttle] = React.useState('');

  const handleLevelChange = event => {
    const inputLevel = event.target.value.trim();
    setHamrLevel(inputLevel);
  };

  const handleShuttleChange = event => {
    const inputShuttle = event.target.value.trim();
    const parsedShuttle = parseInt(inputShuttle, 10);

    if (hamrlevel && maxShuttlePerLevel(Number(hamrlevel)) < parsedShuttle) {
      setHamrShuttle(maxShuttlePerLevel(Number(hamrlevel)).toString());
    } else {
      setHamrShuttle(inputShuttle);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceLevelChangeHandler = React.useCallback(
    debounce(handleLevelChange, 300),
    [],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedShuttleChangeHandler = React.useCallback(
    debounce(handleShuttleChange, 300),
    [],
  );

  let calcPoints = '--';
  if (!(hamrlevel === '' && hamrshuttle === '')) {
    calcPoints = calculateHamrPoints(
      parseInt(hamrlevel),
      parseInt(hamrshuttle),
      age,
      gender.toUpperCase(),
    ).toString();
  }

  let pointsChip, textColor;
  if (calcPoints === '--') {
    pointsChip = null;
    textColor = 'text.disabled';
  } else if (calcPoints === '0') {
    pointsChip = (
      <Chip
        icon={<WarningAmberIcon style={{ color: 'white' }} />}
        label="Unsatisfactory"
        color="error"
        size="small"
      />
    );
    textColor = 'error.main';
  } else if (calcPoints === '60') {
    pointsChip = (
      <Chip
        icon={<Star style={{ color: 'gold' }} />}
        label="Excellent"
        color="success"
        size="small"
      />
    );
    textColor = 'success.main';
  } else {
    pointsChip = (
      <Chip
        icon={<RecommendIcon style={{ color: 'white' }} />}
        label="Satisfactory"
        color="primary"
        size="small"
      />
    );
    textColor = 'primary.main';
  }

  const [minLevel, minShuttle] = calculateHAMRMinimum(age, gender);

  return (
    <Box sx={{ flex: 'flex' }}>
      <strong>HAMR Run (Pacer Test)</strong>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} sx={{ marginTop: 1 }}>
          <TextField
            id="hamr-level"
            label="Level"
            variant="outlined"
            margin="dense"
            size="small"
            value={hamrlevel}
            onChange={handleLevelChange}
            onBlur={debounceLevelChangeHandler}
            sx={{ width: '75px', marginRight: '10px' }}
          />
          <TextField
            id="hamr-shuttle"
            label="Shuttle"
            variant="outlined"
            margin="dense"
            size="small"
            value={hamrshuttle}
            onChange={handleShuttleChange}
            onBlur={debouncedShuttleChangeHandler}
            sx={{ width: '80px' }}
          />
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            Minimum: Level {minLevel}, Shuttle {minShuttle}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
          <Typography
            display="inline"
            color={textColor}
            sx={{ fontSize: '20pt', fontWeight: 'bold' }}
          >
            {calcPoints}
          </Typography>{' '}
          <Typography
            display="inline"
            sx={{ fontSize: '20pt', fontWeight: 'bold' }}
          >
            / 60
          </Typography>
          <br />
          {pointsChip}
        </Grid>
      </Grid>
    </Box>
  );
}
