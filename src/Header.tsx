const Header = ()=>{
    return(                <div className="resume-header">
    <div className="row align-items-center">
        <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
            <h2 className="resume-name mb-0 text-uppercase">Karim K. Kanji</h2>
            <div className="resume-tagline mb-3 mb-md-0">
                Senior React.JS Developer
            </div>
        </div>
        {/*//resume-title*/}
        <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
            <h6>Contact Information</h6>
            <ul className="list-unstyled mb-0">
                <li className="mb-2">
                    <i className="fas fa-phone-square fa-fw fa-lg mr-2 " />
                    <a className="resume-link" href="tel:+254703756325">
                        +254 703 756 325
                    </a>
                </li>
                <li className="mb-2">
                    <i className="fas fa-envelope-square fa-fw fa-lg mr-2" />
                    <a
                        className="resume-link"
                        href="mailto:karimkanji101@gmail.com"
                    >
                        karimkanji101@gmail.com
                    </a>
                </li>
                <li className="mb-2">
                    <i className="fas fa-map-marker-alt fa-fw fa-lg mr-2" />
                    <a href="https://goo.gl/maps/Q8PkEJ84AXG19Hz67" className="resume-link">
                        Nairobi, Kenya
                    </a>
                </li>
                <li className="mb-2">
                    <i className="fab fa-linkedin fa-fw fa-lg mr-2" />
                    <a
                        className="resume-link"
                        href="https://linkedin.com/in/karimkkanji"
                    >
                        @karimkkanji
                    </a>
                </li>
                <li className="mb-0">
                    <i className="fab fa-github fa-fw fa-lg mr-2" />
                    <a
                        className="resume-link"
                        href="https://github.com/karimkkanji"
                    >
                        @karimkkanji
                    </a>
                </li>
            </ul>
        </div>
        {/*//resume-contact*/}
    </div>
    {/*//row*/}
</div>);
}
export default Header;