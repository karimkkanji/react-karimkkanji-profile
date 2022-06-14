const Skills =()=>{
    return(<aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
    <section className="skills-section py-3">
    <img alt="DevCard" style={{maxWidth:"100%", marginBottom:25}} src="https://raw.githubusercontent.com/karimkkanji/karimkkanji/main/devcard.svg"/>
        <h3 className="text-uppercase resume-section-heading mb-4">
            Skills
        </h3>
        <div className="item">
            <h4 className="item-title">Technical</h4>
            <ul className="list-unstyled resume-skills-list">
                <li className="mb-2">Java -Intemediate</li>
                <li className="mb-2">Python -Intermediate</li>
                <li className="mb-2">PHP - Advanced</li>
                <li className="mb-2">Javascript - Advanced</li>
                <li className="mb-2">ReactJS - Intermediate</li>
                <li className="mb-2">TypeScript - Intermediate</li>
                <li className="mb-2">MySQL and RDMS</li>
                <li className="mb-2">
                    Firebase | Cloud Firestore, Notifications, Authentication{" "}
                </li>
                <li className="mb-2">WordPress Development and Deployment</li>
                <li className="mb-2">M-Pesa Payment Integrations</li>
                <li className="mb-2">
                    REST APIs- Development and Consuming APIs
                </li>
                <li className="mb-2">Web Deployment</li>
                <li className="mb-2">Web audits, Testing and Analytics</li>
                <li className="mb-2">PC Building and Troubleshooting</li>
                <li className="mb-2">Computer Troubleshooting</li>
                <li className="mb-2">Software Installation and Deployment</li>
                <li className="mb-2">
                    Networking Design and Troubleshooting
                </li>
                <li className="mb-2">Server Management and Deployments</li>
                <li className="mb-2">
                    Version Control using Git, Gitlab and Github
                </li>
                <li className="mb-2">
                    Android Java | Android App Development
                </li>
                <li className="mb-2">
                    CI/CD using Docker and Gitlab - Intermediate
                </li>
            </ul>
        </div>
        {/*//item*/}
        <div className="item">
            <h4 className="item-title">Professional</h4>
            <ul className="list-unstyled resume-skills-list">
                <li className="mb-2">Effective communication</li>
                <li className="mb-2">Team player</li>
                <li></li>
                <li className="mb-2">Strong problem solver</li>
                <li>Good time management</li>
                <li>Strong Remote Work Experience</li>
            </ul>
        </div>
        {/*//item*/}
    </section>
    {/*//skills-section*/}
    <section className="skills-section py-3">
        <h3 className="text-uppercase resume-section-heading mb-4">
            Languages
        </h3>
        <ul className="list-unstyled resume-lang-list">
            <li className="mb-2">
                English <span className="text-muted">(United Kingdom)</span>
            </li>
            <li>
                Kiswahili <span className="text-muted">(Kenyan)</span>
            </li>
        </ul>
    </section>
    {/*//certificates-section*/}
    <section className="skills-section py-3">
        <h3 className="text-uppercase resume-section-heading mb-4">
            Interests
        </h3>
        <ul className="list-unstyled resume-interests-list mb-0">
            <li className="mb-2">Bike Riding</li>
            <li className="mb-2">Swimming</li>
            <li className="mb-2">Video Editing</li>
            <li className="mb-2">Travelling</li>
            <li className="mb-2">Hiking</li>
        </ul>
    </section>
    {/*//certificates-section*/}
</aside>);
}
export default Skills;