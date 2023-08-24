import {AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem} from "@mui/material"
import SortSharp from '@mui/icons-material/SortSharp'
import { useState } from "react"
import { Page } from "../../types/page"

type Props = {
    setArraySize: (newValue: number) => void
    setPage: (newValue: Page) => void
}

export const NavBar = ({
    setArraySize,
    setPage
}: Props) => {

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    };

    const handleClose = (newArraySize?: number) => {
        if(newArraySize) setArraySize(newArraySize)
        setAnchorEl(null)
    }

    return (
        <AppBar position='static' >
            <Toolbar >
                <IconButton size='large' edge='start' color='inherit' aria-label="logo">
                    <SortSharp />
                </IconButton>
                <Typography onClick={() => setPage('home')} variant='h4' component='div' sx={{flexGrow: 1 }}>
                    Sorting PI 2
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button
                        color='inherit'
                        onClick={() => setPage('bubble')}
                    >
                        Bubble Sort
                    </Button>
                    <Button
                        color='inherit'
                        onClick={() => setPage('shell')}
                    >
                        Shell Sort
                    </Button>
                    
                    <Button 
                        color='inherit'
                        onClick={handleClick}
                    >
                        Tamanho 
                    </Button>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => handleClose()}
                    >
                        <MenuItem onClick={() => handleClose(5)}>Tamanho de array 5</MenuItem>
                        <MenuItem onClick={() => handleClose(10)}>Tamanho de array 10</MenuItem>
                        <MenuItem onClick={() => handleClose(50)}>Tamanho de array 15</MenuItem>
                    </Menu>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}