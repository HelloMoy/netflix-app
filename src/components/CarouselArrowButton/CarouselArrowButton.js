import useElementOnScreen from '../../customHooks/useElementOnScreen';
import { moveScrollHorizontal } from '../../services/';
import Arrow from '../../assets/icons/svgComponents/Arrow';
import styles from './CarouselArrowButton.module.css';
import { useSelector } from 'react-redux';
import { selectIsMobileDevice } from '../../redux/slices/initialStatusSlice';

const CarouselArrowButton = ({
    isRightArrow = false,
    carouselRef,
    carouselChildRef,
    onHoverCarousel
}) => {

    const isMobileDevice = useSelector(selectIsMobileDevice);

    const useElementOnScreenOptions = {
        threshold: 1
    };

    const carouselChildIsHidden = !useElementOnScreen(useElementOnScreenOptions, carouselChildRef);

    const handlerMoveHorizaontalScrolling = (event) => {
        const elementClassList = event.target.classList;
        const forwardClass = 'arrowButton__frontLayer__forward';
        const backClass = 'arrowButton__frontLayer__back';
        const offsetPixels = 800;
        moveScrollHorizontal(elementClassList, carouselRef, forwardClass, backClass, offsetPixels);
    }

    const hanlerShowArrowButton = () => {
        return (!isMobileDevice && carouselChildIsHidden && onHoverCarousel)
    };

    return (
        <div
            className={
                `${styles.arrowButton} ${isRightArrow ? styles.arrowButton__forward : ''} ${(hanlerShowArrowButton()) ? styles.arrowButton__show : ''}`
            }

        >
            <div className={`${styles.arrowButton__iconContainer}`}>
                <Arrow
                    className={styles.arrowButton__icon}
                />
            </div>
            <div
                className={`${styles.arrowButton__frontLayer} ${isRightArrow ? 'arrowButton__frontLayer__forward' : 'arrowButton__frontLayer__back'}`}
                onClick={handlerMoveHorizaontalScrolling}
            ></div>
        </div>
    );
};

export default CarouselArrowButton;
