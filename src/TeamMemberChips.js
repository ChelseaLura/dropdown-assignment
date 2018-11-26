import {withStyles} from "@material-ui/core";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import React from "react";

const styles = () => ({
    membersSection: {
        flexBasis: '77%'
    },
    memberAvatar: {
        width: '24px',
        height: '24px',
        margin: '5px'
    },
    memberName: {
        padding: 0
    }
});

const MemberChip = withStyles({
    root: {
        margin: '4px 8px 4px 0',
    },
    label: {
        padding: '0 14px 0 4px'
    }
})(Chip);

class TeamMemberChips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: props.members
        }
    };

    handleDelete = member => () => {
        this.setState(state => {
            const chipToDelete = state.members.indexOf(member);
            state.members.splice(chipToDelete, 1);
            return { state };
        });
    };

    render() {
        const { members, classes } = this.props;

        return (
            <div className={classes.membersSection}>
                {members.map(member =>
                    <MemberChip key={member.memberId}
                                avatar={<Avatar className={classes.memberAvatar} src={member.photo}/>}
                                label={member.name}
                                onDelete={this.handleDelete(member)}
                    />
                )}
            </div>
        );
    }
}

export default withStyles(styles)(TeamMemberChips);
