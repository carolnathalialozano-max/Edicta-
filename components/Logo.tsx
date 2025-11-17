import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-12 w-auto' }) => {
  // Using an inline data URI for the SVG logo to ensure it always loads and scales well.
  const logoSrc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJsb2dvR3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNTYzRUI7c3RvcC1vcGFjaXR5OjEiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNEY0NkU1O3N0b3Atb3BhY2l0eToxIiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0yMCAyMCBIIDgwIFYgMzUgSCAyMCBaIiBmaWxsPSJ1cmwoI2xvZ29HcmFkaWVudCkiIC8+PHBhdGggZD0iTTIwIDQyLjUgSCA2NSBWIDU3LjUgSCAyMCBaIiBmaWxsPSJ1cmwoI2xvZ29HcmFkaWVudCkiIC8+PHBhdGggZD0iTTIwIDY1IEggODAgViA4MCBIIDIwIFoiIGZpbGw9InVybCgjbG9nb0dyYWRpZW50KSIgLz48L3N2Zz4=";

  return <img src={logoSrc} alt="Edicta Logo" className={className} />;
};

export default Logo;
