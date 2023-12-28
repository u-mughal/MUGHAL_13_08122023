import { USER_MAIN_DATA } from "@/Assets/Api/Accountinfo.js";

const getUser = (userId) => {
    return new Promise((resolve, reject) => {
        const user = USER_MAIN_DATA.find((user) => user.userId === userId);
        if (user) {
            resolve(user);
        } else {
            reject(new Error("Utilisateur non trouvé"));
        }
    });
};

export const userService = {
    getUser,
};
