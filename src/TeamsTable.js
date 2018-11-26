import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import TeamRow from './TeamRow'
import {TeamSectionStyles} from "./constants";

const styles = () => ({
    teamTable: {
        display: 'flex',
        padding: '12px 24px 12px 24px',
        fontWeight: 600,
    },
    name: {
        flexBasis: TeamSectionStyles.nameFlexBasis,
        opacity: 0.8,

    },
    member: {
        flexBasis: TeamSectionStyles.memberFlexBasis,
        opacity: 0.4,
    },
    added: {
        opacity: 0.4,
    }
});

const TeamsTable = ({ teams, classes }) => (
    <section>
        <div className={classes.teamTable}>
            <span className={classes.name}>TEAM</span>
            <span className={classes.member}>MEMBERS</span>
            <span className={classes.added}>ADDED</span>
        </div>
        <Divider />
        {teams.map((team) =>
            <TeamRow key={team.teamId} team={team}/>
        )}
    </section>

);

export default withStyles(styles)(TeamsTable);