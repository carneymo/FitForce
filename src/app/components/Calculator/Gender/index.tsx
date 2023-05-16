import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { memo, useState } from 'react';

interface Props {
  updateGender: (gender: string) => void;
}

export const Gender = memo((props: Props) => {
  const [gender, setGender] = useState<string>('M'); // State to store the selected gender

  const handleGenderChange = (
    event: React.MouseEvent<HTMLElement>,
    newGender: string | null,
  ) => {
    if (newGender) {
      setGender(newGender); // Update the selected gender in the state
      props.updateGender(newGender); // Call the updateGender function from props with the new gender value
    }
  };

  return (
    <Grid
      xs={4}
      item
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={gender}
        onChange={handleGenderChange}
        aria-label="Gender"
        size="small"
      >
        <ToggleButton value="M">Male</ToggleButton>
        <ToggleButton value="F">Female</ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
});
