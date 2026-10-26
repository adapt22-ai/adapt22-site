export default function Arrow({ direction = "diagonal" }) {
  return (
    <span className="ui-arrow" aria-hidden="true" data-ui-arrow={direction}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        focusable="false"
      >
        <path
          d={
            direction === "down"
              ? "M12 4v16m-6-6 6 6 6-6"
              : "M5 19 19 5M5 5h14v14"
          }
        />
      </svg>
    </span>
  );
}
