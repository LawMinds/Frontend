import { useState } from 'react'
import Ex  from './ex';
import  ChatInputBox  from "./SearchBar";
import './App.css'
import Sidebar from './Sidebar'
import { Box, Paper } from '@mui/material';
function App() {
 
  const handleSendMessage = (message) => {
    console.log('Sending message:', message);
    // Add your message sending logic here
  };
  return (
    <>
    <Paper sx={{display:'flex'}}>
        <Sidebar/>
     {/* <Ex/> */}
     <Paper sx={{ width:  '100%', height:'100vh', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{my:'auto' }}>
          <ChatInputBox onSendMessage={handleSendMessage} />
          </Box>
        </Paper>
     </Paper>
    </>
  )
}

export default App
