import React, { useId } from 'react';

interface BrandLogoProps {
  className?: string;
  title?: string;
}

export default function BrandLogo({
  className = 'h-7 w-7',
  title = 'George Castillo — Monograma GC',
}: BrandLogoProps) {
  const uid = useId().replace(/:/g, '');
  const upperCId = `gc-upper-c-${uid}`;
  const lowerCId = `gc-lower-c-${uid}`;
  const foldSheenId = `gc-fold-sheen-${uid}`;
  const innerGId = `gc-inner-g-${uid}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="175 163 674 690"
      fill="none"
      role="img"
      aria-label={title}
      className={`select-none transition-transform duration-300 ${className}`}
    >
      <title>{title}</title>
      <defs>
        {/* Upper C ribbon gradient: body -> bronze -> champagne gold peak on top-right */}
        <linearGradient
          id={upperCId}
          x1="220"
          y1="540"
          x2="765"
          y2="275"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--logo-body-deep)" />
          <stop offset="48%" stopColor="var(--logo-body-mid)" />
          <stop offset="74%" stopColor="var(--logo-gold-bronze)" />
          <stop offset="90%" stopColor="var(--logo-gold-warm)" />
          <stop offset="100%" stopColor="var(--logo-gold-peak)" />
        </linearGradient>

        {/* Lower C ribbon gradient */}
        <linearGradient
          id={lowerCId}
          x1="250"
          y1="360"
          x2="740"
          y2="760"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--logo-body-soft)" />
          <stop offset="35%" stopColor="var(--logo-body-mid)" />
          <stop offset="100%" stopColor="var(--logo-body-deep)" />
        </linearGradient>

        {/* Inner left 3D ribbon fold highlight */}
        <linearGradient
          id={foldSheenId}
          x1="362"
          y1="342"
          x2="275"
          y2="535"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--logo-gold-peak)" />
          <stop offset="42%" stopColor="var(--logo-gold-warm)" />
          <stop offset="78%" stopColor="var(--logo-body-mid)" />
          <stop offset="100%" stopColor="var(--logo-body-deep)" stopOpacity="0" />
        </linearGradient>

        {/* Inner G metallic body gradient */}
        <linearGradient
          id={innerGId}
          x1="335"
          y1="330"
          x2="705"
          y2="695"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--logo-body-mid)" />
          <stop offset="55%" stopColor="var(--logo-body-deep)" />
          <stop offset="100%" stopColor="var(--logo-body-soft)" />
        </linearGradient>
      </defs>

      {/* 1. Lower C Ribbon (Tucked under the left 3D fold, sweeping around bottom) */}
      <path
        d="M 362 342 A 229 229 0 1 0 711 634 L 781 685 A 315 315 0 0 1 216 590 C 234 495 288 402 362 342 Z"
        fill={`url(#${lowerCId})`}
      />

      {/* 2. Champagne-Gold Inner Fold Reflection along the left ribbon tuck */}
      <path
        d="M 362 342 A 229 229 0 0 0 292 532 C 276 472 308 396 362 342 Z"
        fill={`url(#${foldSheenId})`}
      />

      {/* 3. Subtle crease shadow line for 3D depth */}
      <path
        d="M 216 590 C 234 495 288 402 362 342"
        stroke="var(--logo-crease-shadow)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* 4. Upper C Ribbon (Sweeping from left outer crease around top to Champagne-Gold top-right) */}
      <path
        d="M 216 590 A 315 315 0 0 1 777 326 L 706 390 A 229 229 0 0 0 362 342 C 288 402 234 495 216 590 Z"
        fill={`url(#${upperCId})`}
      />

      {/* 5. Inner G - Main C-curve with bottom diagonal slash */}
      <path
        d="M 685 418 L 608 436 A 114 114 0 1 0 564 613 L 516 696 A 188 188 0 1 1 685 418 Z"
        fill={`url(#${innerGId})`}
      />

      {/* 6. Inner G - Horizontal crossbar & sharp diagonal right jaw */}
      <path
        d="M 514 490 L 712 490 A 192 192 0 0 1 543 695 L 634 556 L 514 556 Z"
        fill={`url(#${innerGId})`}
      />
    </svg>
  );
}
