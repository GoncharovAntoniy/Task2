import s from "./Unleash.module.scss";
import logo_header from "../image/logo_header.png";
import cart from "../image/IMAGE.svg";
import cart_count from "../image/Frame.svg";
import fire from "../image/fire_2.svg";
import game_image from '../image/Game_IMAGE.png'
import underline from '../image/underline.svg'

const Unleash = () => {
  return (
    <div className={s.unleash}>
      <div className={s.unleash_color_reight}></div>
      <div className={s.unleash_header}>
        <img className={s.unleash_header_logo} src={logo_header} alt="image" />
        <ul className={s.unleash_header_list}>
          <li className={`${s.unleash_header_list_item} ${s.active}`}>Home</li>
          <li className={s.unleash_header_list_item}>About</li>
          <li className={s.unleash_header_list_item}>Team</li>
          <li className={s.unleash_header_list_item}>Shop</li>
          <li className={s.unleash_header_list_item}>Pages</li>
        </ul>
        <div className={s.unleash_header_contact}>
          <img
            className={s.unleash_header_contact_cart}
            src={cart}
            alt="icon"
          />
          <img
            className={s.unleash_header_contact_counter}
            src={cart_count}
            alt="icon"
          />
          <button className={s.unleash_header_contact_button}>
            Contact Us
          </button>
        </div>
      </div>

      <div className={s.unleash_content}>
        <div className={`${s.unleash_content_item} ${s.network_container}`}>
          <p className={s.unleash_content_item_network}>twitch</p>
          <p className={s.unleash_content_item_network}>instagram</p>
          <p className={s.unleash_content_item_network}>facebook</p>
        </div>
        <div className={s.unleash_content_item}>
          <div className={s.unleash_content_item_info}>
            <p className={s.unleash_content_item_info_title}>
              <img src={fire} alt="icon" /> FUTURE OF ESPORTS
            </p>
            <p className={s.unleash_content_item_info_subtitle}>
              <img className={s.unleash_content_item_info_subtitle_underline} src={underline} alt="icon" />
              Unleash The Next Generation Of Gaming
            </p>
            <p className={s.unleash_content_item_info_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis,
              nec donec in morbi pulvinar. Enim non pulvinar neque.
            </p>
            <div className={s.unleash_content_item_info_buttons}>
              <button
                className={s.unleash_content_item_info_buttons_buttonOne}>Explore More</button>
              <button
                className={s.unleash_content_item_info_buttons_buttonTwo}>View our team</button>
            </div>
          </div>
        </div>
        <div className={s.unleash_content_item}>
          <img className={s.gameimage} src={game_image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Unleash;
