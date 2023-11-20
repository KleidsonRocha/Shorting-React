import { Grid, Stack, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from './components/core/Navbar'
import { Page } from './types/page'
import Footer from './components/core/Footer'
import Bubble from './components/Sorting/Bubble';
import Shell from './components/Sorting/Shell'



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
                    <Grid container spacing={4} className='conteudo'>
                        <Grid item xs={8} >
                            <h1>Resumo</h1>                            
                                <i>
                                    O nosso projeto tem como objetivo uma abordagem envolvente dos algoritmos de ordenação Bubble Sort e Shell Sort. Através da criação de um website 
                                    interativo, pretende-se não somente exemplificar, mas também explicar de maneira visual o funcionamento destes algoritmos, facilitando a compreensão
                                    dos algoritimos.Para a construção do site usaremos as tecnologias Node.js por conta de ser uma framework bem estruturada e capaz de produzir um 
                                    servidor local para hospedar nosso servidor e a linguagem utilizada foi a TypeScript por conta de possibilitar a utilização de html e javascript 
                                    no mesmo código. Este website servirá como esqueleto central para demonstrar passo a passo para o funcinamento dos algoritmos de ordenação em foco.
                                    Através de representações visuais e feedback em tempo real, para que assim a audiência tenha a possibilidade de acompanhar de forma visual e simples
                                    o funcionamento e ordenação com ambos os algoritmos
                                </i>
                            <br/>
                            <br/>
                            <h1>Introdução</h1>  
                            <text>
                                Neste projeto, temos como objetivo apresentar um método interativo que visa elucidar e ilustrar de forma clara o funcionamento de dois dos métodos 
                                de ordenação mais renomados: o bubble sort e o shell sort. Por meio da concepção de um website interativo, nossa intenção é não apenas fornecer 
                                exemplos práticos, mas também oferecer explicações visuais abrangentes sobre o funcionamento desses algoritmos. Com essa abordagem, almejamos 
                                simplificar a compreensão dos algoritmos, tornando-os mais acessíveis a todos os interessados.
                            </text>
                            <br/>
                            <br/>
                        </Grid>
                        <Grid alignItems="flex-start" item xs={4}>
                            <h1>Participantes</h1>
                            <text>Kleidson (Progamação do Site/Correção de Bugs)</text>
                            <br/>
                            <br/>
                            <text>Matheus (Pesquisa Bubble/ Condução dos testes)</text>
                            <br/>
                            <br/>
                            <text>Luis (Pesquisa Shell/ Identidade Visual do site)</text>
                            <br/>
                            <br/>
                            <h1>Orientador</h1>
                            <text>Daniel Menin Tortelli</text>
                            <br/>
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