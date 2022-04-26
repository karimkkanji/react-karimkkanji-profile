import { FunctionComponent } from "react";
import './css/custom.css';
import './css/devresume.css';

interface BodyProps {

}

const Body: FunctionComponent<BodyProps> = () => {
    return (<div className="main-wrapper">
        <div className="container px-3 px-lg-5">
            <article
                className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5"
                style={{
                    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
                }}
            >
                <div className="resume-header">
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
                </div>
                {/*//resume-header*/}
                <hr />
                <div className="resume-intro py-3">
                    <div className="media flex-column flex-md-row align-items-center">
                        <img
                            className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded-custom mx-auto"
                            src="https://backend.cryosoft.co.ke/v1/storage/buckets/6267a5a9979cfa7dd7e4/files/6267a631bedb4eb0f291/view?project=6267a5931d9bdc32f7f2&mode=admin"
                            alt="Karim K. Kanji's Profile"
                        />
                        <div className="media-body text-left">
                            <strong>
                                Senior ReactJS Developer at Cryosoft Corporation with over 6 years
                                of experience developing ReactJS Apps.{" "}
                            </strong>
                            <p className="mb-0">
                                <br />
                                Strong believer in creating solutions and solving problems using
                                Software. In my career, software is my core passion and what I
                                enjoy doing the most. I love computers and have loved them since
                                when I was a toddler back in 2002 where computers would facinate
                                me and thus growing the passion in Computing and Information
                                Technology.
                            </p>
                        </div>
                        {/*//media-body*/}
                    </div>
                </div>
                {/*//resume-intro*/}
                <hr />
                <div className="resume-body">
                    <div className="row">
                        <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
                            <section className="work-section py-3">
                                <h3 className="text-uppercase resume-section-heading mb-4">
                                    Work Experience
                                </h3>
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-7 mb-2 mb-md-0">
                                            CoolPam Water Systems
                                        </h4>
                                        <div className="item-meta col-12 col-md-6 col-lg-5 text-muted text-left text-md-right">
                                            Admin Portal | November 2021 - March 2022
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            CoolPam Water Systems is a water distribution company based
                                            in Nairobi, Kenya. I worked on the Admin portal that I built
                                            using React.js and TypeScript using FIrebase as the
                                            back-end. The Web Application is hosted at{" "}                        <a href="https://maji.coolpamsystems.com">
                                                https://maji.coolpamsystems.com
                                            </a>
                                            . This project allowed me to lead other development teams
                                            such as the mobile development team into steering the app
                                            into production with the desired results.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-7 mb-2 mb-md-0">
                                            Liquid Foods
                                        </h4>
                                        <div className="item-meta col-12 col-md-6 col-lg-5 text-muted text-left text-md-right">
                                            Admin Portal | August 2020 - Decemeber 2021
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            Liquid Foods is a food ordering company based in Juja,
                                            Kenya, that allows people to order and have foods delivered
                                            to their doorstep. I built their admin Portal using PHP, JS
                                            and Fireabse. The Web Application is hosted at{" "}                        <a href="https://liquid.co.ke">https://liquid.co.ke</a>
                                            This project allowed me to lead other development teams such
                                            as the mobile development team into steering the app into
                                            production with the desired results.
                                        </p>
                                    </div>
                                </div>
                                <div className="item mb-3">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-7 mb-2 mb-md-0">
                                            Health IT - University of Narobi Enterprise Services (UNES)
                                        </h4>
                                        <div className="item-meta col-12 col-md-6 col-lg-5 text-muted text-left text-md-right">
                                            Kenya EMR Development | 2021 March
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            Kenya EMR Module Development and Testing during pre-pilot
                                            bug fixing and and testing. Helped in fixing bugs and UI
                                            issues using Java, Javascript and JQuery to do validations
                                            for forms as well as fix UI display issues.
                                        </p>
                                    </div>
                                </div>
                                <div className="item mb-3">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-7 mb-2 mb-md-0">
                                            Health IT - University of Narobi Enterprise Services (UNES)
                                        </h4>
                                        <div className="item-meta col-12 col-md-6 col-lg-5 text-muted text-left text-md-right">
                                            Imaging System | 2021 January - September
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            Developed Imaging System to be used internally and
                                            externally by the Vihiga County Referal Hospital to be used
                                            for uploading and downloading images replacing the need of
                                            Compact Disks. This role allowed me to lead other
                                            development teams such as the mobile development team into
                                            developing a Diabetes and Hypertension Management
                                            Application that is still in Beta. Helped in fixing issues
                                            with KenyaEMR at the facility as well as neighbouring
                                            facilities in Vihiga County, as well as deployment of the
                                            KenyaEMR+ instance, fixing issues that occured on the system
                                            as well as provided user support at the facility. Assisted
                                            in resolving issues with the network at the facility that{" "}                        included issued with DHCP server as well as managing app
                                            deployments at the facility.
                                        </p>
                                    </div>
                                </div>
                                <div className="item mb-3">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Health IT - University of Narobi Enterprise Services (UNES)
                                            Internship
                                        </h4>
                                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                                            Kisumu County Ministry of Health. | 2019 June - August
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            Developed Web Applications to be used internally by the
                                            Kisumu Health Management Information Systems Department for
                                            Data Visualization and Annual Work Plan, built using
                                            Bootstrap 4, Javascript and JQuery. Backed using PHP as the
                                            backend.
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item mb-3">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            HI4Kenya
                                        </h4>
                                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                                            DHIS2 Apps Developer | 2018
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            Worked on Metadata Dictionary Application for DHIS2 instance
                                            using React.js. The repository can be found at{" "}
                                            <a href="https://github.com/kanji-karanja/MetaDataDHIS2">
                                                https://github.com/karimkkanji/MetaDataDHIS2
                                            </a>
                                            and the documentation{" "}
                                            <a href="https://metadatadhis2.readthedocs.io/en/latest/">
                                                https://metadatadhis2.readthedocs.io/en/latest/
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="item mb-3">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Cryosoft Corporation.
                                        </h4>
                                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                                            Software Development and Management| 2016 August to date
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            Developed Web Applications and Android Applications that{" "}                        support SMEs in doing their businesses allowing them to have
                                            an online presence as well as manage their businesses.
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                            </section>
                            <section className="education-section py-3">
                                <h3 className="text-uppercase resume-section-heading mb-4">
                                    Education
                                </h3>
                                <ul className="list-unstyled resume-education-list">
                                    <li className="mb-3">
                                        <div className="resume-degree font-weight-bold">
                                            BSc (Information Technology), Graduation Year 2021
                                        </div>
                                        <div className="resume-degree-org text-muted">
                                            Maseno University
                                        </div>
                                        <div className="resume-degree-time">
                                            <strong>First Class Honours</strong>
                                        </div>
                                        <div className="resume-degree-time text-muted">
                                            2016 - 2020
                                        </div>
                                    </li>
                                    <li>
                                        <div className="resume-degree font-weight-bold">
                                            Certificate in Windows Apps Development, Graduation Year
                                            2016
                                        </div>
                                        <div className="resume-degree-org text-muted">
                                            Emobilis Mobile Training Institute
                                        </div>
                                        <div className="resume-degree-time text-muted">May 2016</div>
                                        <br />
                                    </li>
                                    <li>
                                        <div className="resume-degree font-weight-bold">
                                            Certificate in Android Development, Graduation Year 2016
                                        </div>
                                        <div className="resume-degree-org text-muted">
                                            Emobilis Mobile Training Institute
                                        </div>
                                        <div className="resume-degree-time text-muted">
                                            Jan - April 2016
                                        </div>
                                        <br />
                                    </li>
                                    <li>
                                        <div className="resume-degree font-weight-bold">
                                            Kenya Certificate of Secondary Education (KCSE)
                                        </div>
                                        <div className="resume-degree-org text-muted">
                                            Kiambu High School
                                        </div>
                                        <div className="resume-degree-time text-muted">2012-2015</div>
                                        <br />
                                    </li>
                                    <li>
                                        <div className="resume-degree font-weight-bold">
                                            Kenya Certificate of Primary Education (KCPE)
                                        </div>
                                        <div className="resume-degree-org text-muted">
                                            Wakah Academy One
                                        </div>
                                        <div className="resume-degree-time text-muted">2002-2011</div>
                                    </li>
                                </ul>
                            </section>
                            {/*//work-section*/}
                            {/*//work-section*/}
                            <section className="project-section py-3">
                                <h3 className="text-uppercase resume-section-heading mb-4">
                                    Projects
                                </h3>
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Budgeteer
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            Budgeteer is a React.JS application built to help people
                                            budget their incomes with recommended proportions to help
                                            them manage their finances better. The project is hosted at:{" "}
                                            <a href="https://budgeteer.karimkkanji.com">
                                                https://budgeteer.karimkkanji.com/
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Notes by Cryosoft
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            Notes by Cryosoft is a web app that allows people to share realtime notes, that can be locked to prevent
                                            editing, allows saving notes to profile and allows for automatic saving of notes. The project is hosted at:{" "}
                                            <a href="https://notes.cryosoft.co.ke/">
                                                https://notes.cryosoft.co.ke/
                                            </a>. The Web app is a Progressive Web App, allowing one to easily install it as an app on Windows and Android via Google Chrome or Microsoft Edge.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Github Profiles on Demand
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            Get your Github profile and that of others quickly. This
                                            project is built using React.js and TypeScript. The Web
                                            Application is hosted at{" "}                        <a href="https://github-on-demand.cryosoft.co.ke/">
                                                https://github-on-demand.cryosoft.co.ke/
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            QR code Generator - Version 2
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            Generate Beautiful QR codes that you can download and share.
                                            This project is built using React.js and TypeScript. The Web
                                            Application is hosted at{" "}<a href="https://qr-generator.cryosoft.co.ke/">
                                                https://qr-generator.cryosoft.co.ke/
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            QR code Generator - Version 1
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            Easily and Quickly generate Basic QR codes that you can download and share.
                                            The Web Application is hosted at{" "}<a href="https://qr.cryosoft.co.ke/">
                                                https://qr.cryosoft.co.ke/
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="item mb-3">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Protection (Maseno Edition)
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            This is a pilot project done in 2020 that was tested in
                                            Maseno Town around Maseno University to provide a delivery
                                            service of condoms through a web app and an android
                                            application that has been developed to ease the ordering and
                                            delivery process.This is to achieve one of the SDGs: Ensure
                                            healthy lives and promote wellbeing for all at all ages, by
                                            reducing the infections of HIV and STIs in Maseno. The
                                            application only uses the phone number and location of the
                                            users to achieve a successful delivery. The application can
                                            be found at{" "}
                                            <a href="https://protection.cryosoft.co.ke">
                                                https://protection.cryosoft.co.ke
                                            </a>{" "}
                                            and the android application downloaded from{" "}
                                            <a href="https://protection.cryosoft.co.ke/app/">
                                                https://protection.cryosoft.co.ke/app/
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Masiri
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            An online venting platform available as a web app, a
                                            Progressive Web App and as an android application. The
                                            application is available on play store. Link to app is{" "}
                                            <a href="https://kutt.it/masiri-app">
                                                https://kutt.it/masiri-app
                                            </a>{" "}
                                            and the Web Application is hosted at{" "}
                                            <a href="https://masiri.cryosoft.co.ke">
                                                https://masiri.cryosoft.co.ke
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Masiri telegram Bot
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            A telegram Bot Created to upload user stories as well as
                                            display stories posted in Masiri. The bot can be accessed
                                            using the following link:
                                            <a href="https://t.me/masiri_kebot">
                                                https://t.me/masiri_kebot
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Betting Tips Ke
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            An online website offering betting tips. The front end for
                                            the users and the admin panel. The application is hosted at{" "}
                                            <a href="https://bettingtipske.co.ke">
                                                https://bettingtipske.co.ke
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Kisumu Health Department Work plan
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            An annual work plan that allows the department to track
                                            project progress using evidence presented and uploaded. The
                                            application can be installed via Google Chrome as a PWA. The
                                            application is currently hosted at{" "}                        <a href="https://workplan.keron.co.ke">
                                                https://workplan.keron.co.ke
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Kisumu Health Department Data Visualization Tool
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            A tool to draw charts from DHIS2 and manually create charts
                                            created for Kisumu County Health Department. The application
                                            can be viewed at{" "}                        <a href="https://khd-datavisualiser.keron.co.ke">
                                                https://khd-datavisualiser.keron.co.ke
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            DHIS2 Metadata Dictionary{" "}
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            A react app built to be used in DHIS2 to view and update
                                            metadata for DHIS2. Worked on in a team of 4. The
                                            application documentation can be found at{" "}                        <a href="https://metadatadhis2.readthedocs.io/en/latest/">
                                                https://metadatadhis2.readthedocs.io/en/latest/
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Covid-19 Kenyan Updates
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            This project aims at creating information about the 2020
                                            Pandemic, the COVID-19 Cases in Kenya only and provide tips
                                            and latest news on the disease in Kenya. It is accessible
                                            at:{" "}
                                            <a href="https://covid19.cryosoft.co.ke">
                                                https://covid19.cryosoft.co.ke
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Devnews | Developer News Stand
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            Read about developer news and what matters to you as a
                                            developer to keep you up to date only on DevNews. The site
                                            is available at{" "}                        <a href="https://devnews.cryosoft.co.ke">
                                                https://devnews.cryosoft.co.ke.
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Devnews | Developer News Stand [Android App]
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            With a collection of daily updated articles, DevNews makes
                                            it easy to get news as a developer at your fingertips. With
                                            curated articles that are aggregated daily, we'll keep you
                                            up to date with what developers need to know and what will
                                            help you as a developer to keep in the know! The app is
                                            available at{" "}                        <a href="https://play.google.com/store/apps/details?id=ke.co.cryosoft.devnews">
                                                https://play.google.com/store/apps/details?id=ke.co.cryosoft.devnews
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Drive In Theory 2
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            A web version and improvement to the Mobile App, Drive In
                                            Theory allowing all users to access resources more easily on
                                            all platforms to learn about Driving in Kenya and anywhere
                                            in the world that used the "Keep Left Rule" on the roads. It
                                            can be accessed at{" "}
                                            <a href="https://dit.cryosoft.co.ke">
                                                https://dit.cryosoft.co.ke
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Drive In Theory 2 [Android App]
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            Drive In Theory was great. But want a better and improved
                                            app? Drive In Theory 2 is designed to aid Drivers and
                                            Students Learning how to Drive especially in countries where
                                            the "Keep left rule" applies to drivers. This app was
                                            developed for any driver, but more so anyone who wants to
                                            gain knowledge about driving and the road in general. We
                                            have designed the app in such a way that once you install
                                            the app, you will not need to UPDATE it because well do the
                                            updating in our own special way to allow you to access
                                            content that is up to date and is approved by NTSA since we
                                            source the information that is the app from NTSA. The app
                                            can be downloaded at{" "}                        <a href="https://play.google.com/store/apps/details?id=ke.co.cryosoft.dit">
                                                https://play.google.com/store/apps/details?id=ke.co.cryosoft.dit
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Drive In Theory [Mobile App]
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            This app was developed for any driver, but more so anyone
                                            who wants to gain knowledge about driving and the road in
                                            general. This app contains multiple questions, notes that{" "}                        one can go through as well as learn about road signs. The
                                            app can be downloaded at{" "}                        <a href="https://play.google.com/store/apps/details?id=kkk.cryosoft.driveintheory">
                                                https://play.google.com/store/apps/details?id=kkk.cryosoft.driveintheory
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Is My Server/Websites Up? [Telegram Bot]
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            A bot to help you easily check if your Website or Server is
                                            Up or Down. The bot can be used at{" "}
                                            <a href="https://t.me/site_is_up_bot">
                                                https://t.me/site_is_up_bot
                                            </a>
                                            ,
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            Is My Server/Websites Up? [Web App]
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            A Web app that helps you easily check if your Website or Server is
                                            Up or Down. The Web App can be used at{" "}
                                            <a href="https://is-up.cryosoft.co.ke/">
                                                https://is-up.cryosoft.co.ke/
                                            </a>
                                            ,
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            WeinactionRJ
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            WeinactionRJ is a community-based organization offering
                                            loans to its members. It can be accessed at{" "}
                                            <a href="https://weinactionrj.cryosoft.co.ke/">
                                                https://weinactionrj.cryosoft.co.ke/
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                            The Word Heist Event Online Ticket Booking
                                        </h4>
                                    </div>
                                    <div className="item-content">
                                        <p>
                                            The Word Heist was an event planned to take place on March
                                            8, 2020 that aimed at poetry and spoken word sharing. The
                                            site allowed for booking and tracking of participants and
                                            allow them to see who is attending and more about the event.
                                            The website is available at{" "}                        <a href="https://thewordheist.cryosoft.co.ke/">
                                                https://thewordheist.cryosoft.co.ke/
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*//item*/}
                                {/* <div className="item">
                <div className="item-heading row align-items-center mb-2">
                  <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0" />
                </div>
                <div className="item-content">
                  <p></p>
                </div>
              </div> */}
                                {/*//item*/}
                            </section>
                            {/*//project-section*/}
                        </div>
                        {/*//resume-main*/}
                        <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                            <section className="skills-section py-3">
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
                        </aside>
                        {/*//resume-aside*/}
                    </div>
                    {/*//row*/}
                </div>
                {/*//resume-body*/}
                <hr />
                <div className="resume-footer text-center">
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
                </div>
                {/*//resume-footer*/}
            </article>
        </div>
        {/*//container*/}
        <footer className="footer text-center py-4">
            {/*/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) * /*/}
            <small className="copyright text-muted">
                Made with <i className="fas fa-heart" /> by{" "}
                <a className="theme-link" href="https://karimkkanji.com" target="_blank" rel="noreferrer">
                    {" "}
                    Karim K. Kanji
                </a>
            </small>
        </footer>
    </div>);
}

export default Body;