import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions'
import { styThem } from '../../../../style/varble';
import ModulorAsmentCP from './ModulorAsmentCP';

const data =[
    {order:'ofakjfakj',customerName:'Molly MORGAN',orderDate:'02/18/19',state:'standby',bit:2,adr:'42  mcadoo ave jersey city nj 07305'},
    {order:'oefkjfakj',customerName:'Amy MCDONALD',orderDate:'02/12/19',state:'on the way',bit:2,adr:'42  mcadoo ave jersey city nj 07305'},
    {order:'ofakssffj',customerName:'Precious MEYER',orderDate:'01/18/19',state:'on the way',bit:2,adr:'42  mcadoo ave jersey city nj 07305'},
]

 class ListM extends Component {
  

  render() {

    const rdItem =()=>(
        data.map(item =>(
            <Item key={item.order} onClick={(e)=> this.props.acModularAsment(true)} >
                <TextContaner  widthD="5%">
                   <Text  color="blue">{item.order}</Text> 
                </TextContaner>
                <TextContaner widthD="20%">
                   <Text>{item.customerName}</Text> 
                </TextContaner>
                <TextContaner widthD="10%">
                    <Text  color={item.state === 'on the way' ?'green': styThem.error.main}>{item.state}</Text>
                </TextContaner>
                <TextContaner widthD="20%">
                    <Text>{item.adr}</Text>
                </TextContaner>
                <TextContaner widthD="5%">
                  <Text>{item.bit}</Text>  
                </TextContaner>  
            </Item>
        ))
    )


    return (
      <ListMSty>
            <HederTable>
            <TextContaner widthD="5%">
                    <h4>Order</h4>
                </TextContaner>
                <TextContaner widthD="20%">                
                    <h4>Customer Name</h4>
                </TextContaner>
                <TextContaner widthD="10%">
                    <h4>State</h4>
                </TextContaner>
                <TextContaner widthD="20%">
                    <h4 className="adr">Address</h4>
                </TextContaner>
                <TextContaner widthD="5%">
                    <h4>Count</h4>
                </TextContaner>
            </HederTable>
            <ModulorAsmentCP />
        {rdItem() }
      </ListMSty>
    )
  }
}

const mapStateToProps = (state) => ({
  
})



const ListMSty = styled(Card)`
    margin-top:12px;
    padding:6px;
`

const HederTable= styled.div`
    display:flex;
    justify-content:space-between;
    padding:12px;
`

const Item = styled.div`
    display:flex;
    justify-content:space-between;
    padding:12px;
    margin-bottom:1px;
    box-shadow: 0px 0px 7px -1px rgba(0,0,0,0.75);
    border-radius:3px;
    transition:all .2s ease;
    cursor:pointer;
    &:hover{
        background-color:${styThem.secondary.lite};
    }
    &:active{
        background-color:${styThem.secondary.main};
    }
`

const TextContaner =styled.div`
    width:${props =>(props.widthD)};
    display:flex;
    justify-content:center;
`


const Text =styled.h4`
    transform:translateX(${props => (props.mover)});
    color:${props => (props.color)};
`



export default connect(mapStateToProps, actions)(ListM)
