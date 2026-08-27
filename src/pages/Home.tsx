import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

export default function Home() {
    const navigate = useNavigate()

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    return (
        <>
            <div className='container'>
            </div>
        </>
    )
}