import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TeamsTable from './TeamsTable';
import {Teams} from "./constants";
import PageHeader from "./PageHeader";

const styles = () => ({
    teamsPage: {
        fontSize: '15px',
        fontFamily: 'Source Sans Pro'
    }
});

const TeamsPage = ({classes}) => (
    <article className={classes.teamsPage}>
        <PageHeader/>
        <TeamsTable teams={Teams} />
    </article>
);

export default withStyles(styles)(TeamsPage);