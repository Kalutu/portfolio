import React from "react"

export default function Footer(){
    return (
        <div className="container-fluid bg-dark text-white py-4">
            <div className="container">
                <div className="text-center mb-3 mb-md-0">
                        &copy; <a className="border-bottom text-secondary" href="#">Kalutu Daniel</a>, All Right Reserved.
                </div>
                {/* <div className="row"> */}
                    {/* <div className="col-md-6 text-center text-md-end">
                        Designed By <a className="border-bottom text-secondary" href="https://htmlcodex.com">HTML Codex</a>
                        <br/>Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                    </div> */}
                {/* </div> */}
            </div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    )
}