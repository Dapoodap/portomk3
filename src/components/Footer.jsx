const Footer = () => {
    return (
        <>
            <div className="Footer ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>Daffa</span> Radhitya</h3>
                            <p className="my-2 py-2">Feels free to email me for ask something or try to connect with me. I'm also open for feedback and suggestion. So dont mind to hit me up</p>
                            <div className="footer-icons my-2">
                                <i className="fa-brands fa-github" style={{ marginLeft:'0' }}></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Education & Experience</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portofolio</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i className="fa-solid fa-phone-volume"></i> +62 895360965318</p>
                            <p><i className="fa-solid fa-envelope"></i> daffasven@gmail.com</p>
                            <p><i className="fa-solid fa-paper-plane"></i> Central Java, Indonesia.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Copyright@DaffaRadhitya2024</p>
            </div>
        </>
    )
}

export default Footer