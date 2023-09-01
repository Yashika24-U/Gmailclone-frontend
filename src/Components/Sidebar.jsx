import SideBarContent from "../Components/SideBarContent"
import { Drawer } from '@mui/material'

const Sidebar = ({ openDrawer }, { toggleDrawer }) => {
    return (
        <Drawer
            anchor='left'
            open={openDrawer}
            onClose={toggleDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true,
            }}
            variant="persistent"

            // variant = "persistent". A click outside the Drawer closes it.
            sx={{
                '& .MuiDrawer-paper': {
                    marginTop: '64px',
                    width: 250,
                    background: '#F5F5F5',
                    borderRight: 'none',
                    height: 'calc(100vh - 64px)'
                }
            }}
        >

            <SideBarContent />


        </Drawer>
    )
}

export default Sidebar;