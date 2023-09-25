import React from "react";

import Feature from "../components/Feature";

import IconChat from '../assets/icons/icon-chat.png';
import IconMoney from '../assets/icons/icon-money.png';
import IconSecurity from '../assets/icons/icon-security.png';

function Home() {
    return (
        <div>
            <div class="hero">
                <section class="hero-content">
                    <h2 class="sr-only">Promoted Content</h2>
                    <p class="subtitle">No fees.</p>
                    <p class="subtitle">No minimum deposit.</p>
                    <p class="subtitle">High interest rates.</p>
                    <p class="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section class="features">
                <h2 class="sr-only">Features</h2>
                <Feature
                    image={IconChat}
                    alt='Chat Icon'
                    title='You are our #1 priority'
                    text='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
                />
                <Feature
                    image={IconMoney}
                    alt='Money Icon'
                    title='More savings means higher rates'
                    text='The more you save with us, the higher your interest rate will be!'
                />
                <Feature
                    image={IconSecurity}
                    alt='Security Icon'
                    title='Security you can trust'
                    text='We use top of the line encryption to make sure your data and money is always safe.'
                />
            </section>
        </div>
    )
}

export default Home;