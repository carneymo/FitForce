import { Grid, Box, Chip } from '@mui/material';
import * as React from 'react';
import Woman from '@mui/icons-material/Woman';
import Man from '@mui/icons-material/Man';

interface Props {
  age: number | string;
  gender: string;
}

export function AgeGroup(props: Props) {
  let age = props.age;
  let gender = props.gender;

  var ageRange = '';
  if (Number(age) < 25) {
    ageRange = '18-24';
  } else if (Number(age) < 30) {
    ageRange = '25-29';
  } else if (Number(age) < 35) {
    ageRange = '30-34';
  } else if (Number(age) < 40) {
    ageRange = '35-39';
  } else if (Number(age) < 45) {
    ageRange = '40-44';
  } else if (Number(age) < 50) {
    ageRange = '45-49';
  } else if (Number(age) < 55) {
    ageRange = '50-54';
  } else if (Number(age) < 60) {
    ageRange = '55-59';
  } else if (Number(age) >= 60) {
    ageRange = '60+';
  } else {
    ageRange = '';
  }

  let genderIcons = {
    M: <Man />,
    F: <Woman />,
  };

  return (
    <Grid
      xs={4}
      item
      sx={{ marginTop: 1, textAlign: 'center' }}
      alignContent={'center'}
    >
      <Box>
        <Chip
          icon={genderIcons[gender]}
          label={'Age Group: ' + ageRange}
          size="small"
          color={gender === 'M' ? 'primary' : 'secondary'}
        />
      </Box>
    </Grid>
  );
}
