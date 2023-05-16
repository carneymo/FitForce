import {
  Card,
  Container,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import React, { memo } from 'react';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import { MileRunInput } from './MileRunInput';
import { HamrInput } from './HamrInput';

interface Props {
  age: number | string;
  gender: string;
}

export const Cardio = memo((props: Props) => {
  let age = props.age;
  let gender = props.gender;

  const [cardioType, setCardioType] = React.useState('run');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newCardioType: string,
  ) => {
    setCardioType(newCardioType);
  };

  return (
    <Container
      sx={{
        paddingTop: 3,
        height: '100vh',
      }}
    >
      <Card elevation={3} sx={{ padding: 2, fontSize: '10pt' }}>
        <Grid container spacing={2}>
          <Grid item xs={2} sm={2}>
            <ToggleButtonGroup
              orientation="vertical"
              value={cardioType}
              exclusive
              onChange={handleChange}
              sx={{ textAlign: 'left' }}
            >
              <ToggleButton value="run" aria-label="run">
                <DirectionsRunIcon />
              </ToggleButton>
              <ToggleButton value="hamr" aria-label="hamr">
                <TransferWithinAStationIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={10} sm={10}>
            {cardioType === 'run' ? (
              <MileRunInput age={age} gender={gender} />
            ) : (
              <HamrInput age={age} gender={gender} />
            )}
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
});
