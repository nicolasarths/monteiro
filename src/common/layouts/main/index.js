import Header from "./Header";
import Footer from "./Footer";
import styles from "./MainLayout.module.sass";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
