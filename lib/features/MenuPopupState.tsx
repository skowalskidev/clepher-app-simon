import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { BsThreeDots } from "react-icons/bs";

export default function MenuPopupState({ menuItems }: any) {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    {/* <Button variant="contained" {...bindTrigger(popupState)}>
                        Dashboard
                    </Button> */}
                    <BsThreeDots className='text-2xl w-full' {...bindTrigger(popupState)} />
                    <Menu {...bindMenu(popupState)}>
                        {menuItems.map((menuItem: React.ReactNode) => (<MenuItem onClick={popupState.close}>{menuItem}</MenuItem>))}
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
