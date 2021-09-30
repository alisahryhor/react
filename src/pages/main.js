import React from "react";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Watch from "../components/Content/watch";
import WatchFunc from "../components/Content/watchFunc";
import NameForm from "../components/Content/NameForm";

export default function MainPage() {
    return <main>
        <Header />
        <Content />
        <Watch date={new Date()}/>
        <WatchFunc date={new Date()}/>
        <NameForm />
    </main>
}