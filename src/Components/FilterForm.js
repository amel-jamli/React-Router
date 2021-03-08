import React, { useState } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function FilterForm({ handleFilter }) {
    const [filterTitle, setFilterTitle] = useState('');
    const [filterRate, setFilterRate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        handleFilter(filterTitle, filterRate)
    }
    return (
        <Form inline onSubmit={onSubmit}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"
                value={filterTitle} onChange={(e) => setFilterTitle(e.target.value)} />
            <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
                value={filterRate} onChange={(e) => setFilterRate(e.target.value)}
            >
                <option value="">Choose...</option>
                <option value="1" >⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐ </option>
            </Form.Control>
            <Button variant="outline-primary" onClick={onSubmit}>Search</Button>
        </Form>
    )
}

export default FilterForm

