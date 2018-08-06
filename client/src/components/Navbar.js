import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            anchorEl: null
        }
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        console.log(this.props)
        const { anchorEl } = this.state;
        return (
            <div className="links">
                <div className="navWide">
                    <Link to="/" className="homeLink"> Tasting Room </Link>
                    <Link to="/howitworks"> How It Works </Link>
                    <Link to="/winelist"> Master Wine List </Link> 
                    <Link to="/contact"> Contact Us </Link> 
                </div>
                <div className="navNarrow">
                <Link to="/" className="homeLink"> Tasting Room </Link>
                    <Button 
                        aria-owns={anchorEl ? 'simple-menu' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                    >
                        <i className="hamburger" className="material-icons">menu</i>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>
                            <Link to="/howitworks"> How It Works </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <Link to="/winelist"> Master Wine List </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <Link to="/contact"> Contact Us </Link>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar)