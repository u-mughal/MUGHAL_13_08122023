import Account from "../../../Components/Account/Account";
import UserIntro from "../../../Components/UserIntro/UserIntro"
import dataaccount from "../../../Assets/Api/accountinfo.json";

const User = () => {
    return (
        <>
        <UserIntro />
        {
            dataaccount.map((value) =>
            <Account key={value.id} title={value.titleAccount} total={value.totalAccount} type={value.typeOfAccount} />
            )
        }
        </>
    );
};

export default User;