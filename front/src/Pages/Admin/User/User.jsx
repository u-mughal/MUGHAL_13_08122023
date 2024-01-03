import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Account from "@/Components/Account/Account";
import UserHeader from "@/Components/UserHeader/UserHeader"
import auth_service from '@/_Services/AccountService';
import { userService } from "@/_Services/UserService.jsx";

const User = () => {

    const dispatch = useDispatch();
    const token= useSelector((state)=> state.login.token);
    const userEmail= useSelector((state)=> state.user.email);

    console.log(userEmail);

    const accountUser = userService.getUser();

    console.log(accountUser);

    useEffect(()=>{
        if(token !==null ){
          dispatch(auth_service.userProfile(token))
        }
      },[token, dispatch])

    return (
        <>
            <UserHeader />
            {/* {userData && (
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
            )} */}
        </>
    );
};

export default User;
