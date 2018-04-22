import React, {Component} from 'react';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import {Wrapper} from "../../utils/styles/global.style";
import {Container} from "./userDetails.style";
import {githubConfig} from "../../config/config";

class UserDetails extends Component {
    state = {
        details: {},
    };

    componentDidMount() {
        fetch(githubConfig.apiUrl + '/users/' + this.props.match.params.user_name + '??client_id=' + githubConfig.clientId + '&client_secret=' + githubConfig.clientSecreted)
            .then(res => res.json())
            .then(result => this.setState({
                details: result,
            }))
            .catch(() => this.setState({
                wrongUser: true,
            }))
    }

    render() {
        return (
            <Container>
                <Header/>
                <Wrapper>
                    {this.props.match.params.user_name}
                    {console.log(this.state.details)}
                </Wrapper>
                <Footer/>
            </Container>
        );
    }
}

export default UserDetails;

// https://api.github.com/users?client_id=b7c78ac85f340b7c1de5&client_secreted08881e79718c1a45985fbfd1f84428e85198b