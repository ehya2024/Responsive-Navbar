import { FaTimesCircle } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import Links from "./data";
import { useEffect, useRef, useState } from "react";

function App() {

  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "";
    }
  }, [showLinks]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="right-navbar">
          <h3>وبسایت شخصی من</h3>
          <button onClick={() => setShowLinks(!showLinks)}>
            {showLinks ? <FaTimesCircle /> : <VscThreeBars />}
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul ref={linksRef}>
            {
              Links.map((link, index) => (
                <li key={index}><a href={link.url}>{link.title}</a></li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;