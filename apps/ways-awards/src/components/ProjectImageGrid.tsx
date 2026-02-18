"use client";

import { useState, type CSSProperties, type MouseEvent } from "react";
import type { ApiProject } from "@/lib/api";

type Props = {
  project: ApiProject;
};

const imageStyle: CSSProperties = {
  width: "100%",
  height: "auto",
  cursor: "pointer",
  maxWidth: "100%",
  borderRadius: "12px",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

const imageContainerStyle: CSSProperties = {
  position: "relative",
  overflow: "hidden",
  borderRadius: "12px",
  background: "rgba(0, 0, 0, 0.3)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "all 0.2s ease",
};

const badgeStyle: CSSProperties = {
  position: "absolute",
  top: "12px",
  right: "12px",
  background: "rgba(0, 0, 0, 0.7)",
  color: "white",
  padding: "4px 8px",
  borderRadius: "6px",
  fontSize: "0.75rem",
  fontWeight: "500",
  backdropFilter: "blur(10px)",
};

export function ProjectImageGrid({ project }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const images = [
    {
      url: project.thumbnailUrl ?? undefined,
      label: "Main",
      alt: `${project.name} - Primary Image`,
    },
    {
      url: project.thumbnailUrlSecondary ?? undefined,
      label: "Gallery",
      alt: `${project.name} - Secondary Image`,
    },
    {
      url: project.thumbnailUrlThird ?? undefined,
      label: "Extra",
      alt: `${project.name} - Additional Image`,
    },
  ].filter((image): image is { url: string; label: string; alt: string } =>
    Boolean(image.url)
  );

  const openModal = (imageUrl: string) => {
    setActiveImage(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImage(null);
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleImageHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLElement;
    target.style.transform = "scale(1.02)";
    target.style.boxShadow = "0 8px 32px rgba(255, 255, 255, 0.2)";
  };

  const handleImageLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLElement;
    target.style.transform = "scale(1)";
    target.style.boxShadow = "none";
  };

  if (!images.length) return null;

  return (
    <>
      <div className="image-grid-container">
        {images.map((image, index) => (
          <div
            key={image.url}
            style={imageContainerStyle}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
            onClick={() => openModal(image.url)}
          >
            <img
              src={image.url}
              alt={image.alt}
              style={imageStyle}
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div style={badgeStyle}>{image.label}</div>
          </div>
        ))}
      </div>

      {isOpen && activeImage && (
        <div
          onClick={handleOverlayClick}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "1200px",
              maxHeight: "90vh",
            }}
          >
            <img
              src={activeImage}
              alt="Project Image"
              style={{
                width: "100%",
                maxHeight: "90vh",
                borderRadius: "20px",
                objectFit: "contain",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
              }}
            />
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "#fff",
                fontSize: "24px",
                border: "none",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget;
                target.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
                target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget;
                target.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                target.style.transform = "scale(1)";
              }}
            >
              ×
            </button>
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                background: "rgba(0, 0, 0, 0.7)",
                color: "white",
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "0.875rem",
                backdropFilter: "blur(10px)",
              }}
            >
              Click outside to close
            </div>
          </div>
        </div>
      )}
    </>
  );
}
