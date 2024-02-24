import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import {
  selectIsLargeFontEnabled,
  toggleTextSize,
} from '../../redux/slices/toDoListSlice';
import { Button } from './Button';

export const ToggleTextSizeButton = () => {
  const dispatch = useAppDispatch();
  const isLargeFontEnabled = useAppSelector(selectIsLargeFontEnabled);
  const innerText = isLargeFontEnabled
    ? 'Disable Large Font'
    : 'Enable Large Font';
  return <Button action={() => dispatch(toggleTextSize())}>{innerText}</Button>;
};
