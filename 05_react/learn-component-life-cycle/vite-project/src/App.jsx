import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [shouldShowBanner, setShouldShowBanner] = useState(true);

  return (
    <div>
      <button onClick={() => setShouldShowBanner(false)}>hide</button>
      {shouldShowBanner && <Banner />}
    </div>
  );
}

function Banner() {
  useEffect(() => {
    console.log("component mounted!");

    // clean up function
    return () => {
      console.log("component unmounted");
    };
  }, []);

  return <p>this is a banner with custom text related to site content</p>;
}

export default App;
