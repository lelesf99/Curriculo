import './style.css';
import { useRef, useState, useEffect } from 'react';

export default function LevelBar(props) {

    const levelRef = useRef();
    const [anim, setAnim] = useState(false);

    function isScrolledIntoView(el) {
        let rect = el.getBoundingClientRect();
        return (rect.top >= (0 - rect.height)) && (rect.bottom <= (window.innerHeight + rect.height));
    }

    useEffect(() => {
        setAnim(isScrolledIntoView(levelRef.current));
    }, [props.scroll])

    return (
        <div className='level-wrapp' ref={levelRef}>
            <div className={`level level-1 ${anim ? 'anim' : ''}`} style={{ width: `${(props.level > 10 ? 10 : props.level) * 10}%` }}></div>
            <div className={`level level-2 ${anim ? 'anim' : ''}`} style={{ width: `${(props.level > 10 ? props.level - 10 : 0) * 10}%` }}></div>
        </div>
    );
}