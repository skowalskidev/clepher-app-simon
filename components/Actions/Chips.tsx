'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { SvgIcon } from '../Icons/SvgIcon';


const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default function Chips() {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Love', icon: <SvgIcon path="/images/icons/fb-reactions/love.svg" /> },
        { key: 1, label: 'Haha', icon: <SvgIcon path="/images/icons/fb-reactions/haha.svg" /> },
        { key: 2, label: 'Wow', icon: <SvgIcon path="/images/icons/fb-reactions/wow.svg" /> },
        { key: 3, label: 'Sad', icon: <SvgIcon path="/images/icons/fb-reactions/sad.svg" /> },
        { key: 4, label: 'Angry', icon: <SvgIcon path="/images/icons/fb-reactions/angry.svg" /> },
        { key: 5, label: 'Like', icon: <SvgIcon path="/images/icons/fb-reactions/like.svg" /> },
    ]);

    const handleDelete = (chipToDelete: any) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <ul className="flex justify-center flex-wrap list-none p-0.5 m-0">
            {chipData.map((data) => {
                return (
                    <ListItem key={data.key}>
                        <Chip
                            icon={<div className='w-6 h-6'>{data.icon}</div>}
                            label={data.label}
                            onDelete={handleDelete(data)}
                        />
                    </ListItem>
                );
            })}
        </ul>
    );
}