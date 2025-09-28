import { ResetIcon } from '../icons/ResetIcon';

interface ResetButtonProps {
  onClick: () => void;
}

export const ResetButton = ({ onClick }: ResetButtonProps) => {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-xl font-black text-white uppercase shadow-md hover:cursor-pointer hover:bg-rose-500"
      onClick={onClick}
    >
      <ResetIcon />
      Play again
    </button>
  );
};
