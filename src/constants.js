export const TeamSectionStyles = {
    nameFlexBasis: '31%',
    memberFlexBasis: '46%',
};

let memberId = 0;
function createMembers(name) {
   memberId += 1;
   return {
       memberId,
       name,
       photo: "https://www.placecage.com/c/40/40"
   }
}

export const Members = [
    createMembers("Tracey Simons"),
    createMembers("Winifred Mingo"),
    createMembers("Lady Jong"),
    createMembers("Lakeesha Mascarenas"),
    createMembers("Xiao Snowball"),
    createMembers("Osvaldo Rybicki"),
    createMembers("Apolonia Hempel"),
    createMembers("Melania Plyler"),
    createMembers("Adela Bartell"),
    createMembers("Leontine Jeanlouis"),
    createMembers("Jeane Stukes"),
    createMembers("Emelia Grabill"),
    createMembers("Bess Winship"),
    createMembers("Gertie Bollin"),
    createMembers("Karyn Conard"),
    createMembers("Min Vasser"),
    createMembers("Annetta Chisum"),
    createMembers("Debbi Emberton"),
    createMembers("Tia Kniffen"),
    createMembers("Grayce Quijada"),
    createMembers("Lynnette Mcniff"),
    createMembers("Todd Hassen"),
    createMembers("Sheron Fournier"),
    createMembers("Jerilyn Viviano"),
    createMembers("Salina Deloach"),
    createMembers("Jesusa Speegle"),
    createMembers("Tracee Ensey"),
    createMembers("Abe Barrier"),
];

let teamId = 0;
function createTeam(name, members, added) {
    teamId += 1;
    return { teamId, name, members, added };
}

export const Teams = [
    createTeam('Billing',          Members.slice(0, 4),   "3 Years Ago"),
    createTeam('Retention',        Members.slice(0, 11),  "2 Months Ago"),
    createTeam('Sales',            Members.slice(0, 3),   "9 Months Ago"),
    createTeam('Support Level 1',  Members.slice(0, 10), "1 Year Ago"),
    createTeam('Support Level 2',  Members.slice(0, 4),  "2 Year Ago"),
];