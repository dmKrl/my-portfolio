import {
    selectIsOpenNavMenu,
    setIsOpenNavMenu,
} from '../../redux/navMenuSlice/navMenuSlice';
import s from '../Header/Header.module.css';
import { useDispatch, useSelector } from 'react-redux';

const BurgerMenu = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(selectIsOpenNavMenu);
    const toggleMenu = () => {
        dispatch(setIsOpenNavMenu());
    };
    return (
        <>
            <div
                className={`${s.burgerMenu} ${isOpen && s.burgerMenuFixed}`}
                onClick={() => toggleMenu()}
            >
                <div
                    className={`${s.burgerMenuLine} ${isOpen && s.open}`}
                ></div>
                <div
                    className={`${s.burgerMenuLine} ${isOpen && s.open}`}
                ></div>
                <div
                    className={`${s.burgerMenuLine} ${isOpen && s.open}`}
                ></div>
            </div>
        </>
    );
};

export default BurgerMenu;
