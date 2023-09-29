import React, { useState, useEffect } from 'react';
import { Button, Grid, Menu, MenuItem } from '@mui/material';
import './Bubble.css'; // Importando o arquivo CSS;

/*
quando escrevi esse codigo só eu e deus sabia 
agora só deus sabe
boa sorte
*/

interface BubbleProps {
    arraySize: number;
}


function Bubble(props: BubbleProps) {
    const { arraySize } = props;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [executionTime, setExecutionTime] = useState<number | null>(null);
    
    const generateRandomArray = () => {
        const newArray = Array.from({ length: arraySize }, () => getRandomNumber(10, 100));
        setRandomArray(newArray);
    };
    
    const getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    
    const [randomArray, setRandomArray] = useState<number[]>(() => {
        return Array.from({ length: arraySize }, () => getRandomNumber(10, 100));
    });
    
    const [animationSpeed, setAnimationSpeed] = useState<number>(100);
    const [sortingIndex, setSortingIndex] = useState<number | null>(null);
    
    useEffect(() => {
        setRandomArray(Array.from({ length: arraySize }, () => getRandomNumber(10, 100)));
    }, [arraySize]);
    
    const bubbleSort = async (arr: number[], delay: number) => {
        const start = performance.now(); // Marca o tempo de início
    
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                setSortingIndex(j);
                await sleep(delay);
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    setRandomArray([...arr]);
                }
            }
        }
        
        setSortingIndex(null);
    
        const end = performance.now(); // Marca o tempo de fim
        const executionTime = end - start; // Calcula o tempo de execução em milissegundos
        setExecutionTime(executionTime); // Define o tempo de execução no estado
    };

    const swap = (arr: number[], i: number, j: number) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    const sleep = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    const handleSortClick = async () => {
        const copyArray = [...randomArray];
        await bubbleSort(copyArray, animationSpeed);
    };

    const handleSpeedChange = (speed: number) => {
        setAnimationSpeed(speed);
    };

    return (
        <div >
            <Grid container spacing={4} padding={2}>
                <Grid item xs={8} >
                    <h2>Array gerado com tamanho {arraySize}:</h2>
                </Grid>
                <Grid alignItems="flex-start" item xs={4}>
                    <h2>Tempo de Ordenação: {executionTime ? (executionTime / 1000).toFixed(2) + ' segundos' : 'Aguardando execução'}</h2>
                </Grid>
            </Grid>
            <div className="bar-container">
                {randomArray.map((value, index) => (
                    <div
                        key={index}
                        className={`bar ${index === sortingIndex ? 'sorting' : ''}`}
                        style={{ height: `${value}px` }}
                    >
                        <span className="bar-number ">{value}</span>
                    </div>
                ))}
            </div>
            <div className="bar-alinning">
             <Button onClick={generateRandomArray} variant="contained">Aleatorizar</Button>
             <Button onClick={handleSortClick} variant="contained">Ordenar</Button>
                <div>
                    <Button
                        aria-controls="speed-menu"
                        aria-haspopup="true"
                        onClick={(event) => setAnchorEl(event.currentTarget)}
                        variant="contained"
                    >
                        Velocidade
                    </Button>
                    <Menu
                        id="speed-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                    >
                        <MenuItem onClick={() => handleSpeedChange(400)}>Lento</MenuItem>
                        <MenuItem onClick={() => handleSpeedChange(300)}>Médio</MenuItem>
                        <MenuItem onClick={() => handleSpeedChange(200)}>Rápido</MenuItem>
                    </Menu>
                </div>       
            </div>
                <Grid container spacing={4} padding={2}>
                        <Grid item xs={8} >
                            <h1>Sobre o Método</h1>
                            <text>
                            Segundo Oliveira(2002) o método de ordenação bubble sort utiliza de uma estratégia de “comparação e troca”, podendo ser aplicada em vários vetores
                            a serem ordenados. Sendo o tipo mais antigo e simples usado para ordenações, o Bubble Sort funciona comparando cada um dos itens da lista com o item
                            ao lado dele, efetuando a troca se o valor da posição que está sendo analisada for maior que o da posição ao lado. Esse algoritmo repete o processo 
                            até passar por todas as posições da lista, fazendo com que os valores maiores “flutuem” para o final da lista, enquanto os menores “afundem” para o 
                            ínicio.<br/>
                            </text>
                            <br/>
                            <text>
                            O método Bubble Sort possui o pior caso medido por O(n²), onde n é o número de elementos do vetor. Essa equação representa que o tempo de execução do 
                            algoritmo cresce de maneira proporcional ao quadrado do número de elementos  do vetor. Algoritmos que possuem a complexidade “O(n²) são considerados 
                            ineficientes para vetores muito grandes, pois o tempo de execução é elevado rapidamente à medida que o tamanho do vetor cresce, tornando-o um algoritmo 
                            pouco prático para situações em que eficiência é necessária.<br/>
                            </text>
                        </Grid>
                        <Grid alignItems="flex-start" item xs={4}>
                            <h1>Píor Caso Possível</h1>
                            <text>complexidade pior caso: O(n^{2})</text><br/>
                            <text>complexidade caso médio: O(n^{2})</text><br/>
                            <text>complexidade melhor caso: O(n)</text><br/>
                            <text>complexidade de espaços pior caso: O(1)</text><br/>
                        </Grid>
                    </Grid>
                    
        </div>
    );
}

export default Bubble;
