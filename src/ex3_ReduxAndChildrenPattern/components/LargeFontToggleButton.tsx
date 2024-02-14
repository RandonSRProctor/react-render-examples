import { Dispatch } from 'react';

type LargeFontToggleButtonProps = {
  isLargeFontEnabled: boolean;
  setIsLargeFontEnabled: Dispatch<boolean>;
};

export const LargeFontToggleButton = ({
  isLargeFontEnabled,
  setIsLargeFontEnabled,
}: LargeFontToggleButtonProps) => {
  return (
    <div className="p-1">
      {isLargeFontEnabled ? (
        <button
          onClick={() => setIsLargeFontEnabled(!isLargeFontEnabled)}
          className=" shadow border border-red-700 rounded bg-red-400 p-1 px-2"
        >
          Disable Large Font
        </button>
      ) : (
        <button
          onClick={() => setIsLargeFontEnabled(!isLargeFontEnabled)}
          className=" shadow border border-emerald-700 rounded bg-emerald-400 p-1 px-2"
        >
          Enable Large Font
        </button>
      )}
    </div>
  );
};
