import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TeamsTable from './TeamsTable';
import {Teams} from "./constants";

const styles = () => ({
    teamsPage: {
        fontSize: '15px',
        fontFamily: 'Source Sans Pro'
    }
});

const TeamsPage = ({classes}) => (
    <article className={classes.teamsPage}>
        <TeamsTable teams={Teams} />
    </article>
);

export default withStyles(styles)(TeamsPage);