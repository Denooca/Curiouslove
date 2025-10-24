import React from 'react';

// This file contains constant values used throughout the application.

// --- Icon Components ---
// These are simple SVG components used to visually represent each theme.
// Fix: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const ScienceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.125 1.125 0 010 2.25H5.625a1.125 1.125 0 010-2.25z" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5V21" })
  )
);

// Fix: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const HistoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" })
  )
);

// Fix: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const CultureIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 21h16.5M12 3v18" })
  )
);

// Fix: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const TechnologyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" })
  )
);

// Fix: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const NatureIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.182 8.682a4.5 4.5 0 01-6.364 0M15.182 8.682a4.5 4.5 0 016.364 6.364M15.182 8.682L12 12.001M12 12.001L8.818 15.183M12 12.001L15.182 15.183M8.818 8.682a4.5 4.5 0 016.364 0M8.818 8.682a4.5 4.5 0 00-6.364 6.364M8.818 8.682L12 12.001m-3.182 3.182L12 12.001" })
  )
);

// Fix: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const SpaceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664l.143.256a1.107 1.107 0 001.664.57l.143-.048a2.25 2.25 0 011.161.886l.51.766c.319.48.126 1.121-.216 1.49l-1.068.89a1.125 1.125 0 00-.405.864v.568m-6 0v-.568c0-.334-.148-.65-.405-.864l-1.068-.89a1.125 1.125 0 01-.216-1.49l.51-.766a2.25 2.25 0 001.161-.886l.143-.048a1.107 1.107 0 01.57-1.664l-.143-.256a1.107 1.107 0 01-1.664-.57l-.143.048a2.25 2.25 0 00-1.161-.886l-.51-.766a1.125 1.125 0 01.216-1.49l1.068-.89a1.125 1.125 0 00.405-.864v-.568m0 0a.75.75 0 100 1.5.75.75 0 000-1.5z" })
  )
);

// Fix: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const ArtIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.362-3.797z" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9.75a3 3 0 110-6 3 3 0 010 6z" })
  )
);

// Fix: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const GeneralIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 01-1.4-1.4l-1.188-.648 1.188-.648a2.25 2.25 0 011.4-1.4l.648-1.188.648 1.188a2.25 2.25 0 011.4 1.4l1.188.648-1.188.648a2.25 2.25 0 01-1.4 1.4z" })
  )
);

// Fix: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const SportsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 18.75h-9a9.75 9.75 0 011.316-5.033 9.75 9.75 0 011.838-3.414A9.75 9.75 0 0112 6.375a9.75 9.75 0 012.846 3.928 9.75 9.75 0 011.838 3.414A9.75 9.75 0 0116.5 18.75z" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 15.75a.375.375 0 110-.75.375.375 0 010 .75z" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.375 12.75h5.25" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.375 9h5.25" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 3.75h6" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3.75v2.625" })
  )
);

// Fix: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const AnimalsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" })
  )
);

// Fix: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const GeographyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c.502 0 1.004-.016 1.503-.046M12 21c-.502 0-1.004-.016-1.503-.046M12 3a9.004 9.004 0 00-8.716 6.747M12 3a9.004 9.004 0 018.716 6.747M12 3c.502 0 1.004.016 1.503-.046M12 3c-.502 0-1.004-.016-1.503-.046M21 12a9.004 9.004 0 00-8.716-6.747M3 12a9.004 9.004 0 018.716-6.747m0 13.494c.502 0 1.004-.016 1.503-.046m-3.006 0c-.502 0-1.004-.016-1.503-.046" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" })
  )
);

// Fix: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const MusicIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V7.5a2.25 2.25 0 012.25-2.25h1.5A2.25 2.25 0 0115 7.5v1.5" })
  )
);

/**
 * An array of objects, each representing a curiosity theme.
 * Includes the theme name (in Portuguese) and a corresponding icon component.
 */
export const CURIOSITY_THEMES: { name: string; icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
  { name: 'Ciências', icon: ScienceIcon },
  { name: 'História', icon: HistoryIcon },
  { name: 'Cultura', icon: CultureIcon },
  { name: 'Tecnologia', icon: TechnologyIcon },
  { name: 'Natureza', icon: NatureIcon },
  { name: 'Espaço', icon: SpaceIcon },
  { name: 'Arte', icon: ArtIcon },
  { name: 'Gerais', icon: GeneralIcon },
  { name: 'Esportes', icon: SportsIcon },
  { name: 'Animais', icon: AnimalsIcon },
  { name: 'Geografia', icon: GeographyIcon },
  { name: 'Música', icon: MusicIcon },
];
