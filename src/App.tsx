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
                <div>home</div>
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
