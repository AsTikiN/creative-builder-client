export const LargeAvatarIcon = () => {
  return (
    <svg
      width="70"
      height="54"
      viewBox="0 0 70 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_502_551)">
        <g clip-path="url(#clip0_502_551)">
          <path
            d="M10 10C10 6.68629 12.6863 4 16 4H44C47.3137 4 50 6.68629 50 10V38C50 41.3137 47.3137 44 44 44H16C12.6863 44 10 41.3137 10 38V10Z"
            fill="#E0E0E0"
          />
          <g clip-path="url(#clip1_502_551)">
            <ellipse
              cx="30"
              cy="43"
              rx="16"
              ry="12"
              fill="white"
              fill-opacity="0.72"
            />
            <circle opacity="0.9" cx="30" cy="20" r="8" fill="white" />
          </g>
        </g>
        <path
          d="M10.25 10C10.25 6.82436 12.8244 4.25 16 4.25H44C47.1756 4.25 49.75 6.82436 49.75 10V38C49.75 41.1756 47.1756 43.75 44 43.75H16C12.8244 43.75 10.25 41.1756 10.25 38V10Z"
          stroke="#242424"
          stroke-opacity="0.1"
          stroke-width="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_502_551"
          x="-10"
          y="0"
          width="80"
          height="80"
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
            radius="12"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_502_551"
          />
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="16" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0533333 0 0 0 0 0.0693333 0 0 0 0 0.106667 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_502_551"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_502_551"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_502_551">
          <path
            d="M10 10C10 6.68629 12.6863 4 16 4H44C47.3137 4 50 6.68629 50 10V38C50 41.3137 47.3137 44 44 44H16C12.6863 44 10 41.3137 10 38V10Z"
            fill="white"
          />
        </clipPath>
        <clipPath id="clip1_502_551">
          <rect x="10" y="4" width="40" height="40" rx="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
