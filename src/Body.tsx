import { FunctionComponent } from "react";
import './css/custom.css';
import './css/devresume.css';
import Education from "./Education";
import Experiences from "./Experiences";
import FooterInner, { FooterOuter } from "./Footer";
import Header from "./Header";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";

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
                <Header/>
                <hr />
                <Intro/>
                <hr />
                <div className="resume-body">
                    <div className="row">
                        <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
                            <Experiences/>
                            <Education/>
                            <Projects/>                        
                        </div>
                        <Skills/>
                    </div>                    
                </div>
                <hr />
                <FooterInner/>
            </article>
        </div>
       <FooterOuter/>
    </div>);
}

export default Body;