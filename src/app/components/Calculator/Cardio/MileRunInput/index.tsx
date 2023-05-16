import { Star } from '@mui/icons-material';
import {
  Box,
  Chip,
  Grid,
  TextField,
  Typography,
  debounce,
} from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import RecommendIcon from '@mui/icons-material/Recommend';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { calculateRunPoints } from 'app/components/Calculator/utils/scorecharts';

interface Props {
  age: number | string;
  gender: string;
}

export function MileRunInput(props: Props) {
  let age = props.age;
  let gender = props.gender;

  // Minutes can be a number or a string
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const minutesCheck = event => {
    const inputMinutes = event.target.value.trim();
    const parsedMinutes = parseInt(inputMinutes, 10);

    if (isNaN(parsedMinutes) || inputMinutes.length === 0) {
      setMinutes('');
    } else {
      setMinutes(inputMinutes);
    }
  };

  const secondsCheck = event => {
    const inputSeconds = event.target.value.trim();
    const parsedSeconds = parseInt(inputSeconds, 10);
    console.log('input seconds length: ' + inputSeconds.length);

    if (isNaN(parsedSeconds) || inputSeconds.length === 0) {
      setSeconds('');
    } else if (parsedSeconds > 60) {
      setSeconds('60');
    } else {
      if (inputSeconds.length === 1) {
        setSeconds('0' + inputSeconds);
      } else {
        setSeconds(inputSeconds);
      }
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedMinutesChangeHandler = React.useCallback(
    debounce(minutesCheck, 300),
    [],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSecondsChangeHandler = React.useCallback(
    debounce(secondsCheck, 300),
    [],
  );

  const handleSecondsChange = event => {
    let seconds = event.target.value;
    if (seconds.length === 0) {
      setSeconds('');
    }
    if (seconds.length === 1) {
      setSeconds(seconds);
      return;
    }
    if (seconds.length > 2) {
      return;
    }
    if (!/^\d+$/.test(seconds)) {
      return;
    }
    if (seconds.length > 0 && isNaN(parseInt(seconds, 10))) {
      return;
    }
    setSeconds(seconds);
    debouncedSecondsChangeHandler(event);
  };

  const handleMinutesChange = event => {
    let minutes = event.target.value;

    if (minutes.length === 0) {
      setMinutes('');
    }
    if (seconds.length === 1) {
      setMinutes(minutes);
      return;
    }
    if (minutes.length > 2) {
      return '';
    }
    if (!/^\d+$/.test(minutes)) {
      return;
    }
    if (minutes.length > 0 && isNaN(parseInt(minutes, 10))) {
      return;
    }
    setMinutes(minutes);
    debouncedMinutesChangeHandler(event);
  };

  let calcPoints = '--';
  if (!(minutes === '00' && seconds === '00')) {
    calcPoints = calculateRunPoints(
      parseInt(minutes),
      parseInt(seconds),
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

  return (
    <Box sx={{ flex: 'flex' }}>
      <strong>1.5 Mile Run</strong>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} sx={{ marginTop: 1 }}>
          <TextField
            id="milerun-minutes"
            label="mm"
            variant="outlined"
            margin="dense"
            size="small"
            value={minutes}
            onChange={handleMinutesChange}
            onBlur={debouncedMinutesChangeHandler}
            sx={{ width: '75px', marginRight: '10px' }}
          />
          <TextField
            id="milerun-seconds"
            label="ss"
            variant="outlined"
            margin="dense"
            size="small"
            value={seconds}
            onChange={handleSecondsChange}
            onBlur={debouncedSecondsChangeHandler}
            sx={{ width: '75px' }}
          />
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
