import React from 'react';
import SmToolbar from './components/SmToolbar';
import SmDrawer from './components/SmDrawer';
import { useStyles } from './App.styles';
import SmMainContent from './components/SmMainContent';


const App = () => {

  const themeCls = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };


  return (

    <div className={themeCls.root}>
      {/* <CssBaseline /> */}
      <SmToolbar
        themeCls={themeCls}
        open={open}
        handleDrawerOpen={handleDrawerOpen} />
      <SmDrawer
        themeCls={themeCls}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      <SmMainContent
        themeCls={themeCls}
      />
    </div>
  );
}

export default App;
