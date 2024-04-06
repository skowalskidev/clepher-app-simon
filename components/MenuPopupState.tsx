import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { BsThreeDots } from "react-icons/bs";

export interface DropdownMenuItem {
    component: React.ReactElement;
    disabled?: boolean;
    onClick?: () => void,
}

interface Props {
    menuItems: DropdownMenuItem[];
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
                            <MenuItem onClickCapture={menuItem.onClick} disabled={menuItem.disabled} key={menuItem.component.key} onClick={popupState.close}>{menuItem.component}</MenuItem>
                        ))}
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
