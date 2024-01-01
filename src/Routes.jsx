import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Video = React.lazy(() => import("pages/Video"));
const VideoLibrary = React.lazy(() => import("pages/VideoLibrary"));
const VideoCall = React.lazy(() => import("pages/VideoCall"));
const Videoautoplay = React.lazy(() => import("pages/Videoautoplay"));
const Subtitles = React.lazy(() => import("pages/Subtitles"));
const StartVideoChat = React.lazy(() => import("pages/StartVideoChat"));
const LoyaltySystem = React.lazy(() => import("pages/LoyaltySystem"));
const PhotoFilters = React.lazy(() => import("pages/PhotoFilters"));
const ImageThumbnail = React.lazy(() => import("pages/ImageThumbnail"));
const Archive = React.lazy(() => import("pages/Archive"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/imagethumbnail" element={<ImageThumbnail />} />
          <Route path="/photofilters" element={<PhotoFilters />} />
          <Route path="/loyaltysystem" element={<LoyaltySystem />} />
          <Route path="/startvideochat" element={<StartVideoChat />} />
          <Route path="/subtitles" element={<Subtitles />} />
          <Route path="/videoautoplay" element={<Videoautoplay />} />
          <Route path="/videocall" element={<VideoCall />} />
          <Route path="/videolibrary" element={<VideoLibrary />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
