import "./Navbar.scss";

const navbarItems = [
  {title:"ABOUT", url:"#aboutus"},
  {title:"FOR YOU", url:"#foryou"},
  {title:"SERVICES", url:"#services"},
  {title:"BLOG", url:"#blog"},
  {title:"VLOG", url:"#vlog"},
  {title:"CONTACT", url:"#contact"},
]
function Navbar() {
  return (
  <div className="navbar">
    {/* <a href="#aboutus">ABOUT</a>
    <a href="#foryou">FOR YOU</a>
    <a href="#services">SERVICES</a>
    <a href="#blog">BLOG</a>
    <a href="#vlog">VLOG</a>
    <a href="#contact">CONTACT</a> */}
    {navbarItems?.map((item, index) => (
      <a key={index} href={item.url}>
        {item.title}
      </a>
    ))}
  </div>
  );
}

export default Navbar;