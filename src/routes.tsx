import {createBrowserRouter} from "react-router-dom";
import {Default} from "./layouts/Default.tsx";
import {Status} from "./pages/Status.tsx";
import {Timeline} from "./pages/Timeline.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Timeline />
            },
            {
                path: '/status',
                element: <Status />
            }
        ]
    }
]);