import React from 'react';
import { useStyles } from './App.styles';
import SmToolbar from './components/layouts/SmToolbar/SmToolbar';
import SmDrawer from './components/layouts/SmDrawer/SmDrawer';
import SmMainContent from './components/layouts/SmMainContent/SmMainContent';



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
