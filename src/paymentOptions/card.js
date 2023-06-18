import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Card Number"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="CVV"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-number"
          label="Expiry Month [mm/yy]"
          type="numeric"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
    </Box>
  );
}