import React, {FC} from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {MainContainer, MainContent } from "./styled";

const MainLayout: FC = (props) => {
    const {children} = props;
    return(
        <MainContainer>
            <Header/>
            <Sidebar/>
            <MainContent>
                    {children}
            </MainContent>
        </MainContainer>
    )
}
export default MainLayout