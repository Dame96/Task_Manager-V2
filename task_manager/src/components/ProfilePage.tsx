//ProfilePage.tsx
import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "./PageLayout";
import { Col } from "react-bootstrap";
import TaskDashboard from "./TaskDashboard";

const ProfilePage: React.FC = () =>{

    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    if(!isAuthenticated){
        return <div>Not authenticated, Try again</div>
    }

    if(!user){
        return <div>No user profile</div>
    }

    getAccessTokenSilently().then(token => console.log('token', token))

    return(
        <PageLayout>
            <h3> Welcome Back! Manage your tasks here...</h3>
            <Col>
                {user?.picture && <img src={user.picture} alt={user.name} />}
                <h3>{user.name}</h3>
            </Col>
            <TaskDashboard />
        </PageLayout>
    )
}

export default ProfilePage;