interface Props {
  fill?: string;
  width?: number;
  height?: number;
}
function IconArrow({ fill = "white", width = 24, height = 24 }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2710_307)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 18L2 12L12 6L12 10.9608L22 10.9608L22 13.0392L12 13.0392L12 18Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_2710_307">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconArrow;
