import './Features.css';
import PropTypes from 'prop-types';

/**
 * Composant représentant une fonctionnalité avec une image, un titre et une description.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.image - Le chemin de l'image représentant la fonctionnalité.
 * @param {string} props.alt - Texte alternatif pour l'image.
 * @param {string} props.title - Le titre de la fonctionnalité.
 * @param {string} props.description - La description de la fonctionnalité.
 * @returns {JSX.Element} - Le composant Features.
 */
const Features = ({ image, alt, title, description }) => {
    return (
        <>
            <h2 className='sr-only'>Features</h2>
            {/* Conteneur de l'élément de fonctionnalité */}
            <div className="feature-item">
                {/* Image représentant la fonctionnalité */}
                <img src={image} alt={alt} className="feature-icon"></img>
                {/* Titre de la fonctionnalité */}
                <h3 className="feature-item-title">{title}</h3>
                {/* Description de la fonctionnalité */}
                <p>{description}</p>
            </div>
        </>
    );
};

/**
 * Définition des types de propriétés attendues pour le composant Features.
 * @static
 * @type {Object}
 * @property {string} image - Le chemin de l'image (obligatoire).
 * @property {string} alt - Texte alternatif pour l'image (obligatoire).
 * @property {string} title - Le titre de la fonctionnalité (obligatoire).
 * @property {string} description - La description de la fonctionnalité (obligatoire).
 */
Features.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Features;