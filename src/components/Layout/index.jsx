import LoginModal from '../auth/login';
import RegisterModal from '../auth/register';
import SearchModal from '../SearchModal';
import Footer from './Footer';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
// import VipUpgradeTag from './VipUpgradeTag';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <MobileNavbar />
    <LoginModal />
    <RegisterModal />
    <SearchModal />
    {children}
    {/* {router.pathname !== '/profile' && <VipUpgradeTag />} */}
    <Footer />
    <ScrollToTop />
  </>
);

export default Layout;
