import "./App.css";

const App = () => {
  return (
    <main>
      <header>
        <h1>OurLandingPage</h1>
        <nav>
            <a href="#homepage">Home</a>
            <a href="#members">Members</a>
        </nav>
    </header>
    <section id="homepage" class="homepage">
        <h1>Welcome To Our Landing Page</h1>
        <h2>We are the GROUP 2</h2>
        <h3>BSIT - 2C</h3>
    </section>
    <section id="members" class="members">
      <h1>MEMBERS:</h1>
      <h2>Jerson M. Palomeras</h2>
      <h2>Maria Mae G. Gonzaga</h2>          
      <h2>Denzel Winston R. Ortiz</h2>
      <h2>Maria Fe S. Velasco</h2>
    </section>
    <footer>
        <h4>@2026 OurLandingPage.</h4>
        <h4>Address: NorthWest Samar State University</h4>
        <h4>Contact: 09207259692</h4>
    </footer>
    </main>
  );
}

export default App;