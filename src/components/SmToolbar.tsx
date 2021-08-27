import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';

const SmToolbar = (props: any) => {


    return (

        < AppBar position="absolute" className={clsx(props.themeCls.appBar, props.open && props.themeCls.appBarShift)}>
            <Toolbar className={props.themeCls.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    className={clsx(props.themeCls.menuButton, props.open && props.themeCls.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={props.themeCls.title}>
                    SkioMusic
                </Typography>
            </Toolbar>
        </AppBar >

    );
}

export default SmToolbar;