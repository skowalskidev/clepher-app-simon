import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { BsThreeDots } from "react-icons/bs";

interface Props {
    menuItems: React.ReactElement[];
}

export default function MenuPopupState({ menuItems }: Props) {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    {/* <Button variant="contained" {...bindTrigger(popupState)}>
                        Dashboard
                    </Button> */}
                    <div {...bindTrigger(popupState)}>
                        <BsThreeDots className='text-2xl' />
                    </div>
                    <Menu {...bindMenu(popupState)}>
                        {menuItems.map((menuItem) => (
                            <MenuItem key={menuItem.key} onClick={popupState.close}>{menuItem}</MenuItem>
                        ))}
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
