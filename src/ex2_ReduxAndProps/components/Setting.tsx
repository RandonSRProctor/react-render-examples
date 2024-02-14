import { Button } from './Button';

type SettingProps = {
  setting: string;
  value: string;
  buttonText?: string;
  action?: Function;
};

export const Setting = ({
  setting,
  value,
  buttonText,
  action,
}: SettingProps) => {
  return (
    <li className="pl-1 py-1 text-sm">
      <div className="rounded-l pl-1 py-1 pr-14 bg-sky-200 border border-gray-300 border-r-0 shadow">
        <div className="text-base">
          <div className="p-1">
            <span className="font-bold">{setting}</span>: {value}
          </div>
          <div className="p-1">
            {buttonText ? (
              <Button action={() => action && action()}>{buttonText}</Button>
            ) : null}
          </div>
        </div>
      </div>
    </li>
  );
};
