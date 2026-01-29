"use client"

import videosData from "@/data/videos.json";
import { useState } from "react";

interface WelcomeVideoSectionProps {
  videoUrl?: string;
  posterUrl?: string;
}



// Default videoUrl can be changed as needed
const DEFAULT_VIDEO_URL = "https://youtube.com/watch?v=dQw4w9WgXcQ";
const DEFAULT_POSTER_URL = "/images/School/birdsEyeCampus.jpg";

function isYouTubeUrl(url: string) {
  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(url);
}

export default function WelcomeVideoSection({
  videoUrl = DEFAULT_VIDEO_URL,
  posterUrl = DEFAULT_POSTER_URL,
}: WelcomeVideoSectionProps) {
    const videos = videosData.videos.slice(0, 5);
    const DEFAULT_VIDEO = {
      id: 0,
      title: "Welcome to A.E.R.E School & College",
      date: "",
      thumbnail: "/images/School/birdsEyeCampus.jpg",
      videoUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
      duration: "",
      description: "Watch our welcome video to get a glimpse of our vibrant campus, dedicated faculty, and the spirit of excellence that defines our institution."
    };
    const [selected, setSelected] = useState(0);
    const selectedVideo = videos.length > 0 ? videos[selected] : DEFAULT_VIDEO;

    function isYouTubeUrl(url: string) {
      return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(url);
    }

    function getEmbedUrl(url: string) {
      if (url.includes("embed/")) return url;
      return url.replace("watch?v=", "embed/");
    }

    return (
      <section className="bg-white py-8 md:py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-3 text-center">
            Welcome to A.E.R.E School & College
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6 text-center max-w-2xl mx-auto">
            Watch our welcome video to get a glimpse of our vibrant campus, dedicated faculty, and the spirit of excellence that defines our institution.
          </p>
          <div className="flex flex-col-reverse lg:flex-row gap-6 md:gap-8 items-stretch">
            {/* Video List: horizontal scroll on mobile, vertical on desktop, compact card style on mobile */}
            <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-3 md:gap-4 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {videos.map((video, idx) => (
                <button
                  key={video.id}
                  onClick={() => setSelected(idx)}
                  className={`flex-shrink-0 flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3 p-2 md:p-3 rounded-xl border transition-all duration-200 bg-white w-32 sm:w-40 md:w-80 lg:w-auto min-w-[7.5rem] max-w-[11rem] md:min-w-[220px] md:max-w-[400px] shadow-sm ${
                    idx === selected
                      ? "ring-2 ring-green-600 border-green-600 bg-green-50 shadow-md"
                      : "border-gray-200 hover:bg-green-50"
                  }`}
                  style={{}}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-20 object-cover rounded-lg border mb-1 md:mb-0 md:w-20 md:h-14"
                  />
                  <div className="flex flex-col text-left w-full px-1 md:px-0">
                    <span className="font-semibold text-xs md:text-sm text-gray-900 line-clamp-1 mb-0.5">{video.title}</span>
                    <span className="text-[10px] md:text-xs text-gray-500 mb-0.5">{video.date}</span>
                    <span className="text-[10px] md:text-xs text-green-700 font-medium">{video.duration}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Video Player: always on top on mobile, right on desktop */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg border border-green-100 bg-black mb-3 md:mb-4">
                {isYouTubeUrl(selectedVideo.videoUrl) ? (
                  <iframe
                    className="w-full h-full"
                    src={getEmbedUrl(selectedVideo.videoUrl)}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster={selectedVideo.thumbnail}
                    autoPlay
                  >
                    <source src={selectedVideo.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="text-center flex flex-col items-center justify-center px-2" style={{ minHeight: 90, maxHeight: 110 }}>
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-1 line-clamp-2">{selectedVideo.title}</h3>
                <div className="text-xs text-gray-500 mb-1">{selectedVideo.date}</div>
                <p className="text-gray-600 text-xs md:text-sm max-w-xl mx-auto line-clamp-3">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
