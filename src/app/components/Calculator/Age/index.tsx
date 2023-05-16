import { Box, FormControl, Grid, Input, InputAdornment } from '@mui/material';
import React, { memo, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';

interface Props {
  updateAge: (age: number | string) => void;
}

export const Age = memo((props: Props) => {
  const [age, setAge] = useState('18');

  const ageCheck = event => {
    const inputAge = event.target.value.trim();
    const parsedAge = parseInt(inputAge, 10);

    if (isNaN(parsedAge)) {
      setAge('18');
      props.updateAge('18');
    } else if (parsedAge < 18) {
      setAge('18');
      props.updateAge('18');
    } else {
      setAge(inputAge);
      props.updateAge(inputAge);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = useCallback(debounce(ageCheck, 300), []);

  const handleAgeChange = event => {
    let age = event.target.value;
    if (age.length > 2) {
      return;
    }
    // Check if the input has non-numeric characters, for example "1a" should not be allowed
    // Use regular expressions to check if the input is a number
    if (!/^\d+$/.test(age)) {
      return;
    }
    if (age.length > 0 && isNaN(parseInt(age, 10))) {
      return;
    }

    setAge(age);
    debouncedChangeHandler(event);
  };

  return (
    <Grid
      xs={4}
      item
      sx={{ marginTop: 1, textAlign: 'center' }}
      alignContent={'center'}
    >
      <Box>
        <FormControl size="small" sx={{ maxWidth: 120 }}>
          <Input
            id="standard-adornment-weight"
            endAdornment={
              <InputAdornment position="end">yrs old</InputAdornment>
            }
            value={age}
            onChange={handleAgeChange}
            onBlur={debouncedChangeHandler}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            size="small"
          />
        </FormControl>
      </Box>
    </Grid>
  );
});
