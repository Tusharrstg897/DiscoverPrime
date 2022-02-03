// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Pagination from '@mui/material/Pagination';


// const Custompage = ({setPage, totalpage=10}) => {

//     const darkTheme = createTheme({
//         palette: {
//             type: "dark",
//             primary: {
//                 main: "#fff",
//             },
//         },
//     });
    
//     const handlechange = (page) => {
//         setPage(page);
//         window.scroll(0,0);
//     };


//     return (
//         <div
//             style={{
//                 width: "100%",
//                 justifyContent: "center",
//                 display: "flex",
//                 marginTop: 30,
//             }}
//         >

//             <ThemeProvider theme={darkTheme}>
//             <Pagination 
//                 count={totalpage}
//                 size='large'
//                 // color="dark"
//                 onChange={(e) => handlechange(e.target.textContent)} 
//                 variant="outlined" 
//                 shape="rounded" />
//             </ThemeProvider>
//         </div>
//     );
// };

// export default Custompage;

import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          variant="outlined" 
          shape="rounded"
        />
      </ThemeProvider>
    </div>
  );
}