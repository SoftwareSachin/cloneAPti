import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Hide SEO content when React loads
const hideSeoCotent = () => {
  const seoElements = document.querySelectorAll('body > h1, body > h2, body > h3, body > p, body > ul, body > nav');
  seoElements.forEach(el => {
    if (el.parentElement === document.body && el.id !== 'root') {
      (el as HTMLElement).style.display = 'none';
    }
  });
};

createRoot(document.getElementById("root")!).render(<App />);

// Hide SEO content after React renders
setTimeout(hideSeoCotent, 100);
