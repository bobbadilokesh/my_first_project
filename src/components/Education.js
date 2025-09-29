import React from 'react'

function Education() {
    return (
        <div>
            <section class="container my-5">
                <h2 class="text-center mb-4">Education Qualifications</h2>
                <table class="table table-bordered table-hover text-center">
                    <thead class="table-dark">
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
        </div>
    )
}

export default Education
