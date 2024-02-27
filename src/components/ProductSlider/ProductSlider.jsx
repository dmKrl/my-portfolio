import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectCardItem from '../UI/ProjectCardItem/ProjectCardItem';
import projectData from '../../../projectData.json';
import '../../App.css';

const ProductSlider = () => {
    console.log(window.innerWidth);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '100px 20px',
        slidesToScroll: 3,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 0,
                    focusOnSelect: false,

                    // centerPadding: '100px 20px',
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    focusOnSelect: false,

                    // centerPadding: '100px 20px',
                },
            },
            {
                breakpoint: 787,
                swipe: false,
            },
        ],
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
