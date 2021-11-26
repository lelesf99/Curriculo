import './style.css';

export default function LevelBar(props) {
    return (
        <div className='level-wrapp'>
            <div className='level-1 level' style={{ width: `${(props.level > 10 ? 10 : props.level) * 10}%` }}></div>
            <div className="level-2 level" style={{ width: `${(props.level > 10 ? props.level - 10 : 0) * 10}%` }}></div>
        </div>
    );
}