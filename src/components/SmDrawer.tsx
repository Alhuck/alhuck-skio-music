import { Drawer, Divider, List, IconButton } from '@material-ui/core';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { MenuItems } from './MenuItems';


const SmDrawer = (props: any) => {


    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(props.themeCls.drawerPaper, !props.open && props.themeCls.drawerPaperClose),
            }}
            open={props.open}
        >
            <div className={props.themeCls.toolbarIcon}>
                <IconButton onClick={props.handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>{MenuItems}</List>
            <Divider />
        </Drawer>
    );
}

export default SmDrawer;