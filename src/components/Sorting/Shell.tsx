import React, { useState, useEffect } from 'react';
import './Bubble.css'; // Importando o arquivo CSS
import { Button, Menu, MenuItem } from '@mui/material';

interface ShellSortProps {
    arraySize: number;
}

function Shell(props: ShellSortProps) {
    const { arraySize } = props;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
        </div>
    );
}

export default Shell;
