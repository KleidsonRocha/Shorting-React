import React, { useState, useEffect } from 'react';
import './Bubble.css'; // Importando o arquivo CSS

interface BubbleProps {
    arraySize: number;
}

function Bubble(props: BubbleProps) {
    const { arraySize } = props;

    const getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const [randomArray, setRandomArray] = useState<number[]>(() => {
        return Array.from({ length: arraySize }, () => getRandomNumber(10, 100));
    });

    const [animationSpeed, setAnimationSpeed] = useState<number>(100); // Velocidade inicial da animação
    const [sortingIndex, setSortingIndex] = useState<number | null>(null); // Índice sendo ordenado

    useEffect(() => {
        setRandomArray(Array.from({ length: arraySize }, () => getRandomNumber(10, 100)));
    }, [arraySize]);

    const bubbleSort = async (arr: number[], delay: number) => {
        // Função Bubble Sort aqui

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                setSortingIndex(j); // Definir o índice sendo ordenado
                await sleep(delay);
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    setRandomArray([...arr]);
                }
            }
        }
        setSortingIndex(null); // Limpar o índice de ordenação após a ordenação
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
        <div>
            <h2>Array gerado com tamanho {arraySize}:</h2>
            <div className="bar-container">
                {randomArray.map((value, index) => (
                    <div
                        key={index}
                        className={`bar ${index === sortingIndex ? 'sorting' : ''}`} // Adicionar classe de ordenação
                        style={{ height: `${value}px` }}
                    >
                        <span className="bar-number">{value}</span>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={handleSortClick}>Ordenar</button>
                <div>
                    <button onClick={() => handleSpeedChange(300)}>Lento</button>
                    <button onClick={() => handleSpeedChange(200)}>Médio</button>
                    <button onClick={() => handleSpeedChange(100)}>Rápido</button>
                </div>
            </div>
        </div>
    );
}

export default Bubble;
