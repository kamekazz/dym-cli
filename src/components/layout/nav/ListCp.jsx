import React, { Component } from 'react'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Dashboard from '@material-ui/icons/DashboardTwoTone';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import { connect } from 'react-redux'

import styled from 'styled-components';
import {styThem} from '../../../style/varble';

import history from '../../../store/history'


const data =[
    {title:'Dashboard',icon:<Dashboard />,on:false,url:'/'},
    {title:'Home',icon:<HomeIcon />,on:false,url:'/'},
    {title:'Admin',icon:<InboxIcon />,on:false,url:'/neww'},
    {title:'History',icon:<HistoryIcon />,on:false,url:'/'},
]
 class ListCp extends Component {


    goto =(pmUrl)=>{
        history.push(pmUrl)
    }

  render() {
    const rdNavList = ()=>(
        data.map(list =>(
          <ListNavItem  onClick={()=> this.goto(list.url)} on={list.on} key={list.title}>
                <ListNavItemIcom>{list.icon}</ListNavItemIcom>
                <ListNavItemTextPosition>
                  <ListNavItemText>{list.title}</ListNavItemText>
                </ListNavItemTextPosition> 
          </ListNavItem>
        ))
    )

    return (
      <div>
        {this.props.isAuthenticated && rdNavList()}
      </div>
    )
  }
}

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

const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.isAuthenticated
})



export default connect(mapStateToProps, null)(ListCp)
