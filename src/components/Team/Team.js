import React from 'react'

import './Team.css'

import michael from '../../photos/michael.jpg'
import placeholder from '../../photos/placeholder.png'
import mischief from '../../photos/mischief.jpg'
import braimah from '../../photos/braimah.jpg'
import fatoke from '../../photos/fatoke.jpeg'
import janet from '../../photos/janet.jpg'
import falomo from '../../photos/falomo.jpg'
import etin from '../../photos/etin.jpg'
import ekene from '../../photos/ekene.jpg'
import juachi from '../../photos/juachi.jpg'
import deji from '../../photos/deji.jpg'
import ore from '../../photos/ore.jpeg'

const Team = () => {
    let teamState = [
        {
            name: "Michael Okeyode",
            bio: "There comes a time when we heed a certain call.",
            website: "",
            role: "Archangel",
            description: "I provide support to people who need help and verify their details.",
            photo: michael,
        },
        {
            name: "Irabor Justin",
            bio: "Digital spider. On the web. Spinning yarns.",
            website: "https://thevunderkind.com",
            role: "Angel",
            description: "Contributed to the source code.",
            photo: mischief,
        },
        {
            name: "Braimah Hakeem",
            bio: "Just a fun guy hell-bent on contributing his quota of goodwill to the lives of people. In my free time, I pretend to be abusiness/engineering and tech guy.",
            website: "",
            role: "Archangel",
            description: "I provide support to people who need help and verify their details.",
            photo: braimah,
        },
        {
            name: "Oluwabamise Fatoke",
            bio: "Human. Lawyer. Analyst.",
            website: "",
            role: "Archangel",
            description: "I provide support to people who need help and verify their details.",
            photo: fatoke,
        },
        {
            name: "Janet John",
            bio: "Seasonal hermit.",
            website: "https://medium.com/janetsomehow",
            role: "Archangel",
            description: "I provide support to people who need help and verify their details.",
            photo: janet,
        },
        {
            name: "Olumide Falomo",
            bio: "Dev. Fantasy Nerd. Lightbringer.",
            website: "",
            role: "Angel",
            description: "Contributed to the source code.",
            photo: falomo,
        },
        {
            name: "Etin Obaseki",
            bio: "A Software Engineer whose current life motto is Live, Learn, Loop. I seek experiences that improve me.",
            website: "https://notes.etin.space",
            role: "Angel",
            description: "Contributed to the source code.",
            photo: etin,
        },
        {
            name: "Ekene Bismarck-Anumudu",
            bio: "",
            website: "",
            role: "Archangel",
            description: "I provide support to people who need help and verify their details.",
            photo: ekene,
        },
        {
            name: "Ore Ogundipe",
            bio: "Software Engineer constantly trying to focus only on things I can control.",
            website: "https://oreogundipe.dev",
            role: "Angel",
            description: "Contributed to the source code.",
            photo: ore,
        },
        {
            name: "Juachi Obi",
            bio: "Designer, Artist, Architect",
            website: "https://www.ateliernoyaka.com",
            role: "Archangel",
            description: "I provide support to people who need help and verify their details.",
            photo: juachi,
        },
        {
            name: "Deji Akanji",
            bio: "Curious.",
            website: "",
            role: "Angel",
            description: "Contributed to the source code.",
            photo: deji,
        },

    ]
    return (
        <div className="App">
            <h1 id="Team">Team</h1>
            <div className="Angels">
                {teamState && teamState.map((teammate, index) => (
                    <div key={index} className="Archangels">
                        <img style={{ height: '100px' }} src={teammate.photo ? teammate.photo : placeholder} alt={teammate.name} />
                        <h2>{teammate.name}</h2>
                        {/* <h3>{teammate.bio}</h3> */}
                        <h3>{teammate.role}</h3>
                        <p>{teammate.description}</p>
                        <p>{teammate.website ? <a href={teammate.website}>Personal page</a> : null}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team