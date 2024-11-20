import Homepage from "./pages/homepage/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import enMessages from "./translations/en.json";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const locale = "en";

  return (
    <BrowserRouter>
      <IntlProvider locale={locale} messages={enMessages}>
        <Analytics />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
