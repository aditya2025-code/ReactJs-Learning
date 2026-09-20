// import { fetchPhotos,fetchVideos } from "./api/mediaApi"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="desktop min-h-screen w-full bg-desk font-mono text-ink">
      <Navbar />
      <main className="pb-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      </main>

      <ToastContainer toastClassName="retro-toast" />
    </div>
  );
};

export default App;
