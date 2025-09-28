import React from 'react';
import gitHub from "../../assets/icons/gitHub.svg";
import './Contact.scss';

const Contact = () => (
    <div className={'contact'}>

        <a style={{marginBottom: '100px', cursor: 'pointer'}} target={'_blank'} href={'https://github.com/WolfFoxColony'}>
            <img className={'contact_img'} src={gitHub} alt="gitHub"/>
        </a>
    </div>
);

export default Contact;