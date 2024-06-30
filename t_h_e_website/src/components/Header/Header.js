// src/components/Header/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.scss';

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Typography variant="h6" className="header__title">
          Snowboard Co.
        </Typography>
        <div className="header__nav">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button color="inherit" component={Link} to="/shop">Shop</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button color="inherit" component={Link} to="/instructors">Meet the Instructors</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button color="inherit" component={Link} to="/instructors">Mission</Button>
          </motion.div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
