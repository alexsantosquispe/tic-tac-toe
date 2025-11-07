import { twMerge } from 'tailwind-merge';

interface CellProps {
  value: string | null;
  isHeader?: boolean;
  className?: string;
}

export const Cell = ({ value, isHeader = false, className }: CellProps) => {
  if (isHeader) {
    return <th className={twMerge('px-2 py-1', className)}>{value}</th>;
  }

  return (
    <td className={twMerge('px-2 py-1 text-center', className)}>
      {!value ? '-' : value}
    </td>
  );
};
