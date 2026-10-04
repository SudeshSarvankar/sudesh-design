export function TornEdge({
  flip = false,
  fill = "#f4f0e5",
}: {
  flip?: boolean;
  fill?: string;
}) {
  return (
    <svg
      className={flip ? "torn-bottom rotate-180" : "torn-top"}
      viewBox="0 0 1440 42"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill={fill}
        d="M0 18c24-10 48 8 72 6 28-3 40-16 72-14 36 2 48 18 84 14 30-4 42-18 78-16s48 16 84 12c30-4 42-18 78-14 32 4 44 16 80 12 30-3 46-16 80-14 38 2 50 16 86 12 28-3 46-16 78-12 36 4 48 16 84 12 30-4 48-16 78-12 34 4 48 14 82 10 22-3 36-10 54-8v42H0V18Z"
      />
    </svg>
  );
}
