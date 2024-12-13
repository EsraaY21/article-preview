import { useState } from "react";
import IconShare from "./icons/IconShare";

export default function ShareButton() {
  const [isShareVisible, setIsShareVisible] = useState(false);

  const handleShareClick = () => {
    setIsShareVisible(!isShareVisible);
  };

  return (
    <button
      className={`footer_share ${isShareVisible && "button_active"} `}
      onClick={handleShareClick}
      aria-expanded={isShareVisible}
    >
      <IconShare isShareVisible={isShareVisible} />

      {isShareVisible && (
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
      )}
    </button>
  );
}
