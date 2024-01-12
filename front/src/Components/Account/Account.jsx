import PropTypes from 'prop-types';
import './Account.css';

/**
 * Composant représentant un compte avec son titre, son solde total et son type.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.title - Le titre du compte.
 * @param {string} props.total - Le solde total du compte.
 * @param {string} props.type - Le type de compte.
 * @returns {JSX.Element} - Le composant Account.
 */
const Account = ({ title, total, type }) => {
    return (
        <section className='account'>
            <div className='account-content-wrapper'>
                <h3 className='account-title'>{title}</h3>
                <p className='account-amount'>${total}</p>
                <p className='account-amount-description'>{type}</p>
            </div>
            <div className='account-content-wrapper cta'>
                <button className='transaction-button'>View transactions</button>
            </div>
        </section>
    );
};

/**
 * Définition des types de propriétés attendues pour le composant Account.
 * @static
 * @type {Object}
 * @property {string} title - Le titre du compte (obligatoire).
 * @property {string} total - Le solde total du compte (obligatoire).
 * @property {string} type - Le type de compte (obligatoire).
 */
Account.propTypes = {
    title: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Account;
