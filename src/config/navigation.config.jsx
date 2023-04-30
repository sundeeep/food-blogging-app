import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import FoodBankRoundedIcon from "@mui/icons-material/FoodBankRounded";
import MonochromePhotosRoundedIcon from "@mui/icons-material/MonochromePhotosRounded";
import SavedSearchRoundedIcon from "@mui/icons-material/SavedSearchRounded";
export const navBar = [
    {
        id: 1,
        link: "/",
        name: "Home",
        Icon: <HomeRoundedIcon className="text-[40px] text-pink-700"/>,
    },
    {
        id: 2,
        link: "/blog",
        name: "Blog",
        Icon: <FoodBankRoundedIcon className="text-[40px] text-pink-700"/>,
    },
    {
        id: 3,
        link: "/foodieinsta",
        name: "FoodieInsta",
        Icon: <MonochromePhotosRoundedIcon className="text-[40px] text-pink-700"/>,
    },
    {
        id: 4,
        link: "/search",
        name: "Search",
        Icon: <SavedSearchRoundedIcon className="text-[40px] text-pink-700"/>,
    },
    {
        id: 5,
        link: "/dashboard",
        name: "Dashboard",
        Icon: <SpaceDashboardRoundedIcon className="text-[40px] text-pink-700"/>,
    },
];
