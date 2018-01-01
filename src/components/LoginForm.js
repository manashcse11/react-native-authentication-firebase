import React, {Component} from 'react';
import {View} from 'react-native';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';

class LoginForm extends Component {
    render () {
        return (
            <Card>
                <CardSection/>
                <CardSection/>

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