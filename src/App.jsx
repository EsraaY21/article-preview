import DesktopFooter from "./components/icons/DesktopFooter";
import MobileMenu from "./components/icons/MobileMenu";

function App() {
  return (
    <main className="card">
      <img src="/images/drawers.jpg" alt="drawers" />
      <div className="text_container">
        <div className="card_body">
          <h1>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="desc">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>

        <DesktopFooter />

        <MobileMenu />
      </div>
    </main>
  );
}

export default App;
