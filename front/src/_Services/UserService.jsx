import accountinfo from "@/Assets/Api/Accountinfo.json";

const getUser = async (userId) => {
    try {
        const user = accountinfo.find((user) => user.userId === userId);
        return user;
    } catch (error) {
        throw new Error("Utilisateur non trouvé");
    }
};

export const userService = {
    getUser,
};
