import React from 'react'

function Register() {
    return (
        <div>
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
        </div>
    )
}

export default Register
