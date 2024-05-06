import React from "react";

import {Footer, Blog, Header, Features, Possibility, WhatGPT3} from './containers'
import {Article, Brand, CTA, Feature, Navbar} from './components'
import './App.css';
const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
        )
    }
export default App