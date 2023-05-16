import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

function Logo() {
  return (
    <AppBar
      style={{
        position: 'static',
        top: 0,
        left: 0,
        right: 0,
        width: '552px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '10px',
        marginBottom: '20px',
      }}
    >
      <Container
        style={{
          backgroundColor: '#232323',
          textAlign: 'center',
        }}
      >
        <img
          src="/logo.png"
          alt="logo"
          style={{ height: '75px', marginLeft: '20px' }}
        />
      </Container>
    </AppBar>
  );
}

export default Logo;
