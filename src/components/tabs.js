import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "../css/tabs.css"
import { GlobalContextState } from '../context/context';


export default function ColorTabs() {
  const [value, setValue] = React.useState('General');
  const {
    productDispatch,
    productState: { byStock, sort},
  } = GlobalContextState();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  

  return (
    <Box className="box-tab-container">
      <Tabs
        className="tab-container"
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab className="tab" onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        } value="General" label="General" />
        <Tab className="tab" onClick={() =>
          productDispatch({
            type: "FILTER_BY_CATEGORY",
          })} 
        value="Locale" label="Category" />
        <Tab className="tab" onClick={() =>
          productDispatch({
            type: "SORT_BY_PRICE",
            payload: "lowToHigh",
          })} value="Ascending" label="Ascending" />
        <Tab className="tab" onClick={() =>
          productDispatch({
            type: "SORT_BY_PRICE",
            payload: "highToLow",
          })} value="Descending" label="Descending" />
      </Tabs>
    </Box>
  );
}
        