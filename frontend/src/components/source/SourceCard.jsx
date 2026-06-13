import { FileText } from "lucide-react";

const SourceCard = ({ source }) => {
  return (
    <div
      className="
      mt-3
      flex
      items-center
      gap-2
      rounded-lg
      border
      border-zinc-700
      bg-zinc-800
      px-3
      py-2
      text-sm
      text-zinc-300
      "
    >
      <FileText size={16} />
      <span>{source}</span>
    </div>
  );
};

export default SourceCard;