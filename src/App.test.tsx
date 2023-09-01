import { Grid, Stack, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from './components/core/Navbar'
import { Page } from './types/page'


function App() {
    const [arraySize, setArraySize] = useState<number>(10)
    const [page, setPage] = useState<Page>('home')

    useEffect(() => {
        console.log('array size mudou ', arraySize)
    }, [arraySize])

    return (
        <>
            <NavBar 
                setArraySize={setArraySize}
                setPage={setPage}
            />

            { page === 'home' && (
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <h1>Escolha do Assunto</h1>
                       <text>kleidson</text>
                    </Grid>
                    <Grid alignItems="flex-start" item xs={4}>
                        <h1>Participantes</h1>
                        <text>Kleidson (Progamacaoo e Pesquisa)</text><br />
                        <text>Matheus (Pesquisa)</text><br />
                        <text>Luis (Design)</text><br />
                    </Grid>
                </Grid>
            )}
            { page === 'bubble' && (
                <div>bubble</div>
            )}
            { page === 'shell' && (
                <div>shell</div>
            )}
        </>
    );
}

export default App;