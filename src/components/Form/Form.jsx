import { useState } from "react";
// import Notiflix from 'notiflix';

const Form = ({setSearch}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch({ query });
    }

    const handleChange = (e) => {
        setQuery(e.currentTarget.value.toLowerCase().trim())
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Name movie"
            autoFocus
            />
            <button
            type='submit'
            disabled={!query}
            >Search</button>
        </form>
    )

}

export default Form;