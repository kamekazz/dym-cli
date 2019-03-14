import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { styThem } from '../../../style/varble'
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularDeterminate from '../../layout/CircularDeterminate';
import * as actions from '../../../store/actions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

 class NewWCp extends Component {

    state={
        userName:'',
        password:'',
        progresive:false,
        position:'',
        desableButton:false
    }

    onSubmit = () => {
        let formProps = {
          userName: this.state.userName,
          password:this.state.password,
          position:this.state.position
        }
        this.setState({progresive:true})

        this.props.acNewEM(formProps,(isValed)=>{
            if (isValed) {
                this.setState(
                    {
                        progresive:false,
                        password:'',
                        position:'',
                        userName:''
                    }
                )
            } else {
                this.setState(
                    {
                        progresive:false,
                        password:''
                    }
                )
            }
        })
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };



    render() {

        const  rdSignInCard =()=>(
            
            <CardEL>
                <HederEL>Add New Employee </HederEL>
                <ContainedEL onSubmit={this.onSubmit} >
                    <TextField
                    name="userName"
                    label="User Name"
                    value={this.state.userName}
                    onChange={(e) => this.setState({userName: e.target.value})}
                    margin="normal"
                    />
                    <TextField
                    name="password"
                    label="temporary password"
                    value={this.state.password}
                    onChange={(e) => this.setState({password: e.target.value})}
                    margin="normal"
                    type="password"
                    autoComplete="current-password"
                    />
                    <InputLabel htmlFor="position">Position</InputLabel>
                    <Select
                        value={this.state.position}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'position',
                            id: 'position',
                        }}
                    >
                        <MenuItem value={this.state.position}>
                        </MenuItem>
                        <MenuItem value={'admin'}>Admin</MenuItem>
                        <MenuItem value={'delivery'}>Delivery</MenuItem>
                        <MenuItem value={"dispatch"}>Dispatch</MenuItem>
                    </Select>
                    <SpEL />
                    <Button disabled={this.state.desableButton} onClick={this.onSubmit} variant="contained" color="secondary" >
                        Submit
                    </Button>
                </ContainedEL>
            </CardEL>
         
        )
    
        
        return (
            <div>
                {this.state.progresive ? <CircularDeterminate /> : rdSignInCard()}
            </div>
        )
      }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, actions)(NewWCp)



const CardEL = styled.div`
    min-width:320px;
    background:whitesmoke;
    display:flex;
    align-items:center;
    flex-direction:column;
    padding:24px;
    border-radius:3px;
    border: solid 1px ${styThem.color.greyDark2};
`

const ContainedEL = styled.form`
    display:flex;
    flex-direction:column;
`

const HederEL = styled.h1`
    margin-top:50px;
`

const SpEL = styled.div`
    margin-top:50px;
`


