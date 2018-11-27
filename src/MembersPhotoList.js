import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const styles = () => ({
    MembersPhotoList: {
        display: 'flex',
    },
    avatarPhoto: {
        margin: '2px'
    }
});

//TODO: If built with a Flux Store:
//    Teams and their respective members would be a property of the state that,
//    TeamRow, MembersPhotoList, & MemberInput would both reference.
//    For now this view doesn't update when new members are added to/removed from a team

const MembersPhotoList = ({ members, classes }) => (
    <div className={classes.MembersPhotoList}>
        {members.map((member) =>
            // TODO: Display photos overlapping eachother
            <Avatar key={member.memberId}
                    alt={member.name}
                    src={member.photo}
                    className={classes.avatarPhoto} />
        )}
    </div>
);

export default withStyles(styles)(MembersPhotoList);
