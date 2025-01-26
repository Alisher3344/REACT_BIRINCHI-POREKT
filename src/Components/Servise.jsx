import './servis.css'
export const Servise =()=>{
  return <div className="container">
    <div className='dlkfj'>
        <h1 className='h1'>Our Services</h1>
        <button className='button'>Explore services</button>
    </div>
    <div className="servis_CardBox">
        <div className='card_in_box'><img src="servis1.svg" alt="No img?"/>
        <h2>House cleaning</h2>
        <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
        </div>
        <div className='card_in_box'><img src="servis2.svg" alt="No img?"/>
        <h2>Office cleaning</h2>
        <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
        </div>
        <div className='card_in_box'><img src="servis3.svg" alt="No img?"/>
        <h2>Industrial cleaning</h2>
        <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
        </div>
    </div>
  </div> 
}