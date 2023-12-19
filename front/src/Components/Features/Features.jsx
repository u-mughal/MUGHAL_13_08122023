import './Features.css';
import PropTypes from 'prop-types';

const Features = ({ image, alt, title, description }) => {
    return (
        <>
            <h2 className='sr-only'>Features</h2>
            <div className="feature-item">
                <img src={image} alt={alt} className="feature-icon"></img>
                <h3 className="feature-item-title">{title}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

Features.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Features;