import "./header.css"
export const Header = ()=>{
    return <div className="container">
        <header>
<div className="left_elem">
<h1 className="left_elem_h1_1" style={{padding:'20px'}}>Quality cleaning for your home</h1>
<p className="left_elem_p_1">Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
<div className="left_elem_flexBox">
<button class="bn54">
    <span class="bn54span">Get a free quote</span>
  </button>
    <img src="phone.svg" alt="No icon" />
    <div>
        <p>Call us now</p>
        <h2 className="phone_number">(414) 567 - 2109</h2>
    </div>
</div>
</div>
<div>
<img className="right_img" src="Group.svg" alt="" />
</div>
        </header>
    </div>
}