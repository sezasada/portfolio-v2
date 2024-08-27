import Homepage from "./pages/homepage/homepage";
import { IntlProvider } from "react-intl";
import enMessages from "./translations/en.json";

function App() {
  const locale = "en";

  return (
    <IntlProvider locale={locale} messages={enMessages}>
      <Homepage />
    </IntlProvider>
  );
}

export default App;
