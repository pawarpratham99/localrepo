import CareerCard from "../components/CareerCard";
import { useNavigate } from "react-router-dom";

const careers = [
  { title: "Web3 Developer", emoji: "🕸️", description: "Build dApps, smart contracts, and DeFi tools." },
  { title: "Cybersecurity Analyst", emoji: "🛡️", description: "Protect networks, find vulnerabilities, secure data." },
  { title: "GATE Cracker", emoji: "📘", description: "Master core CS subjects for top IITs & PSUs." },
  { title: "Cloud Engineer", emoji: "☁️", description: "Deploy scalable apps on AWS, GCP, and Azure." },
  { title: "AI/ML Engineer", emoji: "🤖", description: "Build intelligent systems using data and algorithms." },
];

function Home() {
    const navigate = useNavigate();
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 text-white py-10 px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Choose Your Career Path 🚀</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {careers.map((career) => (
            <div key={career.id} onClick={() => navigate(`/career/${career.id}`)}>
              <CareerCard title={career.title} description={career.description} emoji={career.emoji} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Home;