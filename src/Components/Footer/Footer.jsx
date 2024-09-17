import React from "react";
import '../Footer/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Vitan</h4>
          <p>Vitan is a premium tea brand offering 20+ unique products crafted to perfection. Enjoy the richness and variety of our collection.</p>
        </div>

        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li>Green Tea</li>
            <li>Herbal Tea</li>
            <li>Black Tea</li>
            <li>Oolong Tea</li>
            <li>Tea Blends</li>
            <li>View All Products</li>  {/* Add a link to your products page */}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Vitan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
