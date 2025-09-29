import React from 'react'

function Register() {
    return (
        <div>
            <section class="bg-light py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Registration Form</h2>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" placeholder="Enter username"></input>
                        </div>
                        <div class="col-md-6">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email"></input>
                        </div>
                        <div class="col-md-6">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter password"></input>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Gender</label><br></br>
                                <div class="form-check form-check-inline">
                                    <input type="radio" class="form-check-input" name="gender" id="male" value="male"></input>
                                        <label class="form-check-label" for="male">Male</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input type="radio" class="form-check-input" name="gender" id="female" value="female"></input>
                                        <label class="form-check-label" for="female">Female</label>
                                </div>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Hobbies</label><br></br>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="reading" value="reading"></input>
                                        <label class="form-check-label" for="reading">Reading Books</label>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="cricket" value="cricket"></input>
                                        <label class="form-check-label" for="cricket">Playing Cricket</label>
                                </div>
                        </div>
                        <div class="col-md-6">
                            <label for="dob" class="form-label">Date of Birth</label>
                            <input type="date" class="form-control" id="dob"></input>
                        </div>
                        <div class="col-md-6">
                            <label for="language" class="form-label">Favourite Language</label>
                            <select class="form-select" id="language">
                                <option value="c">C Language</option>
                                <option value="c++">C++ Language</option>
                                <option value="python">Python Language</option>
                                <option value="java">Java Language</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="resume" class="form-label">Upload Resume</label>
                            <input type="file" class="form-control" id="resume"></input>
                        </div>
                        <div class="col-12 text-center">
                            <button type="submit" class="btn btn-primary">Enroll</button>
                            <button type="reset" class="btn btn-secondary">Reset</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Register
