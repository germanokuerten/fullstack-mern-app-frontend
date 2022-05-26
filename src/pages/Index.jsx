import { Link } from "react-router-dom"

export default function Index ({people, createPeople}) {

    // loaded function
    const loaded = () => {
    return people.map(person => (
      <div key={person._id} className="person">
        <Link to={`/people/${person._id}`}>
          <h1>{person.name}</h1>
        </Link>
        <img src={person.image} alt={person.name} />
        <h3>{person.title}</h3>
      </div>
    ))
  }
  const loading = () => <h1>Loading...</h1>

  return people ? loaded() : loading()
}

