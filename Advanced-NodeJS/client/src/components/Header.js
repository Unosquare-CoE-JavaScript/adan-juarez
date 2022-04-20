import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Button color="inherit">
            <a href={'/auth/google'}>Login With Google</a>
          </Button>
        );
      default:
        return [
          <Button color="inherit" key="3" style={{ margin: '0 10px' }}>
            <Link to="/blogs">My Blogs</Link>
          </Button>,
          <Button key="2" color="inherit">
            <a href={'/auth/logout'}>Logout</a>
          </Button>
        ];
    }
  }

  render() {
    return (
      <AppBar position="static" style={{ color: 'white !important' }}>
        <Toolbar>
          <Link
            to={this.props.auth ? '/blogs' : '/'}
            className="left brand-logo"
            style={{ marginLeft: '10px' }}
          >
            Blogster
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </Toolbar>
      </AppBar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);