import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import {
  selectBackgroundColor,
  updateBackgroundColor,
} from '../../redux/slices/toDoListSlice';
import { Setting } from './Setting';
import { getNextColor } from './utils/getNextColor';

export const SettingBGColor = () => {
  const dispatch = useAppDispatch();
  const backgroundColor = useAppSelector(selectBackgroundColor);
  const nextColor = getNextColor(backgroundColor);
  return (
    <Setting
      setting="Background Color"
      value={backgroundColor}
      buttonText="Change Color"
      action={() => dispatch(updateBackgroundColor(nextColor))}
    />
  );
};
