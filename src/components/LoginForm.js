import React, {Component} from 'react';
import {TextInput} from 'react-native';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';

class LoginForm extends Component {
    state = {email: '', password:''};
    render () {
        return (
            <Card>
                <CardSection>
                    <Input
                    placeholder="user@gmail.com"
                    label="Email" 
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                    secureTextEntry
                    placeholder="password"
                    label="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;