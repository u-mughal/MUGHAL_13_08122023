import PropTypes from 'prop-types';
import './Account.css';

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

Account.propTypes = {
    title: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};


export default Account;