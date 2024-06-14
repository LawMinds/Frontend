import  { useState } from 'react';
import { TextField, Box, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatInputBox = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '2%',
      //  margin:'1em',
        mx:'15%',
        backgroundColor: '#D0E1F9',
        borderRadius: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <TextField
        fullWidth
        multiline
        maxRows={4}
        variant="outlined"
        placeholder="Type your message..."
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        sx={{
         
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ddd',
              borderRadius:'50px', padding: '2px',
            },
            '&:hover fieldset': {
              borderColor: '#1E1F26',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#283655',
            },
          },
          '& .MuiOutlinedInput-input': {
            padding: '1%',
          },
        }}
      />
      <IconButton
        onClick={handleSend}
        color="secondary"
        sx={{
          marginLeft: '8px',
        }}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatInputBox;
