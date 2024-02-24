import { ReactElement } from 'react';
import { Button } from './Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import {
  selectBackgroundColor,
  updateBackgroundColor,
} from '../../redux/slices/toDoListSlice';
import { getNextColor } from './utils/getNextColor';

type ToggleBGColorButtonProps = {
  children: string;
};

export const ToggleBGColorButton = ({ children }: ToggleBGColorButtonProps) => {
  const dispatch = useAppDispatch();
  const currentBackgroundColor = useAppSelector(selectBackgroundColor);
  const nextBGColor = getNextColor(currentBackgroundColor);

  return (
    <Button action={() => dispatch(updateBackgroundColor(nextBGColor))}>
      {children}
    </Button>
  );
};
