import { useState } from "react";
import Notiflix from 'notiflix';

const Form = ({setSearchParams}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            Notiflix.Notify.info('Please enter your query!');
            return;
          }
        setSearchParams({ query });
    }

    const handleChange = (e) => {
        setQuery(e.currentTarget.value.toLowerCase())
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