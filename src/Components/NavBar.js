import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Add from './Add';
import FilterForm from "./FilterForm";

function NavBar({ handleAdd, handleFilter }) {
    return (
        <div id="navMo" className="mb-4 bg-light" variant="light">
            <Navbar  expand="lg" className="container" >
                <h1 >Movie App</h1>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Add handleAdd={handleAdd} />
                    </Nav>
                    <FilterForm handleFilter={handleFilter} />
                    </Navbar.Collapse>
            </Navbar>
        </div>

    )
}

export default NavBar
