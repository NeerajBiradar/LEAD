import React,{useEffect} from 'react';
import Typed from 'typed.js';


function FirstSection() {
    useEffect(() => {
        // Initialize Typed.js
        var typed = new Typed('#element', {
            strings: ['Java', 'Linear Algebra and Calculus', 'C Programming', 'Data Structures and countless more'],
            typeSpeed: 60,
            loop:true,
        });
    
        // Clean up the Typed instance on component unmount
        return () => {
          typed.destroy();
        };
      }, []); // Empty dependency array to run only once on mount

    return (
        <section className="firstSection mt-5">
            <div className="container-fuild mx-5">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="fs-1">
                            Welcome to <span className="purple">Learn Educate and Develop</span>
                            <div className="fs-2">Learn <span id="element"></span></div>
                        </div>
                        <div className="fs-5 mt-2">
                            <p>Confused on where to learn from? I have got you covered. Browse courses and find out the best
                                course for you. LEAD is my attempt to provide all of you guys free notes and save your time.</p>
                        </div>
                        <div className="buttons">
                            <a href="#notes"><button className="btn btn-primary px-auto">Notes</button></a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="rightSection">
                            <img src="./ImgAndGIF/notebook.gif" alt="Icon" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FirstSection;
