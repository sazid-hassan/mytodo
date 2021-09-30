import React from 'react';
import Typography from '@material-ui/core/Typography';

import Home from './Components/Home';

//CSS
import './Components/styles/style.css'

function App() {
  return (
    <>

      <React.Fragment>
        <Typography
          component="div"
        >
          <Home />
        </Typography>
      </React.Fragment>


    </>
  );
}

export default App;
