

import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import styled from 'styled-components';
import * as actions from '../../../store/actions'


class EmlistCp extends Component {


  componentDidMount(){
    this.props.acGetAll()
    console.log(this.props.data)
  }


  render() {
    const {data}= this.props
    const rdItem =()=>(
      data.map(item=>(
        <ItemCtEL key={item._id}>
          <p>{item.userName}</p>
          <p>{item.position}</p>
        </ItemCtEL>
      ))
    )

    return (
      <Paper style={{minWidth:'325px'}}>
        <HederSTY>
            <h2>Employees</h2>
        </HederSTY>
        <hr />
        <BottomSTY>
          { rdItem( )}
        </BottomSTY>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.message.userList
})



const HederSTY = styled.div`
   display:flex;
   justify-content:center;
`
const BottomSTY = styled.div`
    padding:12px;
`

const ItemCtEL = styled.div`
   display:flex;
   justify-content:space-around;
`

export default connect(mapStateToProps, actions)(EmlistCp)
