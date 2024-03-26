import Info from '../../components/Info/Info';
import MarqueeFrontDev from '../../components/Marquee/MarqueeFrontDev';
import Welcome from '../../components/Welcome/Welcome';
import s from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={s.homeContainer}>
            <Welcome />
            <MarqueeFrontDev />
            <Info />
        </div>
    );
};

export default HomePage;
