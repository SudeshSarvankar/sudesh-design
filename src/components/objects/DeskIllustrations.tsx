import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArtPrint(props: IconProps) {
  return (
    <svg viewBox="0 0 160 190" fill="none" {...props}>
      <rect x="10" y="10" width="140" height="170" rx="4" fill="#f6f0e4" stroke="#e4d8c4" />
      <rect x="22" y="22" width="116" height="132" fill="#1c3358" />
      <path d="M22 86c18-22 28-8 42-18 16-12 20 6 40-8 14-10 22-4 34 8v86H22V86Z" fill="#2f5d8a" />
      <circle cx="118" cy="48" r="14" fill="#e7d08a" />
      <path d="M22 128c22-18 38-6 58-16 22-10 28 4 58 2v40H22v-26Z" fill="#6f8f62" />
      <path d="M34 70c16 8 12 22 28 18" stroke="#c9deef" strokeWidth="3" fill="none" />
      <rect x="22" y="158" width="116" height="12" fill="#efe6d4" />
    </svg>
  );
}

export function Lamp(props: IconProps) {
  return (
    <svg viewBox="0 0 200 260" fill="none" {...props}>
      <ellipse cx="92" cy="108" rx="78" ry="24" fill="#6f8464" />
      <path d="M92 40c48 2 74 28 78 68H28C36 62 54 38 92 40Z" fill="#7d9270" />
      <path d="M40 86c18-28 86-32 112 2" stroke="#93a686" strokeWidth="6" />
      <path d="M92 128v78" stroke="#c4a056" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="92" cy="214" rx="38" ry="10" fill="#d7b36a" />
      <ellipse cx="92" cy="222" rx="46" ry="8" fill="#c49a4e" />
      <path d="M148 140c22 6 38 4 46-12" stroke="#8a7a58" strokeWidth="4" fill="none" />
    </svg>
  );
}

export function Headphones(props: IconProps) {
  return (
    <svg viewBox="0 0 180 140" fill="none" {...props}>
      <path d="M32 82c4-40 30-64 58-64s54 24 58 64" stroke="#d9cfc2" strokeWidth="10" fill="none" />
      <rect x="16" y="70" width="36" height="52" rx="12" fill="#efe8dc" stroke="#d3c6b4" />
      <rect x="128" y="70" width="36" height="52" rx="12" fill="#efe8dc" stroke="#d3c6b4" />
      <rect x="24" y="80" width="20" height="32" rx="8" fill="#cfc0ae" />
      <rect x="136" y="80" width="20" height="32" rx="8" fill="#cfc0ae" />
    </svg>
  );
}

export function Vinyl(props: IconProps) {
  return (
    <svg viewBox="0 0 180 180" fill="none" {...props}>
      <circle cx="90" cy="90" r="82" fill="#1f1e1c" />
      <circle cx="90" cy="90" r="70" stroke="#3a3834" strokeWidth="2" />
      <circle cx="90" cy="90" r="54" stroke="#3a3834" strokeWidth="1.5" />
      <circle cx="90" cy="90" r="38" stroke="#3a3834" />
      <circle cx="90" cy="90" r="18" fill="#7a3f32" />
      <circle cx="90" cy="90" r="6" fill="#111" />
    </svg>
  );
}

export function Plant(props: IconProps) {
  return (
    <svg viewBox="0 0 160 190" fill="none" {...props}>
      <ellipse cx="80" cy="72" rx="34" ry="22" fill="#7f946c" />
      <ellipse cx="52" cy="58" rx="26" ry="18" fill="#93a87d" transform="rotate(-24 52 58)" />
      <ellipse cx="110" cy="54" rx="28" ry="18" fill="#6d825c" transform="rotate(18 110 54)" />
      <ellipse cx="80" cy="42" rx="20" ry="16" fill="#a3b58c" />
      <path d="M80 88v22" stroke="#5d704c" strokeWidth="4" />
      <path d="M48 168h64l-8-46H56l-8 46Z" fill="#c9a888" />
      <path d="M56 132h48" stroke="#b89270" />
    </svg>
  );
}

export function Coffee(props: IconProps) {
  return <Chai {...props} />;
}

export function Chai(props: IconProps) {
  return (
    <svg viewBox="0 0 180 200" fill="none" {...props}>
      <ellipse cx="88" cy="186" rx="46" ry="8" fill="#d8c9b4" opacity="0.55" />
      <path
        d="M38 78c6 58 18 86 50 86s44-28 50-86"
        fill="#e8c9a4"
        stroke="#d4b48a"
        strokeWidth="3"
      />
      <path d="M46 86c8 48 16 68 42 68 26 0 34-20 42-68" fill="#c9854a" />
      <ellipse cx="88" cy="78" rx="52" ry="16" fill="#f3e2c8" />
      <ellipse cx="88" cy="82" rx="40" ry="10" fill="#7a4228" />
      <ellipse cx="88" cy="80" rx="28" ry="6" fill="#f2ead8" opacity="0.45" />
      <path
        d="M140 92c22 4 30 28 6 40"
        stroke="#e8c9a4"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M70 42c-2 10 8 16 6 26" stroke="#c9b8a4" strokeWidth="3" fill="none" />
      <path d="M88 34c0 12 10 16 8 30" stroke="#d3c4b0" strokeWidth="3" fill="none" />
      <path d="M106 44c2 10-6 16-4 24" stroke="#c9b8a4" strokeWidth="3" fill="none" />
    </svg>
  );
}

export function Bike(props: IconProps) {
  return (
    <svg viewBox="0 0 200 140" fill="none" {...props}>
      <ellipse cx="48" cy="96" rx="30" ry="30" stroke="#4d5a6a" strokeWidth="7" />
      <ellipse cx="154" cy="96" rx="30" ry="30" stroke="#4d5a6a" strokeWidth="7" />
      <circle cx="48" cy="96" r="8" fill="#c9a05a" />
      <circle cx="154" cy="96" r="8" fill="#c9a05a" />
      <path d="M48 96h46l28-40 32 40" stroke="#6b5340" strokeWidth="6" fill="none" />
      <path d="M94 96 78 56h28" stroke="#6b5340" strokeWidth="6" fill="none" />
      <path d="M122 56h24" stroke="#3a3732" strokeWidth="7" strokeLinecap="round" />
      <path d="M78 56c-10-8-22-6-30 4" stroke="#3a3732" strokeWidth="6" fill="none" />
      <circle cx="106" cy="50" r="6" fill="#e37b6a" />
    </svg>
  );
}

export function Car(props: IconProps) {
  return (
    <svg viewBox="0 0 210 120" fill="none" {...props}>
      <path
        d="M22 78 46 46c8-10 18-16 40-16h38c18 0 28 6 38 18l24 30"
        fill="#7ea0c4"
      />
      <path d="M18 78h174v18H18z" fill="#5d7fa4" />
      <path d="M58 46h36l-6 24H50l8-24Z" fill="#d7e6f4" />
      <path d="M100 46h38l16 24H96l4-24Z" fill="#cfe0f0" />
      <circle cx="58" cy="98" r="14" fill="#2f333c" />
      <circle cx="58" cy="98" r="6" fill="#d8d3c8" />
      <circle cx="156" cy="98" r="14" fill="#2f333c" />
      <circle cx="156" cy="98" r="6" fill="#d8d3c8" />
      <rect x="28" y="70" width="12" height="6" rx="2" fill="#f0c14a" />
    </svg>
  );
}

export function Skydive(props: IconProps) {
  return (
    <svg viewBox="0 0 120 140" fill="none" {...props}>
      <path d="M20 28c18-16 62-16 80 0-8 18-26 28-40 28S28 46 20 28Z" fill="#ef6b55" />
      <path d="M28 32c14 12 50 12 64 0" stroke="#c94c3a" strokeWidth="3" />
      <path d="M40 54 60 86 80 54" stroke="#8a7358" strokeWidth="3" />
      <circle cx="60" cy="96" r="10" fill="#e8c9a4" />
      <path d="M50 106h20l6 18H44l6-18Z" fill="#4aa3ef" />
      <path d="M44 124h32" stroke="#3a3732" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Scuba(props: IconProps) {
  return (
    <svg viewBox="0 0 120 140" fill="none" {...props}>
      <ellipse cx="60" cy="48" rx="28" ry="24" fill="#e8c9a4" />
      <rect x="32" y="42" width="56" height="16" rx="8" fill="#2f5d8a" />
      <circle cx="46" cy="50" r="7" fill="#9ad7c6" />
      <circle cx="74" cy="50" r="7" fill="#9ad7c6" />
      <rect x="54" y="66" width="12" height="28" rx="4" fill="#4aa3ef" />
      <path d="M42 94h36l8 28H34l8-28Z" fill="#1c3358" />
      <path d="M70 70c18 4 24 18 18 32" stroke="#7ea0c4" strokeWidth="6" fill="none" />
      <circle cx="28" cy="108" r="6" fill="#9ad7c6" opacity="0.7" />
      <circle cx="40" cy="122" r="4" fill="#9ad7c6" opacity="0.5" />
    </svg>
  );
}

export function Trek(props: IconProps) {
  return (
    <svg viewBox="0 0 120 140" fill="none" {...props}>
      <path d="M8 118 46 52l22 28 16-22 28 60H8Z" fill="#7f946c" />
      <path d="M46 52 62 80 38 118h-8L46 52Z" fill="#6d825c" />
      <path d="M84 58 96 42l16 76H84l12-40-12-20Z" fill="#a3b58c" />
      <circle cx="58" cy="36" r="8" fill="#e8c9a4" />
      <path d="M58 44v18l-10 16" stroke="#5d704c" strokeWidth="4" />
      <path d="M58 54h14" stroke="#c56b4a" strokeWidth="4" />
    </svg>
  );
}

export function Raft(props: IconProps) {
  return (
    <svg viewBox="0 0 140 110" fill="none" {...props}>
      <path d="M10 70c18 18 102 18 120 0-6-22-28-32-60-32S16 48 10 70Z" fill="#ef6b55" />
      <path d="M24 66c12 10 80 10 92 0" stroke="#c94c3a" strokeWidth="4" />
      <circle cx="70" cy="44" r="8" fill="#e8c9a4" />
      <path d="M70 52v14" stroke="#4d5a6a" strokeWidth="4" />
      <path d="M48 28 92 78" stroke="#c9a888" strokeWidth="5" strokeLinecap="round" />
      <path d="M18 86c20 8 84 8 104 0" stroke="#7ea0c4" strokeWidth="4" fill="none" />
    </svg>
  );
}

export function FigmaMark(props: IconProps) {
  return (
    <svg viewBox="0 0 72 96" fill="none" {...props}>
      <circle cx="24" cy="20" r="16" fill="#f24e1e" />
      <circle cx="48" cy="20" r="16" fill="#ff7262" />
      <circle cx="24" cy="48" r="16" fill="#a259ff" />
      <circle cx="48" cy="48" r="16" fill="#1abcfe" />
      <circle cx="24" cy="76" r="16" fill="#0acf83" />
    </svg>
  );
}

export function CursorMark(props: IconProps) {
  return (
    <svg viewBox="0 0 80 90" fill="none" {...props}>
      <rect x="8" y="8" width="64" height="74" rx="12" fill="#111318" />
      <path d="M22 24 58 42 36 48 30 66 22 24Z" fill="#f4f0e5" />
      <path d="M36 48 58 42 46 62" fill="#9ad7c6" />
    </svg>
  );
}

export function VercelMark(props: IconProps) {
  return (
    <svg viewBox="0 0 90 80" fill="none" {...props}>
      <rect x="4" y="8" width="82" height="64" rx="14" fill="#111318" />
      <path d="M45 22 66 58H24L45 22Z" fill="#f4f0e5" />
    </svg>
  );
}

export function Croissant(props: IconProps) {
  return (
    <svg viewBox="0 0 110 70" fill="none" {...props}>
      <path d="M10 44c16-24 72-24 90 0-16 10-28 8-44 8S26 54 10 44Z" fill="#e4b67a" />
      <path d="M26 42c12-12 48-12 58 0" stroke="#c78a48" strokeWidth="3" fill="none" />
    </svg>
  );
}

export function Book(props: IconProps) {
  return (
    <svg viewBox="0 0 130 170" fill="none" {...props}>
      <g transform="rotate(-8 70 85)">
        <rect x="28" y="16" width="84" height="132" rx="6" fill="#efc75a" />
        <rect x="28" y="16" width="10" height="132" fill="#d7ad3e" />
        <text x="48" y="70" fill="#3a4a8a" fontSize="16" fontFamily="ui-sans-serif" fontWeight="700">
          SPRINT
        </text>
        <rect x="48" y="80" width="48" height="4" fill="#f7edd4" />
        <rect x="48" y="90" width="36" height="3" fill="#f7edd4" />
      </g>
    </svg>
  );
}

export function Monitor(props: IconProps) {
  return (
    <svg viewBox="0 0 170 150" fill="none" {...props}>
      <rect x="18" y="18" width="134" height="92" rx="12" fill="#d8d3c8" stroke="#b9b2a6" />
      <rect x="30" y="30" width="110" height="68" rx="4" fill="#cfd8d5" />
      <rect x="74" y="110" width="22" height="10" fill="#cfc6b8" />
      <rect x="52" y="120" width="66" height="8" rx="2" fill="#b7ae9f" />
    </svg>
  );
}

export function Camera(props: IconProps) {
  return (
    <svg viewBox="0 0 150 120" fill="none" {...props}>
      <rect x="22" y="36" width="106" height="70" rx="18" fill="#d7e6de" stroke="#b7c8bf" />
      <circle cx="76" cy="72" r="22" fill="#c5d4cc" />
      <circle cx="76" cy="72" r="14" fill="#5c6964" />
      <circle cx="76" cy="72" r="6" fill="#1f2422" />
      <rect x="40" y="26" width="28" height="14" rx="4" fill="#d7e6de" />
      <circle cx="112" cy="52" r="5" fill="#e7c56a" />
    </svg>
  );
}

export function Journal(props: IconProps) {
  return (
    <svg viewBox="0 0 120 150" fill="none" {...props}>
      <rect x="24" y="14" width="78" height="118" rx="6" fill="#cbb396" />
      <rect x="32" y="24" width="62" height="98" fill="#efe4d2" />
      <text
        x="63"
        y="78"
        textAnchor="middle"
        fill="#8a7358"
        fontSize="11"
        fontFamily="cursive"
      >
        Journal
      </text>
    </svg>
  );
}

export function Stamps(props: IconProps) {
  return (
    <svg viewBox="0 0 160 140" fill="none" {...props}>
      <rect x="14" y="28" width="72" height="88" rx="4" fill="#e8f3e4" stroke="#c3d0bf" strokeDasharray="3 3" />
      <circle cx="50" cy="64" r="18" fill="#f2d27a" />
      <path d="M38 64c6-10 18-10 24 0-6 10-18 10-24 0Z" fill="#e37b6a" />
      <g transform="rotate(10 110 86)">
        <rect x="70" y="42" width="72" height="86" rx="4" fill="#eef3f8" stroke="#c9d3de" strokeDasharray="3 3" />
        <rect x="84" y="62" width="44" height="36" fill="#7ea0c4" />
      </g>
    </svg>
  );
}

export function StickyNotes(props: IconProps) {
  return (
    <svg viewBox="0 0 150 140" fill="none" {...props}>
      <g transform="rotate(-8 52 78)">
        <rect x="16" y="48" width="72" height="72" fill="#c9ddee" />
        <text x="28" y="78" fill="#4d6173" fontSize="9" fontFamily="ui-sans-serif">
          To Do
        </text>
      </g>
      <g transform="rotate(8 96 54)">
        <rect x="60" y="18" width="72" height="72" fill="#f0b7a4" />
        <text x="74" y="50" fill="#8a5348" fontSize="9" fontFamily="ui-sans-serif">
          Review
        </text>
        <text x="74" y="64" fill="#8a5348" fontSize="8" fontFamily="ui-sans-serif">
          at 7pm
        </text>
      </g>
    </svg>
  );
}

export function Folder(props: IconProps) {
  return (
    <svg viewBox="0 0 120 90" fill="none" {...props}>
      <path d="M12 28h32l10 10h54v40H12V28Z" fill="#7eb6ea" />
      <path d="M12 42h96v36H12Z" fill="#8ec4f2" />
    </svg>
  );
}

export function SparkCube(props: IconProps) {
  return (
    <svg viewBox="0 0 110 90" fill="none" {...props}>
      <circle cx="28" cy="28" r="6" fill="#ef6b55" />
      <circle cx="44" cy="18" r="7" fill="#4aa3ef" />
      <circle cx="38" cy="40" r="7" fill="#7ad36a" />
      <circle cx="22" cy="44" r="6" fill="#f0c14a" />
      <rect x="62" y="28" width="34" height="34" rx="6" fill="#2f333c" />
    </svg>
  );
}

export function PencilCup(props: IconProps) {
  return (
    <svg viewBox="0 0 90 120" fill="none" {...props}>
      <rect x="22" y="58" width="46" height="46" rx="6" fill="#d9c4a8" />
      <rect x="34" y="18" width="8" height="52" rx="2" fill="#6f7d62" />
      <rect x="46" y="10" width="8" height="60" rx="2" fill="#c56b4a" />
      <rect x="58" y="22" width="8" height="48" rx="2" fill="#7ea0c4" />
    </svg>
  );
}
