import React, { Component } from 'react'
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux'

const data=[
    {name:'olive',st:'on a delivery',color:'green',wk:true},
    {name:'mohaaben',st:'on a delivery',color:'green',wk:true},
    {name:'jack',st:'standby',color:'yellow',wk:true},
    {name:'sosa',st:'off',color:'red',wk:false},
    {name:'tom',st:'off',color:'red',wk:false},
    {name:'jose',st:'off',color:'red',wk:false},
    {name:'maria',st:'off',color:'red',wk:false},
]


 class ListCP extends Component {

    state = {
        checkedA: true,
        checkedB: true,
    };
    
    

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };
  render() {
    const rdList =()=>(
        data.map(
            item =>(
                <ItemSTY key={item.name}>
                    <ValusNameSTY>{item.name}</ValusNameSTY>
                    <StSTY color={item.color}>{item.st}</StSTY>
                    <Switch
                    checked={item.wk}
                    onChange={this.handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                    />
                </ItemSTY> 
            ) 
        )   
    ) 

    return (
      <ListSTY>
        {rdList()}
      </ListSTY>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

const ListSTY = styled.div`
   
`

const ItemSTY = styled.div`
     display:flex;
     border-radius:3px;
     box-shadow: 0px 0px 7px 1px rgba(0,0,0,0.75);
     padding: 6px 12px;
     margin-bottom:3px;
     justify-content:space-between;
     align-items:center;
`

const ValusNameSTY =styled.h3`

`

const StSTY = styled.h3`
    color: ${prorp => (prorp.color)}
`


export default connect(mapStateToProps, mapDispatchToProps)(ListCP)
