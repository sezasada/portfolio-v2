import Homepage from "./pages/homepage/homepage";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import enMessages from "./translations/en.json";

function App() {
  const locale = "en";

  return (
    <BrowserRouter>
      <IntlProvider locale={locale} messages={enMessages}>
        <Homepage />
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
