import { useEffect, useState } from "react";
import Account from "@/Components/Account/Account";
import UserIntro from "@/Components/UserIntro/UserIntro"
import { userService } from "@/_Services/UserService.jsx";

const User = () => {
    const [userData, setUserData] = useState(null);

    // Je déclenche l'appel au compte du client connecté au moment de l'affichage du composant
    useEffect(() => {
        userService.getUser("user01") // Remplacez "user01" par l'ID de l'utilisateur que vous souhaitez récupérer
            .then((res) => setUserData(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <UserIntro />
            {userData && (
                <div key={userData.userId}>
                    <h2>User ID: {userData.userId}</h2>
                    {userData.account.map((account) => (
                        <Account
                            key={account.id}
                            title={account.titleAccount}
                            total={account.totalAccount}
                            type={account.typeOfAccount}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default User;
