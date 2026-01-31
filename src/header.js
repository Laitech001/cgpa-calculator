const Header = () => {
  return (
    <div className="header">
      <div className="nav-bar">
      <h1>Cgpa Calculator</h1>

      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      </div>
      <p>Calculate your Cumulative Grade Point Average (CGPA) easily.</p>
    </div>
  );
}
 
export default Header;