import { Sidebar } from "../Components/Sidebar"
import PelicansRoutes from "../routes"
import { Container, Content } from "./styles"

const Layout = () => {
    return (
        <Container>
            <Sidebar />
            <Content>
                <PelicansRoutes />
            </Content>
        </Container>
    )
}

export default Layout