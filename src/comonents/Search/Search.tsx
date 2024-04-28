import React, { useState } from 'react';
import { Box, InputBase, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { searchBoxStyles } from '../../styles';

type SearchAndFilterProps = {
  onSearch: (searchTerm: string) => void; // функция, вызываемая при изменении поискового запроса
};

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === 'Enter') {
    onSearch(searchTerm);
  }
};

  return (
    <Paper sx={searchBoxStyles}>
      <Box sx={{ padding: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}>
        <IconButton sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Поиск ..."
          inputProps={{ 'aria-label': 'поиск' }}
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
        {/* <IconButton sx={{ paddingRight: '20px' }} aria-label="filter"> */}
        {/*   <FilterListIcon /> */}
        {/* </IconButton> */}
      </Box>
    </Paper>
  );
};

export default SearchAndFilter;

