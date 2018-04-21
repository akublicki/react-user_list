import React, {Component} from 'react';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import {Container, UserLoginBox, UserImput, UserButton} from './home.style';
import {Wrapper} from "../../utils/styles/global.style";

class Home extends Component {
    state = {
        users: [],
        inputValue: '',
    };

    componentDidMount(){
        console.log('state component mount', this.state);
    };

    componentDidUpdate(){
        console.log('state component update', this.state);
    };

    addNewUser = () => {
        console.log(this.state.inputValue);
        this.setState({
            users: [...this.state.users, this.state.inputValue],
            inputValue: '',
        });
    };

    userOnChange = (event) => {
            this.setState({
                inputValue: event.target.value,
                }
            )
    };

    render() {
        return (
            <Container>
                <Header/>
                <Wrapper>
                    <UserLoginBox>
                        <div>Please add user name to observable</div>
                            <UserImput value={this.state.inputValue} onChange={this.userOnChange} />
                            <UserButton onClick={this.addNewUser}>
                                Add user
                            </UserButton>
                    </UserLoginBox>
                </Wrapper>
                <Footer/>
            </Container>
        );
    }
}

export default Home;

// https://api.github.com/users?client_id=b7c78ac85f340b7c1de5&client_secreted08881e79718c1a45985fbfd1f84428e85198b