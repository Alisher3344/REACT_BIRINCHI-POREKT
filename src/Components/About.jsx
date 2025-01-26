import "./about.css"
export const About = ()=>{
    return <div className="container">
        <h1 className="about">About Us</h1>
        <p className="about_2">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
         <aside>
            <div className="asie_card">
                <img src="about1.svg" alt="no img?" />
                <h5>1. Schedule online</h5>
                <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>
            <div className="asie_card">
                <img src="about2.svg" alt="no img?" />
                <h5>2. Pay online easily</h5>
                <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>
            <div className="asie_card">
                <img src="about3.svg" alt="no img?" />
                <h5>3. Get your house cleaned</h5>
                <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>
        </aside>    
    </div>
 }