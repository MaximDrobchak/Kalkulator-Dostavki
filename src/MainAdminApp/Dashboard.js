import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Kalculator from '../components/Kalculator';

export default () =>(
    <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent><Kalculator/></CardContent>
    </Card>
)
