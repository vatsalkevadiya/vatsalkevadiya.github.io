import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            WELCOME TO MY <span className={s.purple}> PROTFOLIO </span>{' '}
            WEBSITE
          </h1>

          <div className={s.description}>
            <p>
            Where you'll find a glimpse into my passion for web development. 
              <br/>The projects I've worked on <i><b className={s.purple}>recently.</b></i> 🤷‍♂️
            </p>

            <p>
            I specialize in building<i><b className={s.purple}> Dynamic, Interactive Web Applications </b></i> using a variety of technologies including <br/>
            <i><b className={s.purple}>React, PHP, MongoDB, SQL, and JavaScript.</b></i><br/>
            My experience in these technologies allows me to create <i><b className={s.purple}>Robust and Efficient solutions</b></i> for my clients and users. <br/>
            Browse through my portfolio and you'll see the dedication and attention to detail that I bring to every project. <br/>
            </p>

            <p>
            Thank you for visiting and I look forward to impressing you with my skills.
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/vatsalkevadiyagit"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/vatsalkevadiya"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
