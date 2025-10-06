import React from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';  
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <div className="container bg-primary text-white text-center p-5 my-3">
                <h1 className="display-4">Welcome to My Portfolio </h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quod! lorem20
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quod! lorem20
                </p>
            </div>
            <section className="container my-5">
                <div className="row align-items-center">
                
                    <div className="text-center">
                        <h2>About Me</h2>
                        <p><b>I am B. Lokesh, currently learning HTML and building my technical skills. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Exercitationem soluta quos minus voluptate natus incidunt qui sit reiciendis
                            excepturi a? Consequatur, magnam ratione explicabo neque placeat facilis quisquam laboriosam
                            exercitationem.</b></p>
                    </div>
                </div>
            </section>
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
            <section className="container my-5">
                <h2 className="text-center mb-4">Education Qualifications</h2>
                <table className="table table-bordered table-hover text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>Qualifications</th>
                            <th>School/College</th>
                            <th>Passed Out</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>B.Tech (Mech)</td>
                            <td>Lendi Engineering College</td>
                            <td>2025</td>
                        </tr>
                        <tr>
                            <td>Diploma (Mech)</td>
                            <td>Chaitanya Engineering College</td>
                            <td>2022</td>
                        </tr>
                        <tr>
                            <td>10th</td>
                            <td>Sai Deepthi Public School</td>
                            <td>2019</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Registration Form</h2>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter username"></input>
                        </div>
                        <div className="col-md-6">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email"></input>
                        </div>
                        <div className="col-md-6">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password"></input>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Gender</label><br></br>
                                <div className="form-check form-check-inline">
                                    <input type="radio" className="form-check-input" name="gender" id="male" value="male"></input>
                                        <label className="form-check-label" for="male">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio" className="form-check-input" name="gender" id="female" value="female"></input>
                                        <label className="form-check-label" for="female">Female</label>
                                </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Hobbies</label><br></br>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="reading" value="reading"></input>
                                        <label className="form-check-label" for="reading">Reading Books</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="cricket" value="cricket"></input>
                                        <label className="form-check-label" for="cricket">Playing Cricket</label>
                                </div>
                        </div>
                        <div className="col-md-6">
                            <label for="dob" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" id="dob"></input>
                        </div>
                        <div className="col-md-6">
                            <label for="language" className="form-label">Favourite Language</label>
                            <select className="form-select" id="language">
                                <option value="c">C Language</option>
                                <option value="c++">C++ Language</option>
                                <option value="python">Python Language</option>
                                <option value="java">Java Language</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label for="resume" className="form-label">Upload Resume</label>
                            <input type="file" className="form-control" id="resume"></input>
                        </div>
                        <div className="col-12 text-center ">
                            <button type="submit" className="btn btn-primary">Enroll</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </form>
                </div>
            </section>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                <div className="col">
                    <div className="card">
                        <img src={img1} className="card-img-top " style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img2} className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img3} className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img4} className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img5} className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img6} className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img7} className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img8} className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img9} className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img10} className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
