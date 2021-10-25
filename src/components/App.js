import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { Switch, Route } from "react-router-dom";
import UserInfo from "./UserInfo";
import Login from "./Login";
import Header from "./header";
import SideNav from './SideNav';
import { BrowserRouter as Router } from "react-router-dom";
import ControlSidebar from './ControlSidebar';


const link = createHttpLink({
    uri: '/graphql',
    credentials: 'same-origin'
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});

export default function App() {
    return (
        <Router>
            <Header />
            <SideNav />
            <ControlSidebar/>
            <div class="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                            <ApolloProvider client={client}>
                                <Switch>
                                    <Route exact path="/">
                                        <p>Dashboard</p>
                                    </Route>
                                    <Route exact path="/user">
                                        <UserInfo />
                                    </Route>
                                    <Route exact path="/login">
                                        <Login />
                                    </Route>
                                </Switch>
                            </ApolloProvider>
                    </div>
                </section>
            </div>

        </Router>
    )
}