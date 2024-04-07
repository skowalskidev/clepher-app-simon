
"use client"

import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { MdDelete, MdEdit } from "react-icons/md";
import { MdFilterListAlt } from "react-icons/md";
import TextField from '@mui/material/TextField';

interface EnhancedTableToolbarProps {
    numSelected: number;
}

export const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Post Engagement
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <MdDelete />
                    </IconButton>
                </Tooltip>
            ) : (
                <div className='flex'>
                    <TextField
                        id="outlined-search"
                        label={<span>Search...</span>}
                        type="search"
                        size="small"
                    />
                    <Tooltip title="Filter list">
                        <IconButton>
                            <MdFilterListAlt />
                        </IconButton>
                    </Tooltip>
                </div>
            )}
        </Toolbar>
    );
}