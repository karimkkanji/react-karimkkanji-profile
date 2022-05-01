const FooterInner =()=>{
    return(<div className="resume-footer text-center">
    <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
        <li className="list-inline-item mb-lg-0 mr-3">
            <a className="resume-link" href="https://github.com/karimkkanji">
                <i
                    className="fab fa-github-square fa-2x mr-2"
                    data-fa-transform="down-4"
                />
                <span className="d-none d-lg-inline-block text-muted">
                    https://github.com/karimkkanji
                </span>
            </a>
        </li>
        <li className="list-inline-item mb-lg-0 mr-3">
            <a
                className="resume-link"
                href="https://linkedin.com/in/karimkkanji"
            >
                <i
                    className="fab fa-linkedin fa-2x mr-2"
                    data-fa-transform="down-4"
                />
                <span className="d-none d-lg-inline-block text-muted">
                    @karimkkanji
                </span>
            </a>
        </li>
        <li className="list-inline-item mb-lg-0 mr-lg-3">
            <a className="resume-link" href="https://twitter.com/karimkkanji">
                <i
                    className="fab fa-twitter-square fa-2x mr-2"
                    data-fa-transform="down-4"
                />
                <span className="d-none d-lg-inline-block text-muted">
                    @karimkkanji
                </span>
            </a>
        </li>
    </ul>
</div>);
}

export const FooterOuter=()=>{
    return( <footer className="footer text-center py-4">
    {/*/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) * /*/}
    <small className="copyright text-muted">
        Made with <i className="fas fa-heart" /> by{" "}
        <a className="theme-link" href="https://karimkkanji.com" target="_blank" rel="noreferrer">
            {" "}
            Karim K. Kanji
        </a>
    </small>
</footer>);
}

export default FooterInner;