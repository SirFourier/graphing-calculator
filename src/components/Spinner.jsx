export default function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="spinner-border text-dark" role="status"></div>
      <p className="lead fs-4">Loading Weather...</p>
    </div>
  );
}
