import './Footer.css'

/**
 * Composant représentant le pied de page de l'application.
 * @component
 * @returns {JSX.Element} - Le composant Footer.
 */
const Footer = () => {
    return (
        <footer className="footer">
            {/* Texte de copyright dans le pied de page */}
            <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
    );
};

export default Footer;
