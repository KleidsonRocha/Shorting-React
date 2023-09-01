import React, { useState, useEffect } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import './Bubble.css'; // Importando o arquivo CSS;


interface BubbleProps {
    arraySize: number;
}

function Bubble(props: BubbleProps) {
    const { arraySize } = props;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
            <h2>Array gerado com tamanho {arraySize}:</h2>
            <div className="bar-container">
                {randomArray.map((value, index) => (
                    <div
                        key={index}
                        className={`bar ${index === sortingIndex ? 'sorting' : ''}`}
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

export default Bubble;
