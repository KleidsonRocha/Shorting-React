import { Grid, Stack, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from './components/core/Navbar'
import { Page } from './types/page'
import Footer from './components/core/Footer'
import Bubble from './components/Sorting/Bubble';
import Shell from './components/Sorting/Shell'


/*
quando escrevi esse codigo só eu e deus sabia 
agora só Deus sabe
boa sorte
*/

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
                <>
                    <Grid container spacing={4}>
                        <Grid item xs={8} >
                            <h1>Escolha do Assunto</h1>                            
                            <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum, neque at ornare mattis, nunc nisl scelerisque sapien, id mollis augue odio 
                                et elit. Cras tempus erat in consectetur feugiat. Donec tellus orci, tincidunt eu elit ac, aliquet iaculis enim. Proin venenatis ante ac neque 
                                vestibulum finibus. Praesent a sapien ornare, tempus lacus eget, feugiat leo. Nulla sit amet feugiat dui, lacinia condimentum tellus. Nunc justo 
                                enim, viverra a semper blandit, auctor quis dolor. Vivamus quis dignissim nibh. Maecenas congue purus a mauris tincidunt tempus. Mauris ultricies, 
                                nulla ac ultricies ultrices, risus augue elementum augue, ut venenatis eros justo at est. Nullam sit amet malesuada ligula, at vestibulum arcu. 
                                Etiam viverra sem lacus, ut semper orci tincidunt ac. Pellentesque facilisis metus elit, id lobortis libero lacinia ut.<br/>

                            </text>
                            <br/>
                            <text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum, neque at ornare mattis, nunc nisl scelerisque sapien, id mollis augue odio 
                                et elit. Cras tempus erat in consectetur feugiat. Donec tellus orci, tincidunt eu elit ac, aliquet iaculis enim. Proin venenatis ante ac neque 
                                vestibulum finibus. Praesent a sapien ornare, tempus lacus eget, feugiat leo. Nulla sit amet feugiat dui, lacinia condimentum tellus. Nunc justo 
                                enim, viverra a semper blandit, auctor quis dolor. Vivamus quis dignissim nibh. Maecenas congue purus a mauris tincidunt tempus. Mauris ultricies, 
                                nulla ac ultricies ultrices, risus augue elementum augue, ut venenatis eros justo at est. Nullam sit amet malesuada ligula, at vestibulum arcu. 
                                Etiam viverra sem lacus, ut semper orci tincidunt ac. Pellentesque facilisis metus elit, id lobortis libero lacinia ut.
                                
                            </text>
                        </Grid>
                        <Grid alignItems="flex-start" item xs={4}>
                            <h1>Participantes</h1>
                            <text>Kleidson (Progamacao do Site)</text><br />
                            <text>Matheus (Pesquisa Bubble)</text><br />
                            <text>Luis (Pesquisa Shell)</text><br />
                        </Grid>
                    </Grid>
                    <Footer />
                </>
            )}
            { page === 'bubble' && (
                <>

                    <Bubble arraySize={arraySize} />
                    <Footer />

                </>
            )}
            { page === 'shell' && (
                 <>
                 <Shell arraySize={arraySize} />
                 <Footer />

             </>
            )}
        </>
    );
}

export default App;
