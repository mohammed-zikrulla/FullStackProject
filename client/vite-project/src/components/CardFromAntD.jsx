import { Card } from 'antd'
import React from 'react'
const { Meta } = Card;


function CardFromAntD({poster, title, description, ...props}) {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={
                <img
                    draggable={false}
                    alt="example"
                    src={poster}
                />
            }
        >
            <Meta title={title} />
        </Card>
    )
}

export default CardFromAntD

