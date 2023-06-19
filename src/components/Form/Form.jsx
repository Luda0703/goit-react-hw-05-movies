import { useState } from "react";
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import {Input, FormInput, Button} from './Form.styled'

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
        <FormInput onSubmit={handleSubmit}>
            <Input 
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Name movie"
            autoFocus
            />
            <Button
            type='submit'
            disabled={!query}
            >Search
            </Button>
        </FormInput>
    )

}

Form.propTypes = {
    setSearchParams:PropTypes.func.isRequired

}

export default Form;