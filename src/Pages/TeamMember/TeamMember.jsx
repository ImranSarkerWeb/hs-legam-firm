
import Banner from './../About/AboutComponets/Banner';
import TeamMemberCart from './TemMemberComponent/TeamMemberCart';

const TeamMember = () => {
    return (
        <div>
            <Banner title={"Team Member"} discripction={"passionate professionals committed to excellence. Learn about each member shaping our success and vision collaboratively."} />
            <TeamMemberCart />
        </div>
    );
};

export default TeamMember;