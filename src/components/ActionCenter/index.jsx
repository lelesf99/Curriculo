import './style.css';

import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdLanguage, MdLightMode, MdOutlineFileDownload } from 'react-icons/md';

export default function ActionCenter(props) {

    const [active, setActive] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : true);
    const [lang, setLang] = useState(true);

    const toggleActive = () => setActive(!active);
    const downloadPdf = (comp) => {};

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
        if (theme) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    }, [theme]);
    return (
        <div className='action-center'>
            <button onClick={() => toggleActive()}
                className={`action-btn mobile-nav-toggle ${active ? 'shown' : 'hidden'}`}>
                <span className="three-lines"></span>
            </button>
            {
                !theme ?
                    <button className={`action-btn theme-btn  ${active ? 'shown' : 'hidden'}`} tabIndex={active ? 0 : -1} onClick={() => setTheme(true)}>
                        <MdDarkMode />
                    </button> :
                    <button className={`action-btn theme-btn  ${active ? 'shown' : 'hidden'}`} tabIndex={active ? 0 : -1} onClick={() => setTheme(false)}>
                        <MdLightMode />
                    </button>
            }
            <button className={`action-btn lang-btn  ${active ? 'shown' : 'hidden'}`} tabIndex={active ? 0 : -1} onClick={() => {
                props.toggleLang(!lang);
                setLang(!lang);
            }}>
                <MdLanguage />
            </button>
            <a href="/resume.pdf" download="Resume.pdf" className={`action-btn pdf-btn  ${active ? 'shown' : 'hidden'}`} onClick={downloadPdf()}>
                <MdOutlineFileDownload />
            </a>
        </div>
    );
}