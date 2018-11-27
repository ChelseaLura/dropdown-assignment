import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import {LoremIpsum} from "./constants";


const styles = () => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '24px',
        marginBottom: '20px'
    },
});

const HeaderButton = withStyles({
    root: {
        padding: 0,
        backgroundColor: '#417505',
        '&:hover': {
            backgroundColor: '#417505',
        },
    },
    label: {
        color: '#ffffff',
        fontWeight: 600,
        padding: '5px 20px 5px 20px',
        fontSize: '15px',
        fontFamily: 'Source Sans Pro'
    },
})(Button);



const PageHeader = ({classes}) => (
        <header className={classes.header}>
            <span>{ LoremIpsum }</span>
            <HeaderButton>Create Team</HeaderButton>
        </header>
);

export default withStyles(styles)(PageHeader);