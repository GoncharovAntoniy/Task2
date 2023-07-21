import s from "./Latest.module.scss";
import fire from "../image/fire_2.svg";
import colts from '../image/colts.png'
import navi from '../image/navi.png'
import picture from '../image/picture.png'
import razer from '../image/razer.png'
import RX from '../image/RX.png'

const Latest = () => {
  return (
    <div className={s.latest}>


      <div className={s.latest_news}>
        <div className={s.latest_news_container}>
          <p className={s.latest_news_container_title}>
            <img className={s.latest_news_container_title_logo} src={fire} alt="icon" /> FUTURE OF ESPORTS
          </p>
          <p className={s.latest_news_container_subtitle}>Latest News & Articles</p>
        </div>
        <button className={s.latest_news_button}>Read More</button>
      </div>

        <div className={s.latest_gallery}>


            <div className={s.latest_gallery_bigElem}>
                <img className={s.latest_gallery_bigElem_image} src={colts} alt="image" />
                <p className={s.latest_gallery_bigElem_title}>April 2, 2021</p>
                <p className={s.latest_gallery_bigElem_subtitle}>Esports Group Teams Up With The Indianapolis Colts</p>
            </div>


            <div className={s.latest_gallery_smallElems}>
                <div className={s.latest_gallery_smallElems_elem}>
                    <img className={s.latest_gallery_smallElems_elem_image} src={navi} alt="image" />
                    <p className={s.latest_gallery_smallElems_elem_title}>April 2, 2021</p>
                    <p className={s.latest_gallery_smallElems_elem_subtitle}>NAVI reveals s1mple fifth anniversary</p>
                </div>
                <div className={s.latest_gallery_smallElems_elem}>
                    <img className={s.latest_gallery_smallElems_elem_image} src={picture} alt="image" />
                    <p className={s.latest_gallery_smallElems_elem_title}>April 2, 2021</p>
                    <p className={s.latest_gallery_smallElems_elem_subtitle}>A1esports Shares new picture</p>
                </div>
                <div className={s.latest_gallery_smallElems_elem}>
                    <img className={s.latest_gallery_smallElems_elem_image} src={razer} alt="image" />
                    <p className={s.latest_gallery_smallElems_elem_title}>April 2, 2021</p>
                    <p className={s.latest_gallery_smallElems_elem_subtitle}>T1 unveil partnership with Razer</p>
                </div>
                <div className={s.latest_gallery_smallElems_elem}>
                    <img className={s.latest_gallery_smallElems_elem_image} src={RX} alt="image" />
                    <p className={s.latest_gallery_smallElems_elem_title}>April 2, 2021</p>
                    <p className={s.latest_gallery_smallElems_elem_subtitle}>RX secures content partnership with</p>
                </div>
            </div>
            
        </div>

    </div>
  );
};

export default Latest;
