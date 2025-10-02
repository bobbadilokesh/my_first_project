import React from 'react'

function Skills() {
    return (
        <div>
            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-4">My Skills</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Soft Skills</h4>
                            <ul className="list-group">
                                <li className="list-group-item">Team Work</li>
                                <li className="list-group-item">Communication</li>
                                <li className="list-group-item">Team Management</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h4>Technical Skills</h4>
                            <ul className="list-group">
                                <li className="list-group-item">HTML</li>
                                <li className="list-group-item">CSS</li>
                                <li className="list-group-item">Java</li>
                                <li className="list-group-item">Catia</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
