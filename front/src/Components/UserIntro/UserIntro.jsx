import "./UserIntro.css"

const UserIntro = () => {
    return (
        <div className="header">
            <h1>Welcome back <br /> Pedrolito (non connecté à API)</h1>
            <button className="edit-button">Edit Name</button>
        </div>
    );
};

export default UserIntro;