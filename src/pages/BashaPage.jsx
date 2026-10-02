import { ArrowRight, Home, Menu, Search, ShoppingBag, ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", icon: Home },
  { label: "Shop", icon: ShoppingBag },
  { label: "About", icon: null },
  { label: "Your Cart", icon: ShoppingCart },
  { label: "Contact", icon: null },
];

const BashaPage = () => {
  return (
    <div className="basha-page">
      <header className="basha-header">
        <div className="basha-shell basha-nav">
          <nav className="basha-nav-links" aria-label="Main navigation">
            {navItems.map(({ label, icon: Icon }) => (
              <a key={label} href="#" className={label === "Home" ? "basha-nav-link basha-nav-link--active" : "basha-nav-link"}>
                {Icon ? <Icon aria-hidden="true" size={17} /> : null}
                <span>{label}</span>
              </a>
            ))}
          </nav>

          <div className="basha-brand" aria-label="Basha brand">Basha<span>.</span></div>

          <div className="basha-actions" aria-label="Store actions">
            <button type="button" className="basha-icon-button" aria-label="Search">
              <Search size={18} />
            </button>
            <button type="button" className="basha-icon-button basha-cart-button" aria-label="Shopping cart">
              <ShoppingCart size={18} />
              <span className="basha-cart-count">0</span>
            </button>
            <button type="button" className="basha-icon-button" aria-label="Account">
              <UserRound size={18} />
            </button>
            <button type="button" className="basha-menu-button" aria-label="Open menu">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <main className="basha-shell basha-hero">
        <div className="basha-copy">
          <p className="basha-discount">UP TO 20% DISCOUNT ON</p>
          <h1>Girl&apos;s Fashion</h1>
          <p className="basha-description">
            Discover the latest trends and express your unique style with our women&apos;s
            Fashion website. Explore curated collections, shop the hottest looks, and find
            your perfect outfit for any occasion.
          </p>

          <div className="basha-cta-row">
            <a href="https://bashs-ecommerce-frontend.vercel.app/" target="_blank" rel="noreferrer" className="basha-button">
              EXPLORE NOW
            </a>
            <Link to="/" className="basha-back-link">
              Back to portfolio
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="basha-visual" aria-label="Fashion model preview">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
            alt="Woman in a red coat and black hat"
          />
        </div>
      </main>
    </div>
  );
};

export default BashaPage;
