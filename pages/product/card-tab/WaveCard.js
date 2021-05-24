import styles from "/styles/product/FinnqCard.module.scss";


export default function WaveCard(){
    return (
        <article className="contents-details">
            <div className="contents-visual">
                <p className="visual-title">
                    웨이브 구독만 하면
                    <br />누구나 파도치는
                    <br />혜택!
                </p>
            </div>
            <div className="desc-wrap">
                <div className="item-desc">detail 1</div>
            </div>
            <div className="desc-wrap">
                <div className="item-desc">detail 2</div>
            </div>
            <div className="desc-wrap">
                <div className="item-desc">detail 3</div>
            </div>
        </article>
    )
}