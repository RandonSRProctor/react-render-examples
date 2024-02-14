import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import {
  selectIsLargeFontEnabled,
  toggleTextSize,
} from '../../redux/slices/toDoListSlice';
import { Setting } from './Setting';

export const SettingTextSize = () => {
  const dispatch = useAppDispatch();
  const isLargeFontEnabled = useAppSelector(selectIsLargeFontEnabled);
  return (
    <Setting
      setting="Text Size"
      value={isLargeFontEnabled ? 'Large' : 'Standard'}
      buttonText={
        isLargeFontEnabled ? 'Disable Large Font' : 'Enable Large Font'
      }
      action={() => dispatch(toggleTextSize())}
    />
  );
};
