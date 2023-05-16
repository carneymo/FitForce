import React from 'react';

import { Cardio } from './Cardio';
import { Gender } from './Gender';
import { Age } from './Age';
import { Card, Container, Grid, Paper, Typography } from '@mui/material';
import { AgeGroup } from './AgeGroup';
import CalculateIcon from '@mui/icons-material/Calculate';

interface Props {}

interface State {
  age: number | string;
  gender: string;
}

class Calculator extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      age: 18,
      gender: 'M',
    };
    this.updateGender = this.updateGender.bind(this);
    this.updateAge = this.updateAge.bind(this);
  }

  componentDidMount(): void {
    console.log('Calculator Mounted');
  }

  updateGender(genderType: string) {
    this.setState({ gender: genderType });
    console.log('Updated Gender: ' + genderType);
  }

  updateAge(age: string | number) {
    this.setState({ age: age });
    console.log('Updated Age: ' + age);
  }

  render() {
    return (
      <Paper>
        <Container
          sx={{
            paddingTop: 3,
            height: '100vh',
          }}
        >
          <Card elevation={3} sx={{ padding: 2, fontSize: '10pt' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <CalculateIcon
                    color="primary"
                    style={{ marginRight: '15px' }}
                  />
                  <strong>PFT Calculator</strong>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  This calculator is used to determine your PFT score. The
                  formulas used are based on the Air Force Instruction 36-2905,
                  Fitness Program.
                </Typography>
              </Grid>
            </Grid>
          </Card>

          <Grid container rowSpacing={1} marginTop={2}>
            <Gender updateGender={this.updateGender} />
            <Age updateAge={this.updateAge} />
            <AgeGroup age={this.state.age} gender={this.state.gender} />
          </Grid>
          <Grid container spacing={2} marginTop={3} marginBottom={3}>
            <Cardio age={this.state.age} gender={this.state.gender} />
          </Grid>
        </Container>
      </Paper>
    );
  }
}

export default Calculator;
