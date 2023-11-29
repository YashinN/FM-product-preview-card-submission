import styles from "./ProductCard.module.scss";
import productImageDesktop from "../../images/image-product-desktop.jpg";
import productImageMobile from "../../images/image-product-mobile.jpg";
import cartIcon from "../../images/icon-cart.svg";

const ProductCard = () => {
  return (
    <section className={styles.productCard}>
      <div className={styles.productCard__imgContainer}>
        <img
          src={productImageDesktop}
          className={styles.productCard__image}
          alt="Perfume"
        />
      </div>

      <article className={styles.productCard__productContent}>
        <span className={styles.productName}>perfume</span>
        <h1 className={styles.productTitle}>Gabrielle Essence Eau De Parfum</h1>
        <p className={styles.productDescription}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL
        </p>
        <div className={styles.pricingContainer}>
          <span
            className={`${styles.pricingContainer__price} ${styles.pricingContainer__price_main}`}
          >
            $149.99
          </span>
          <span
            className={`${styles.pricingContainer__price} ${styles.pricingContainer__price_sub}`}
          >
            $169.99
          </span>
        </div>

        <button className={styles.cartBtn}>
          <img src={cartIcon} alt="cart trolley" />
          Add to Cart
        </button>
      </article>
    </section>
  );
};

export default ProductCard;
