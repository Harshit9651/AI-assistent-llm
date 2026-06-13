import Navbar from "../components/common/Navbar";

const ChatPage = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">

        <div className="rounded-xl border border-zinc-800 h-[70vh] p-6">

          <h2 className="text-2xl font-semibold">
            Welcome to HealthCare AI
          </h2>

          <p className="text-zinc-400 mt-2">
            Ask anything about EU MDR, PMCF,
            Clinical Evaluation and Healthcare Regulations.
          </p>

        </div>

      </div>
    </>
  );
};

export default ChatPage;