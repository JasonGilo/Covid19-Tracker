import React, { useEffect, useState } from 'react';
import Know from './know.png'
import Spread from './spread.png'
import Protect from './protect.png'
import Distance from './distance.png'
import Wash from './wash.png'
import Doctor from './doctor.png'

function Information() {
    return (<div id="Information-Box">
        <h2 style={{textAlign:'center'}}>Learn & Prevent Covid-19</h2>
        <h3><img src={Know}/>Know about COVID-19</h3>
        <ul>
            <li>Coronavirus (COVID-19) is an illness caused
by a virus that can spread from person
to person.</li>
<li>The virus that causes COVID-19 is a new
coronavirus that has spread throughout
the world. </li>
<li>COVID-19 symptoms can range from mild
(or no symptoms) to severe illness.</li>
        </ul>

        <h3><img src={Spread}/>Know how COVID-19 is spread</h3>
        <ul>
            <li>You can become infected by coming into
close contact (about 6 feet or two
arm lengths) with a person who has
COVID-19. COVID-19 is primarily spread
from person to person.</li>
<li>You can become infected from respiratory
droplets when an infected person coughs,
sneezes, or talks.</li>
<li>You may also be able to get it by touching a
surface or object that has the virus on it, and
then by touching your mouth, nose, or eyes.</li>
        </ul>
        <h3><img src={Protect}/>Protect yourself and others from COVID-19</h3>
        <ul>
            <li>There is currently no vaccine to protect
against COVID-19. The best way to protect
yourself is to avoid being exposed to the
virus that causes COVID-19.</li>
<li>Stay home as much as possible and avoid
close contact with others.</li>
<li>Wear a cloth face covering that covers your
nose and mouth in public settings.</li>
<li>Clean and disinfect frequently
touched surfaces.</li>
<li>Wash your hands often with soap and water
for at least 20 seconds, or use an alcoholbased hand sanitizer that contains at least
60% alcohol.</li>
        </ul>
        <h3> <img src={Distance}/>Practice social distancing</h3>
        <ul>
            <li>Buy groceries and medicine,
go to the doctor, and
complete banking activities
online when possible.</li>
<li>If you must go in person,
stay at least 6 feet away from
others and disinfect items you
must touch.</li>
<li>Get deliveries and takeout,
and limit in-person contact as
much as possible. </li>
        </ul>
        <h3> <img src={Wash}/>Prevent the spread of
COVID-19 if you are sick</h3>
        <ul>
            <li>Stay home if you are sick,
except to get medical care.</li>
<li>Avoid public transportation,
ride-sharing, or taxis.</li>
<li>Separate yourself from other
people and pets in your home.</li>
<li>There is no specific treatment
for COVID-19, but you can seek
medical care to help relieve
your symptoms.</li>
<li>If you need medical attention,
call ahead.</li>
        </ul>
        <h3> <img src={Doctor}/>Know your risk for
severe illness</h3>
        <ul>
            <li>Everyone is at risk of
getting COVID-19.</li>
<li>Older adults and people of
any age who have serious
underlying medical conditions
may be at higher risk for more
severe illness. </li>
        </ul>

        <span>All text was taken from: https://www.cdc.gov/coronavirus/2019-ncov/downloads/2019-ncov-factsheet.pdf</span>
    </div>);
}

export default Information