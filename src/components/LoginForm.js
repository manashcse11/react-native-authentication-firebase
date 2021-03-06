import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';

class LoginForm extends Component {
    state = {email: '', password: '', error: ''};

    onButtonPress() {
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({error: 'Authentication Failed.'});
                    });
            });
    }

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

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPressAction={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
};

export default LoginForm;