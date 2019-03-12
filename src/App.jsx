import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import Dashboard from '@material-ui/icons/DashboardTwoTone';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styled from 'styled-components';
import {styThem} from './style/varble';

import WorkID from './components/layout/nav/WorkID';


const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
    overflow:'hidden'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 1,
    overflow:'hidden'
  },
  list:{

  }
});

const data =[
  {title:'Dashboard',icon:<Dashboard />,on:true},
  {title:'Home',icon:<HomeIcon />,on:false},
  {title:'Admin',icon:<InboxIcon />,on:false},
  {title:'History',icon:<HistoryIcon />,on:false},
]

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const rdNavList = ()=>(
      data.map(list =>(
        <ListNavItem  on={list.on} key={list.title}>
              <ListNavItemIcom>{list.icon}</ListNavItemIcom>
              <ListNavItemTextPosition>
                <ListNavItemText>{list.title}</ListNavItemText>
              </ListNavItemTextPosition> 
        </ListNavItem>
      ))
    )

    const drawer = (
      <div>
        <div style={{background:'#4D658D',color:styThem.color.white,display:'flex',justifyContent:'center',alignItems:'center'}} className={classes.toolbar}>
          <h2>menu</h2>
        </div>
        <Divider />
          <ListNav>
            {rdNavList()}
          </ListNav>
        <Divider />
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Delivery App
            </Typography>
            <Space />
            <WorkID />
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

const ListNav = styled.div`
  width:100%;
  padding: 6px 0;
`

const ListNavItem = styled.div`
  display:flex;
  padding:6px 18px;
  align-items:center;
  justify-content:space-between ;
  &:hover{
    background:${styThem.secondary.dark};
    color:${styThem.color.white};
  }
  transition:all .2s ease-in-out;
  color:${props => (props.on && styThem.primary.main)};
  cursor:pointer;
  
`

const ListNavItemIcom = styled.div`
  display:flex;
`
const ListNavItemTextPosition = styled.div`
  flex-grow:1;
  display:flex;
  justify-content:center;
`

const ListNavItemText = styled.div`
  font-size:25px;
`

const Space = styled.div`
  flex-grow:1;
`


export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
