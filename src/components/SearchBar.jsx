import { Paper,IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'
const Searchbar = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!searchTerm)
      navigate(`/search/${searchTerm}`);
     setSearchTerm(''); 
  }
  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20, 
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr:{sm:5},
        '&:hover': {
          backgroundColor: '#f2f2f2',
        },
      }}
    >
    <input
      className='search-bar'
      placeholder='Search what you want to watch'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}

    />  
     <IconButton type='submit' sx={{ p: '10px', color: 'grey' }} aria-label='search'>
        <SearchIcon/>
      </IconButton>
    </Paper>
  )
}
export default Searchbar