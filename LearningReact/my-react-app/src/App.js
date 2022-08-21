import * as React from 'react';
import { TextField} from '@mui/material';
import {Box} from '@mui/material';
import { Button } from '@mui/material';

function App() {
  
  return (
     <Box sx={{height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <TextField 
          variant='outlined' 
          color='secondary' 
          label='Add a task' 
          sx={{width: 350}} />
        <Button variant='contained' color='secondary' sx={{width: 150, height: 56}}>Add Todo</Button> 
     </Box>
  )
}

export default App;















