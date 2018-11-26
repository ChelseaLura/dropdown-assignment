import React from 'react';
import keycode from 'keycode';
import Downshift from 'downshift';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip';
import { Members } from './constants';
import Avatar from "@material-ui/core/Avatar/Avatar";

//TODO: Break this into small components

const styles = () => ({
    membersSection: {
        flexBasis: '77%',
    },
    memberAvatar: {
        width: '24px',
        height: '24px',
        margin: '5px'
    },
    memberName: {
        padding: 0
    },
    memberList: {
        flexWrap: 'wrap',
    },
    avatarPhoto: {
        width: '40px',
        height: '40px',
        margin: '0 10px 0 20px'
    },
    suggestion: {
        height: '60px',
        width: '320px',
        padding: 0
    },
    suggestionDropDown: {
        width: '320px',
    },
    memberInput: {
        width: '200px'
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

const suggestions = Members;

function renderInput({InputProps, inputRef, classes, ...other}) {

    return (
        <TextField
            InputProps={{
                inputRef: inputRef,
                classes: {
                    root: classes.memberList,
                    input: classes.memberInput
                },
                ...InputProps,
            }}
            {...other}
        />
    );
}

function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, members, classes }) {
    const isHighlighted = highlightedIndex === index;
    const isSelected = (members || '').indexOf(suggestion.name) > -1;

    return (
        // TODO: Make this lineup properly with the input dropDown.
        <MenuItem
            {...itemProps}
            key={suggestion.memberId}
            selected={isHighlighted}
            component="div"
            className={classes.suggestion}
        >
                <Avatar key={suggestion.memberId}
                        alt={suggestion.name}
                        src={suggestion.photo}
                        className={classes.avatarPhoto} />
                <span>{suggestion.name}</span>
        </MenuItem>
    );
}

function getSuggestions(inputValue, members) {
    let count = 0;

    return suggestions.filter((suggestion) => {
        return members.indexOf(suggestion) === -1;
    }).filter(suggestion => {
        const keep =
            (!inputValue || suggestion.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
            count < 5;

        if (keep) {
            count += 1;
        }

        return keep;
    });
}

class MemberInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: props.members,
            inputValue: '',
        }
    };

    handleKeyDown = event => {
        const { inputValue, members } = this.state;
        if (members.length && !inputValue.length && keycode(event) === 'backspace') {
            this.setState({
                members: members.slice(0, members.length - 1),
            });
        }
    };

    handleInputChange = event => {
        this.setState({ inputValue: event.target.value });
    };

    handleChange = member => {
        const currentMembers = this.state.members;
        currentMembers.push(member);

        this.setState({
            inputValue: '',
            members: currentMembers,
        });
    };

    handleDelete = member => () => {
        const currentMembers = this.state.members;
        currentMembers.splice(currentMembers.indexOf(member), 1);
        this.setState({
            members: currentMembers
        });
    };

    render() {
        const { classes } = this.props;
        const { inputValue, members } = this.state;

        return (
            <Downshift inputValue={inputValue} onChange={this.handleChange} members={members}>
                {({
                      getInputProps,
                      getItemProps,
                      isOpen,
                      highlightedIndex,
                  }) => (
                    <div className={classes.membersSection}>
                        {renderInput({
                            fullWidth: true,
                            classes,
                            InputProps: getInputProps({
                                startAdornment: members.map(member => (
                                    <MemberChip key={member.memberId}
                                                avatar={<Avatar className={classes.memberAvatar} src={member.photo}/>}
                                                label={member.name}
                                                onDelete={this.handleDelete(member)}
                                    />
                                )),
                                onChange: this.handleInputChange,
                                onKeyDown: this.handleKeyDown,
                                placeholder: 'ADD A NEW TEAM MEMBER',
                                id: 'integration-downshift-multiple',
                            }),
                        })}
                        {isOpen ? (
                            <Paper className={classes.suggestionDropDown} square>
                                {getSuggestions(inputValue, members).map((suggestion, index) =>
                                    renderSuggestion({
                                        suggestion,
                                        index,
                                        itemProps: getItemProps(
                                            {
                                                item: {
                                                    memberId: suggestion.memberId,
                                                    name: suggestion.name,
                                                    photo: suggestion.photo
                                                }
                                            }),
                                        highlightedIndex,
                                        members: members,
                                        classes: classes
                                    }),
                                )}
                            </Paper>
                        ) : null}
                    </div>
                )}
            </Downshift>
        );
    }
}


export default withStyles(styles)(MemberInput);
