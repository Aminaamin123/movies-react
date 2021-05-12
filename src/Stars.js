import React from 'react'

export default function Stars(props) {
    let stars = ""
    for (let i = 0; i < props.item.grade; ++i) {
        stars += (`<img src="/star.png" alt="Star" width="20px">`); 
    }
    return (
        <div dangerouslySetInnerHTML={{__html: stars}}></div>
    )
}
