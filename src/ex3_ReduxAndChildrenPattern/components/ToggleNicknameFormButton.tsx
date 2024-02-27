import { useAppDispatch } from '../../redux/hooks/hooks';
import { toggleNicknameForm } from '../../redux/slices/toDoListSlice';
import { Button } from './Button';

type ToggleNicknameFormButtonProps = {
  children: string;
};

export const ToggleNicknameFormButton = ({
  children,
}: ToggleNicknameFormButtonProps) => {
  const dispatch = useAppDispatch();
  return (
    <Button action={() => dispatch(toggleNicknameForm())}>{children}</Button>
  );
};
