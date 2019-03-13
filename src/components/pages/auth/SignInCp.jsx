import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { styThem } from '../../../style/varble'
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularDeterminate from '../../layout/CircularDeterminate';
import * as actions from '../../../store/actions';

class SignInCp extends Component {

    state={
        userName:'',
        password:'',
        progresive:false
    }

    onSubmit = () => {
        let formProps = {
          userName: this.state.userName,
          password:this.state.password
        }
        this.setState({progresive:true})

        this.props.acSignin(formProps, (isValed) => {
          if (isValed) {
            this.props.history.push('/')
          } else {
            this.setState({progresive:false})
          }
        });
    };
    


  render() {

    const  rdSignInCard =()=>(
        
        <CardEL>
            <HederEL>Login</HederEL>
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
                label="password"
                value={this.state.password}
                onChange={(e) => this.setState({password: e.target.value})}
                margin="normal"
                type="password"
                autoComplete="current-password"
                />
                <SpEL />
                <Button onClick={this.onSubmit} variant="contained" color="secondary" >
                    Submit
                </Button>
            </ContainedEL>
        </CardEL>
     
    )

    
    return (
        <MainEL>
            {this.state.progresive ? <CircularDeterminate /> : rdSignInCard()}
        </MainEL>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps,actions )(SignInCp)


const MainEL = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding-top:50px;
`

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


