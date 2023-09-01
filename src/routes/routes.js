import { lazy} from "react"
// a technique that enables us to load 
// a specific component when a particular route is accessed.

const Main = lazy(()=>import('../pages/Main'));
const Emails = lazy(()=>import('../Components/Emails'))
const ViewEmail = lazy(()=>import('../Components/ViewEmail'))


// import Main from "../pages/Main"
// import Emails from "../Components/Emails"


const routes = {
    main:{
        path:'/',
        element:Main
    },
    emails:{
        path:'/emails',
        element : Emails
    },
    view:
    {
        path:'/view',
        element: ViewEmail
    },
    // for invalid routing
    invalid:{
        path : '/* ',
        element: Emails

    }
   
}

export {routes}