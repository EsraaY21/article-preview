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
            <button className="footer_share">
              <img
                src="/images/icon-share.svg"
                alt="share"
                className="share_icon"
              />

              <div className="share_icons_container">
                <div className="icons_container">
                  <p>Share</p>
                  <div className="icons">
                    <img src="/images/icon-facebook.svg" alt="facebook" />
                    <img src="/images/icon-twitter.svg" alt="twitter" />
                    <img src="/images/icon-pinterest.svg" alt="pinterest" />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
