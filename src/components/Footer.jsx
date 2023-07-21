import s from "./Footer.module.scss";
import logo from "../image/logo_header.png";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer_item}>
        <img className={s.footer_item_logo} src={logo} alt="icon" />
        <p className={s.footer_item_text}>
          Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
          quam ac sed turpis volutpat. Cursus sed massa non .
        </p>
      </div>
      <div className={s.footer_item}>
        <p className={s.footer_item_title}>Menu Items</p>
        <ul className={s.footer_item_list}>
            <li className={s.footer_item_list_elem}>About</li>
            <li className={s.footer_item_list_elem}>Blog</li>
            <li className={s.footer_item_list_elem}>Shop</li>
            <li className={s.footer_item_list_elem}>Contact us</li>
        </ul>
      </div>
      <div className={s.footer_item}>
        <p className={s.footer_item_title}>Other Pages</p>
        <ul className={s.footer_item_list}>
            <li className={s.footer_item_list_elem}>Styleguide</li>
            <li className={s.footer_item_list_elem}>Changelog</li>
            <li className={s.footer_item_list_elem}>licenses</li>
            <li className={s.footer_item_list_elem}>Team</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
