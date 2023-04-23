import React from 'react'
import "./SidebarRow.css";
import HomeIcon from '@mui/icons-material/Home';
function SidebarRow({selected, Icon, title}) {
  return (
    <div className = {`sidebarRow  ${selected && "selected"}`}>
        <Icon className = "sidebarRow__icon" />
        <p className="sidebarRow__title">{title}</p>
    </div>
  )
}

export default SidebarRow