import { Suspense, useState } from "react"
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom"
import SuspenseLoader from "../common/SuspenseLoader";
import { Box } from '@mui/material'
const Main = () => {
    const [openDrawer, setOpenDrawer] = useState(true)

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }

    return (
        <>
            <Header toggleDrawer={toggleDrawer} />
            <Box>
                <Sidebar openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
                <Suspense fallback={<SuspenseLoader />}>
                    <Outlet context={{ openDrawer }} />
                </Suspense>
            </Box>
        </>
    )

}

export default Main; 