import Polygons from '../layout/Polygons';
import s from './MyService.module.css';
import { FaReact } from 'react-icons/fa';
import { RiCodeBoxLine } from 'react-icons/ri';
import { SiAdobephonegap, SiMaterialdesign } from 'react-icons/si';
import { GiMechaMask } from 'react-icons/gi';
import { RiDatabase2Fill } from 'react-icons/ri';

export default function MyService() {
  return (
    <section className={s.section} id="myService">
      <p className={s.titleDescription}>what can I do</p>
      <h2 className={s.sectionTitle}>my service</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <h3 className={s.itemTitle}>web development</h3>
          <div className={s.imageWrapper}>
            <div className={s.imageOverlay}></div>
            <RiCodeBoxLine size="60" />
          </div>
          <p className={s.itemDescription}>
            Building web applications for smartphones, tablets and desktops is
            the best investment in a company's development. These versatile
            solutions simplify and streamline business processes for both owners
            and customers.
          </p>
        </li>
        <li className={s.item}>
          <h3 className={s.itemTitle}>adaptive design</h3>
          <div className={s.imageWrapper}>
            <div className={s.imageOverlay}></div>
            <SiAdobephonegap size="60" />
          </div>
          <p className={s.itemDescription}>
            Responsive layout changes page design based on user behavior,
            platform, screen size and device orientation and is an integral part
            of modern web development.
          </p>
        </li>
        <li className={s.item}>
          <h3 className={s.itemTitle}>React</h3>
          <div className={s.imageWrapper}>
            <div className={s.imageOverlay}></div>
            <FaReact size="60" />
          </div>
          <p className={s.itemDescription}>
            Build fast, responsive private collection web apps using React, a
            JavaScript library for building user interfaces.
          </p>
        </li>
        <li className={s.item}>
          <h3 className={s.itemTitle}>branding identity</h3>
          <div className={s.imageWrapper}>
            <div className={s.imageOverlay}></div>
            <GiMechaMask size="60" />
          </div>
          <p className={s.itemDescription}>
            Brands were conceived with the aim of increasing product credibility
            through product visibility. People trust familiar products more,
            which means they buy better. Building your brand, the first step to
            success.
          </p>
        </li>
        <li className={s.item}>
          <h3 className={s.itemTitle}>Data base</h3>
          <div className={s.imageWrapper}>
            <div className={s.imageOverlay}></div>
            <RiDatabase2Fill size="60" />
          </div>
          <p className={s.itemDescription}>
            Connecting and configuring external databases
          </p>
        </li>
        <li className={s.item}>
          <h3 className={s.itemTitle}>web design</h3>
          <div className={s.imageWrapper}>
            <div className={s.imageOverlay}></div>
            <SiMaterialdesign size="60" />
          </div>
          <p className={s.itemDescription}>
            A beautifully drawn, and most importantly, an easy-to-understand
            application for the user is 80% of success.
          </p>
        </li>
      </ul>
      <Polygons color={'bottomPolygons'} />
    </section>
  );
}
