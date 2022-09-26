
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialUISwitch } from './styles';
import { useContext, useState } from 'react';
import { MyThemeContext } from '../../App';

export function SwitchComponent() {
  const { setIsThemeDarkTrue } = useContext(MyThemeContext)

  const [isThemeDark, setisThemeDark] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setisThemeDark(event.target.checked);
    setIsThemeDarkTrue(!isThemeDark)
  }

  console.log(`is the app theme dark? ${isThemeDark ? 'Yes' : 'No'}`)

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} checked={isThemeDark} onChange={handleChange} />} label={undefined} />
      </FormGroup>
    </div>
  )
}
