import ShareButton from "./components/ShareButton";

function App() {
  return (
    <main>
      <div className="card">
        <img src="/images/drawers.jpg" alt="drawers" />
        <div className="text_container">
          <h1>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="desc">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>

          <div className="footer">
            <div className="author">
              <img
                src="/images/avatar-michelle.jpg"
                alt="avatar"
                className="avatar"
              />
              <div className="author_meta">
                <p className="name">Michelle Appleton</p>
                <p className="date">28 Jun 2020</p>
              </div>
            </div>

            <ShareButton />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
