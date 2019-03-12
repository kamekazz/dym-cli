import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ListM from './ListM';
import * as actions from '../../../../store/actions'

const data = [
  {title:'Delivery Person',img:'https://res.cloudinary.com/dujqdfwzi/image/upload/c_scale,w_50/v1551318837/wfl/dly/9c2f40c841ba3ae0139f965dd40c4763.png'},
  {title:'Customer',img:'https://res.cloudinary.com/dujqdfwzi/image/upload/c_scale,w_50/v1551321020/wfl/dly/customer.png'},
]
 class ListConpt extends Component {

  render() {

    const rdInfo =()=>(
      data.map(item =>(
        <ItemSTY key={item.title}>
          <img src={item.img} alt={item.title}/> <h3>{item.title}</h3>
        </ItemSTY>
      ) )
    )
    return (
      <ListConptSty>
        <Top>
            <InfoSTY>
              {rdInfo()}
            </InfoSTY>
            <Space />
            <Fab variant="extended" color="secondary" aria-label="Add" onClick={()=> this.props.acModular(true)} >
                <AddIcon  />
                Local Delivery
            </Fab>
        </Top>
        <Botton>
            <ListM />
        </Botton>
      </ListConptSty>
    )
  }
}

const mapStateToProps = (state) => ({
  
})



const ListConptSty = styled.div`

`
const Top = styled.div`
  display:flex;
`

const InfoSTY = styled.div`
display:flex;
justify-content:space-between;
  
`

const ItemSTY = styled.div`
  display:flex;
  justify-content:space-between;
  margin-right:10px;
`


const Space = styled.div`
  flex-grow:1;
`

const Botton =styled.div`
`



export default connect(mapStateToProps, actions)(ListConpt)
