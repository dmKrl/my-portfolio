// import { useEffect } from 'react';
import Info from '../../components/Info/Info';
import MarqueeFrontDev from '../../components/Marquee/MarqueeFrontDev';
import Welcome from '../../components/Welcome/Welcome';
import s from './HomePage.module.css';
// import { useRef } from 'react';
// import { useSelector } from 'react-redux';
// import { selectPathLink } from '../../redux/pathLinkSlice/pathLinkSlice';
const HomePage = () => {
    // const ref = useRef('');
    // const pathLink = useSelector(selectPathLink);
    // useEffect(() => {
    //     ref.current = pathLink;
    //     ref.current?.scrollIntoView({ behavior: 'smooth' });
    //     window.scrollBy(ref.current);
    // }, [ref, pathLink]);
    return (
        <div className={s.homeContainer}>
            <Welcome />
            <MarqueeFrontDev />
            <Info />
        </div>
    );
};

export default HomePage;
