import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"


export default function Main () {

    const [people, setPeople] = useState(null)

    const URL = "https://gk-fullstack-mern-app-backend.herokuapp.com/people/"

    const getPeople = async () => {
        const data = await fetch(URL).then(res => res.json())
        setPeople(data)
    }

    const createPeople = async person => {
        await fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
            },
            body: JSON.stringify(person),
        })
        // update list of people
        getPeople()
    }

    useEffect(() => {
        getPeople()
    }, [])
       

    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Index people={people} createPeople={createPeople} />} />
                <Route path="/people/:id" element={<Show people={people} />} />
            </Routes>
        </main>
    )
}