import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import Modal from '../ui/Modal';
import Cart from './Cart';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleClick = () => {
        setIsModalOpen(prev => !prev)
    }
    const handleClose = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        if (isModalOpen) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "scroll"
        }
    }, [isModalOpen])
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/products" className="nav-link">Products d</NavLink>
                        <NavLink to="/product-details" className="nav-link">Product Details</NavLink>
                    </Nav>

                    <Badge
                        badgeContent={4}
                        color="primary"
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        style={{ cursor: 'pointer' }}
                    >
                        <ShoppingCartIcon color="action" />
                    </Badge>

                </Container>
            </Navbar>

            {/* Modal */}
            {
                isModalOpen && (
                    <Modal handleClose={handleClose}>
                        <Cart />
                    </Modal>
                )
            }

        </>

    );
};

export default Header;
