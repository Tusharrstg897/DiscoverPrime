import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';

import { useHistory } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if(value===0){
      history.push("/");
    }
    else if(value===1){
      history.push("/movie");
    }
    else if(value===2){
      history.push("/series");
    }
  }, [value, history]);

  return (
    <Box sx={{ 
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 100,
        fontSize: '20vw'
        // backgroundColor: '#000000' ?(not worked),
    }}>
      <BottomNavigation
      style={{backgroundColor: '#000000'}}

        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{color: "white"}} label="Trending" icon={<LocalFireDepartmentIcon />} />
        <BottomNavigationAction style={{color: "white"}} label="Movies" icon={<MovieCreationIcon />} />
        <BottomNavigationAction style={{color: "white"}} label="TV Series" icon={<TvIcon />} />
      </BottomNavigation>
    </Box>
  );
}
