import React from 'react'
import './TechSkills.css'
import TechSkillsList from '../../utils/TechSkillsList'

const TechSkills = () => {
    return (
        <>
            <div className="container skills-container-div">
                <h1>Tech Skills</h1>
                <hr />
                <p>
                    👉 incuding programming languages , frameworks , databases ,frontend and backend bevelopment tools , and Apis
                </p>
                <div className="Skills">
                    {
                        TechSkillsList.map(i => {
                            return (<h5>{i.name}</h5>)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TechSkills