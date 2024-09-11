import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TradeLight from "./pages/TradeLight";
import LightSingInWithPhoneNum from "./pages/LightSingInWithPhoneNum";
import LightSingUpWithEmail from "./pages/LightSingUpWithEmail";
import LightAccountSetupNotFill from "./pages/LightAccountSetupNotFill";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/light-sing-in-with-phone-number":
        title = "";
        metaDescription = "";
        break;
      case "/light-sing-up-with-email":
        title = "";
        metaDescription = "";
        break;
      case "/light-account-setup-not-filled":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TradeLight />} />
      <Route
        path="/light-sing-in-with-phone-number"
        element={<LightSingInWithPhoneNum />}
      />
      <Route
        path="/light-sing-up-with-email"
        element={<LightSingUpWithEmail />}
      />
      <Route
        path="/light-account-setup-not-filled"
        element={<LightAccountSetupNotFill />}
      />
    </Routes>
  );
}
export default App;
