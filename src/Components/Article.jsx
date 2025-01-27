import "./article.css"
export const Article=()=>{
 return   <div className="container">
    <div className="acrticle_head">
        <h1 className="head_article_h1">Articles & resources</h1>
        <div className="body_article_div">
            <button className="button_acrticle bluee">Get a free quote</button>
            <button className="button_acrticle">Browse articles</button>
        </div>
    </div>
<div className="flex_article">

<div className="reletive_card"><img className="img_width" src="Frame.svg" alt="no img?"/>
<div className="absalute_divIn_article">
    <h4>8 best vacuum cleaners to clean any mess for your home in 2022</h4>
    <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
    <h6>Jan 28, 2022</h6>
</div>
</div>
<div className="reletive_card"><img className="img_width" src="framee.svg" alt="no img?"/>
<div className="absalute_divIn_article">
    <h4>How to properly disinfect your phone and other electronics</h4>
    <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
    <h6>Jan 28, 2022</h6>
</div>
</div>

    
</div>
 </div>
}