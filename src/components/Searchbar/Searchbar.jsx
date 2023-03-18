import { SearchBar, Form, SearchFormBtn, SearchFormInput } from "./Searchbar.styled";
import { ImSearch as IconSearch } from "react-icons/im"
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import { useState } from 'react';

export const Searchbar = (props) => {
    const [handleInputChange, setHandleInputChange] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onHandleSubmit(event);
        setHandleInputChange('')
    }

    return (
        <SearchBar>
            <Form onSubmit={handleSubmit}>
                <SearchFormBtn type="submit">
                    <IconSearch size='2em' />
                </SearchFormBtn>
                <SearchFormInput
                    type="text"
                    name="name"
                    value={handleInputChange}
                    onChange={(event) => setHandleInputChange(event.target.value)}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </Form>
        </SearchBar>
    )
}

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};

    

