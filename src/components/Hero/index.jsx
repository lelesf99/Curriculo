import './style.css';

export default function Hero(props) {
    return (
        <div className="hero"
            style={{
                backgroundImage: `url(${props.img})`,
                backgroundPositionY: `${props.imgScrollStart + (props.scroll * props.imgScrollAmount)}%`
            }}
        >
            <h1 className='title'>{props.title}</h1>
            <h4 className='sub-title'>{props.subTitle}</h4>
        </div>
    );
}