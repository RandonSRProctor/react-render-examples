import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { Setting } from './Setting';
import {
  selectIsLargeFontEnabled,
  toggleTextSize,
} from '../../redux/slices/toDoListSlice';

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
