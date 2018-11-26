import React from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Icon from '@material-ui/core/Icon';
import {TeamSectionStyles} from './constants';
import MembersPhotoList from './MembersPhotoList';
import TeamMemberChips from './TeamMemberChips';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import {withStyles} from "@material-ui/core";

const styles = () => ({
    root: {
        width: '100%',
        border: 0
    },
    teamRow: {
        margin: 0,
        padding: '8px 0',
        boxShadow: 'none',
        borderBottom: '1px solid #ededed',
    },
    name: {
        flexBasis: TeamSectionStyles.nameFlexBasis,
    },
    member: {
        flexBasis: TeamSectionStyles.memberFlexBasis
    },
    added: {
        color: '#444444'
    },
    membersSection: {
        flexBasis: '77%',
    },
    actionsSection: {
        display: 'flex',
        alignItems: 'center'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '8px'
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    archiveIcon: {
        fontSize: '14px',
        color: '#582cfa',
        paddingRight: '4px'
    },
    archiveText: {
        color: '#417505',
        fontSize: '15px'
    },
});

const TeamSummary = withStyles({
    content: {
        alignItems: 'center',
        margin: 0
    },
    expandIcon: {
        color: '#417505',
        opacity: 0.1,
        height: '30px',
        width: '30px',

    }
})(ExpansionPanelSummary);

const TeamEditDetails = withStyles({
    root: {
        padding: '0px 24px',
        fontSize: '12px',
        color: '#9b9b9b'
    },
})(ExpansionPanelDetails);

const TeamRow = ({team, classes}) => (
    <ExpansionPanel className={classes.teamRow}>
        <TeamSummary expandIcon={<Icon className={'fa fa-chevron-circle-up'} />}>
            <div className={classes.name}>{team.name}</div>
            <div className={classes.member}>
                <MembersPhotoList members={team.members}/>
            </div>
            <div className={classes.added}>{team.added}</div>
        </TeamSummary>
        <TeamEditDetails className={classes.flexColumn}>
            <div className={classes.flexRow}>
                <div className={classes.membersSection}>Team Members: </div>
                <div>Actions: </div>
            </div>
            <div className={classes.flexRow}>
                <TeamMemberChips members={team.members} />
                <div className={classes.actionsSection}>
                    <DeleteOutlinedIcon className={classes.archiveIcon}/>
                    <span className={classes.archiveText}>Archive Team</span>
                </div>
            </div>
        </TeamEditDetails>
    </ExpansionPanel>

);

export default withStyles(styles)(TeamRow);