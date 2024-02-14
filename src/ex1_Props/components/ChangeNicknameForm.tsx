import { Dispatch } from 'react';

type ChangeNicknameFormProps = {
  userNickname: string;
  setUserNickName: Dispatch<string>;
};

export const ChangeNicknameForm = ({
  userNickname,
  setUserNickName,
}: ChangeNicknameFormProps) => {
  return (
    <div className="p-1">
      <span>Nickname:&nbsp;</span>
      <input
        className="border border-black rounded"
        value={userNickname}
        onChange={e => setUserNickName(e.target.value)}
      ></input>
    </div>
  );
};
