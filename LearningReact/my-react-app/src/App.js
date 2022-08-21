import * as React from 'react';
import { Card, CardContent, TextField, Typography} from '@mui/material';
import {Box} from '@mui/material';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  
  return (
     <Box sx={{height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
        </Box>
          <TextField 
          variant='outlined' 
          color='secondary' 
          label='Add a task' 
          sx={{width: 350}} />
        <Button variant='contained' color='secondary' sx={{width: 150, height: 56}}>Add Todo</Button> 
        <Card>
          <CardContent>
            <Typography variant='body'>Lorem ipsum sit dolor amet</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant='body'>Lorem ipsum sit dolor amet</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant='h4'>Lorem ipsum sit dolor amet</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant='h1'>Lorem ipsum sit dolor amet</Typography>
          </CardContent>
        </Card>
     </Box>
  )
}

export default App;















