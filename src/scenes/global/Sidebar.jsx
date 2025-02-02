import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { HomeOutlined, MenuOutlined } from "@mui/icons-material";
import { PeopleOutlined } from "@mui/icons-material";
import { ContactsOutlined } from "@mui/icons-material";
import { ReceiptOutlined } from "@mui/icons-material";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import { CalendarTodayOutlined } from "@mui/icons-material";
import { HelpOutlined } from "@mui/icons-material";
import { BarChartOutlined } from "@mui/icons-material";
import { PieChartOutlineOutlined } from "@mui/icons-material";
import { TimelineOutlined } from "@mui/icons-material";
// import { MenuBookOutlined } from "@mui/icons-material";
import { MapOutlined } from "@mui/icons-material";

const Item =({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem 
          active={selected === title}
          style = {{ color: colors.grey[100]}}
          onClick = {() => setSelected(title)}
          icon = {icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>  
    )
}


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');


    return (
        <Box
        sx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important",
            }
        }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlined /> : undefined}
                    style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100],
                    }}
                    >
                        {!isCollapsed && (
                            <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                            >
                                <Typography variant="h4" color={colors.grey[100]}>
                                    Adminis
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlined />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* USER */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img 
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src={`https://c1.wallpaperflare.com/preview/712/939/597/sea-boat-sunrise-amazing.jpg`}
                                style={{cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>

                            <Box textAlign="center">
                                <Typography 
                                variant="h2" 
                                color={colors.grey[100]} 
                                fontWeight='bold' 
                                sx={{ m: "10px 0 0 0"}}
                                >
                                    Shanthi Kumar
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    Admin
                                    </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* MENU ITEMS */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                      <Item 
                        title="Dashboard"
                        to="/"
                        icon={<HomeOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                      />

                      <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px"}}
                      >
                          Data
                      </Typography>
                      <Item 
                        title="Manage Team"
                        to="/team"
                        icon={<PeopleOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                      />
                      <Item 
                        title="Contacts Information"
                        to="/contacts"
                        icon={<ContactsOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                      />
                      <Item 
                        title="Invoices Balances"
                        to="/invoices"
                        icon={<ReceiptOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                      />

                     <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px"}}
                      >
                          Pages
                      </Typography>
                      <Item 
                        title="Profile Form"
                        to="/form"
                        icon={<PersonOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                      />
                      <Item 
                        title="Calendar"
                        to="/calendar"
                        icon={<CalendarTodayOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                      />
                      <Item 
                        title="FAQ Page"
                        to="/faq"
                        icon={<HelpOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                      />

                      <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px"}}
                      >
                          Charts
                      </Typography>
                      <Item 
                        title="Bar Chart"
                        to="/bar"
                        icon={<BarChartOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                      />
                      <Item 
                        title="Pie Chart"
                        to="/pie"
                        icon={<PieChartOutlineOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                      />
                      <Item 
                        title="Line Chart"
                        to="/line"
                        icon={<TimelineOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                      />
                      <Item 
                        title="Geography Chart"
                        to="/geography"
                        icon={<MapOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                      />
                    </Box>
                </Menu>
            </ProSidebar>

        </Box>
    )
}

export default Sidebar;