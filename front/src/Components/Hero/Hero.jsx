import "./Hero.css"

/**
 * Composant représentant la section héroïque de la page.
 * @component
 * @returns {JSX.Element} - Le composant Hero.
 */
const Hero = () => {
  return (
      <div className='hero'>
          {/* Conteneur principal de la section héroïque */}
          <section className='hero-content'>
              <h2 className='sr-only'>Promoted Content</h2>
              {/* Sous-titres promouvant les avantages de la banque */}
              <p className='subtitle'>No fees.</p>
              <p className='subtitle'>No minimum deposit.</p>
              <p className='subtitle'>High interest rates.</p>
              {/* Texte d'invitation à ouvrir un compte d'épargne */}
              <p className='text'>Open a savings account with Argent Bank today!</p>
          </section>
      </div>
  );
};

export default Hero;
