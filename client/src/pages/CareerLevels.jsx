// client/src/pages/CareerLevels.jsx
import { useParams, Link } from "react-router-dom";

function CareerLevels() {
  const { careerId } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Career Path: {careerId}</h1>
      <p className="mb-6 text-center max-w-xl">
        Here you'll soon see level-wise tasks and modules like Duolingo! 🎯
      </p>
      <Link to="/" className="text-blue-600 underline">← Back to Home</Link>
    </div>
  );
}

export default CareerLevels;
