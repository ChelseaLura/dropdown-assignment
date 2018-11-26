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

const MembersPhotoList = ({ members, classes }) => (
    <div className={classes.MembersPhotoList}>
        {members.map((member) =>
            <Avatar key={member.memberId}
                    alt={member.name}
                    src={member.photo}
                    className={classes.avatarPhoto} />
        )}
    </div>
);

export default withStyles(styles)(MembersPhotoList);
