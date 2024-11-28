import HomeIcon from "../../../public/home.svg";
import SalesIcon from "../../../public/sales.svg";
import ProfilIcon from "../../../public/user.svg";
import MenuItem from "@/components/MenuItem";
const Index = () => {

    const menu = [
        {
            label: "Dashboard",
            path: "/",
            icon: HomeIcon.src
        },
        {
            label: "Sales",
            path: "/sales",
            icon: SalesIcon.src
        },
        {
            label: "Profil",
            path: "/profil",
            icon: ProfilIcon.src
        }
    ]

    return (
        <aside>
            <nav>
                <ul>
                    {
                        menu.map((itemMenu, index) => (
                            <MenuItem key={index} item={itemMenu } />
                        ))
                    }
                </ul>
            </nav>
            <div>
                <button></button>
            </div>
        </aside>
    )
}

export default Index;