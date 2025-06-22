import React from "react";

export default function CountryMap({ mapUrl }) {
    
  return (
    <div className="w-full h-[400px]">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Country Map"
      ></iframe>
    </div>
  );
}
