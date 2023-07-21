import s from "./Customize.module.scss";
import orange_ninja from "../image/orange_ninja.png";
import fire from "../image/fire.svg";
import orange_ninja_mini from "../image/orange_ninja_mini.png";
import kovboy from "../image/kovboy.png";
import nemec from "../image/nemec.png";

const Customize = () => {
  return (
    <div className={s.customize}>
      <div className={s.customize_image}>
        <img className={s.customize_image_img} src={orange_ninja} alt="image" />
      </div>
      <div className={s.customize_info}>
        <p className={s.customize_info_logo}>
          <img src={fire} alt="icon" /> FUTURE OF ESPORTS
        </p>
        <p className={s.customize_info_title}>Customize Your Own Character</p>
        <p className={s.customize_info_subtitle}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae.
        </p>
        <div className={s.customize_info_gallery}>
          <div className={`${s.customize_info_gallery_item} ${s.active}`}>
            <img src={orange_ninja_mini} alt="image" />
          </div>
          <div className={s.customize_info_gallery_item}>
            <img src={kovboy} alt="image" />
          </div>
          <div className={s.customize_info_gallery_item}>
            <img src={nemec} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
