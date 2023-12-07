import { Card } from "./card.jsx";

export function CardContainer(){
    const card = []
    return (
        <>
            <div id="productos-container">
                {card.map((card) => {
                    return <Card card={card}></Card>
                })}
            </div>
        </>
    )
}