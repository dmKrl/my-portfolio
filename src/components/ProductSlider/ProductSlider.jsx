import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectCardItem from '../UI/ProjectCardItem/ProjectCardItem';
import projectData from '../../../projectData.json';
import '../../App.css';
// import SlickButtonNext from '../UI/SlickButtonNext/SlickButtonNext';
// import SlickButtonPrev from '../UI/SlickButtonPrev/SlickButtonPrev';

const ProductSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '100px 20px',
        slidesToScroll: 1,
        focusOnSelect: true,
        // nextArrow: <SlickButtonNext />,
        // prevArrow: <SlickButtonPrev />,
    };

    return (
        <Slider {...settings}>
            {projectData.map((projectInfo) => {
                return (
                    <ProjectCardItem
                        projectInfo={projectInfo}
                        key={projectInfo.id}
                    />
                );
            })}
        </Slider>
    );
};

export default ProductSlider;
