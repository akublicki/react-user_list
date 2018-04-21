import React, {Component} from 'react';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import {Container} from './home.style';

class Home extends Component {
    render() {
        return (
            <Container>
                <Header/>
                Home
                <Footer/>
            </Container>
        );
    }
}

export default Home;

// https://api.github.com/users?client_id=b7c78ac85f340b7c1de5&client_secreted08881e79718c1a45985fbfd1f84428e85198b