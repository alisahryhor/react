import React from "react";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Watch from "../components/Content/watch";

export default function MainPage() {
    return <main>
        <Header />
        <Content />
        <Watch date={new Date()}/>
    </main>
}