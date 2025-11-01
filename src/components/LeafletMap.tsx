import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface LeafletMapProps {
  center: [number, number];
  zoom?: number;
  markerText?: string;
  className?: string;
}

export function LeafletMap({
  center,
  zoom = 13,
  markerText = 'Royal Keta Hatchery',
  className = '',
}: LeafletMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView(center, zoom);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Custom marker icon (gold)
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #CFAE58, #B89842);
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid #fff;
          box-shadow: 0 4px 12px rgba(207, 174, 88, 0.5);
        "></div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    // Add marker
    const marker = L.marker(center, { icon: customIcon }).addTo(map);
    marker.bindPopup(`
      <div style="text-align: center; padding: 4px;">
        <strong style="color: #CFAE58; font-size: 16px;">${markerText}</strong>
        <br />
        <span style="color: #8B95A1; font-size: 12px;">Nevelsky District, Sakhalin</span>
      </div>
    `);

    mapInstanceRef.current = map;

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom, markerText]);

  return <div ref={mapRef} className={className} style={{ minHeight: '400px' }} />;
}
