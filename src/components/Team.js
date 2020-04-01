import React from 'react'
import '../App.css'
import michael from '../photos/michael.jpg'
import placeholder from '../photos/placeholder.png'
import mischief from '../photos/mischief.jpg'

const Team = () => {
    let teamState = [
        {
            name: "Michael Okeyode",
            bio: "There comes a time when we heed a certain call.",
            website: "",
            role: "Archangel",
            description: "I give support to the people who need help and verify their details.",
            photo: michael,
        },
        {
            name: "Irabor Justin",
            bio: "Digital spider. On the web. Spinning yarns.",
            website: "thevunderkind.com",
            role: "Angel",
            description: "Contributed to the source code.",
            photo: mischief,
        }
    ]
    return(
        <div className="Angelcover">
            <h1 id="Team">Team</h1>
        <div className="Angels">
            {teamState && teamState.map((teammate)=>(
                <div className="Archangels">
                <img src={teammate.photo? teammate.photo: placeholder} alt={teammate.name}/>
                <h2>{teammate.name}</h2>
                {/* <h3>{teammate.bio}</h3> */}
                {/* <h3>{teammate.role}</h3> */}
                <p>{teammate.description}</p>
            <p>{teammate.website? teammate.website: null}</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Team