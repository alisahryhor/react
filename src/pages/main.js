import React from "react";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Watch from "../components/Content/watch";
import WatchFunc from "../components/Content/watchFunc";

export default function MainPage() {
    return <main>
        <Header />
        <Content />
        <Watch date={new Date()}/>
        <WatchFunc date={new Date()}/>
    </main>
}