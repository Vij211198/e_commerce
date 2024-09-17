import React from "react";
import '../Components/WelcomeAside.css'
import lota from '../assets/Tea/ingred.png'
const WelcomeAside = () => {
  return (
    <aside className="welcome-aside">
      <section className="welcome-section">
        <div className="MainLeft w-100vw ">
        <h1>Welcome to Vitan</h1>
        <p>
          Discover the finest selection of teas sourced from around the world. 
          Whether you're a casual tea drinker or a connoisseur, Vitan has something 
          to satisfy your taste. With over 20 premium tea products, we bring a rich, 
          flavorful experience to your cup.
        </p>
        <button>Explore More </button>
        </div>
        
        <div className="image"><img src={lota} alt="" /></div>
      </section>
    </aside>
  );
};

export default WelcomeAside;
