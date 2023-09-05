import React, { useState, useEffect } from 'react';
import './Bubble.css'; // Importando o arquivo CSS
import { Button, Grid, Menu, MenuItem } from '@mui/material';

interface ShellSortProps {
    arraySize: number;
}


function Shell(props: ShellSortProps) {
    const { arraySize } = props;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    
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
    const [sortingIndices, setSortingIndices] = useState<number[]>([]);

    useEffect(() => {
        setRandomArray(Array.from({ length: arraySize }, () => getRandomNumber(10, 100)));
    }, [arraySize]);

    const shellSort = async (arr: number[], delay: number) => {

        const n = arr.length;
        let gap = Math.floor(n / 2);

        while (gap > 0) {
            for (let i = gap; i < n; i++) {
                const temp = arr[i];
                let j = i;

                while (j >= gap && arr[j - gap] > temp) {
                    arr[j] = arr[j - gap];
                    setSortingIndices([j, j - gap]);
                    await sleep(delay);
                    j -= gap;
                }

                arr[j] = temp;
                setRandomArray([...arr]);
                setSortingIndices([]);
            }

            gap = Math.floor(gap / 2);
        }
    };

    const sleep = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    const handleSortClick = async () => {
        const copyArray = [...randomArray];
        await shellSort(copyArray, animationSpeed);
    };

    const handleSpeedChange = (speed: number) => {
        setAnimationSpeed(speed);
    };

    return (
        <div>
            <h2>Array gerado com tamanho {arraySize}:</h2>
            <div className="bar-container">
                {randomArray.map((value, index) => (
                    <div
                        key={index}
                        className={`bar ${sortingIndices.includes(index) ? 'sorting' : ''} ${index === sortingIndices[0] ? 'comparing' : ''} ${index === sortingIndices[1] ? 'swapping' : ''}`}
                        style={{ height: `${value}px` }}
                    >
                        <span className="bar-number">{value}</span>
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
                            <h1>Sobre o Metodo</h1>
                            <text>
                            O Shell Sort, um algoritmo de ordenação amplamente estudado na área da ciência da computação, apresenta uma interessante história de desenvolvimento e 
                            evolução ao longo dos anos. O método de ordenação Shell Sort emprega uma estratégia de "comparação e troca" e pode ser aplicado a vários vetores a serem 
                            ordenados. Embora seja um dos métodos mais antigos e simples de ordenação, o Shell Sort opera comparando cada elemento da lista com o elemento subsequente,
                            realizando trocas quando necessário. Esse processo se repete até que todas as posições da lista tenham sido analisadas, fazendo com que os valores maiores
                             se desloquem para o final da lista, enquanto os menores migram para o início.
                            <br/>
                            </text>
                            <br/>
                            <text>
                            É importante ressaltar que quando o Shell Sort é considerado o Melhor Caso (ou seja, quando os elementos do vetor já estão ordenados), a complexidade 
                            do algoritmo é O(n). Já no Pior Caso (quando os elementos do vetor estão na ordem reversa), a melhor complexidade conhecida é: O(n log² n). 
                            <br/>
                            </text>
                        </Grid>
                        <Grid alignItems="flex-start" item xs={4}>
                            <h1>Pior caso Possivel</h1>
                            <text>complexidade pior caso:  O(n log² n).</text><br/>
                            <text>complexidade caso médio: O(n log² n)/2</text><br/>
                            <text>complexidade melhor caso: O(n log² n)</text><br/>
                            <text>complexidade de espaços pior caso: O(n)</text><br/>
                        </Grid>
                    </Grid>
        </div>
    );
}

export default Shell;
