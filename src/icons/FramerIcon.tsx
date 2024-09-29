export const FramerIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_502_4541)">
        <rect x="4" y="4" width="40" height="40" rx="8" fill="#F7F7F7" />
        <rect
          x="4.25"
          y="4.25"
          width="39.5"
          height="39.5"
          rx="7.75"
          stroke="#E0E0E0"
          stroke-width="0.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17 28.3334H24V35L17 28.3334Z"
          fill="black"
        />
        <path d="M24 21.6666H17V28.3333H31L24 21.6666Z" fill="black" />
        <path d="M17 15L24 21.6667H31V15H17Z" fill="black" />
      </g>
      <defs>
        <filter
          id="filter0_dd_502_4541"
          x="0"
          y="0"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_502_4541"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.65098 0 0 0 0 0.65098 0 0 0 0 0.65098 0 0 0 0.24 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_502_4541"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="dilate"
            in="SourceAlpha"
            result="effect2_dropShadow_502_4541"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_502_4541"
            result="effect2_dropShadow_502_4541"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_502_4541"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
