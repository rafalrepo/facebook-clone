import React, { useState, Fragment } from 'react';
import '../css/siedbarHomeLeft.css';
import SiedbarHomeLink from './SiedbarHomeLink'

const SiedbarHomeLeft = () => {

    const [tSiedbar, setTSiedbar] = useState(false);

    const links = [
            {
                'src': 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/cp0/s40x40/1375318_188639001321365_1556382221_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=uIAlamsdibAAX9wz0kC&_nc_ht=scontent-waw1-1.xx&oh=dd078e050cef8921047a51acf867a4d6&oe=5F50E347',
                'text': 'Jan Kowalski',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png',
                'text': 'COVID-19 – centrum informacji',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png',
                'text': 'Znajomi',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png',
                'text': 'Grupy',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png',
                'text': 'Marketplace',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png',
                'text': 'Filmy',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png',
                'text': 'Wydarzenia',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/AzoqGSvagcH.png',
                'text': 'Grupy kupna i sprzedaży',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png',
                'text': 'Gry',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png',
                'text': 'Listy znajomych',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/SeXJIAlf_z-.png',
                'text': 'Messenger',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png',
                'text': 'Najnowsze',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/3jfPQhTRYG8.png',
                'text': 'Oculus',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png',
                'text': 'Oferty',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png',
                'text': 'Oferty pracy',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png',
                'text': 'Ostatnia aktywność dotycząca reklam',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png',
                'text': 'Pogoda',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/cT5nPnO8Wsc.png',
                'text': 'Reagowanie na sytuacje kryzysowe',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/O_Cx7JLPvEA.png',
                'text': 'Rekomendacje',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png',
                'text': 'Strony',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Nl9CPY6q_n-.png',
                'text': 'Transmisje wideo na żywo',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/5EU1wNhLmR6.png',
                'text': 'Wideo z grami',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png',
                'text': 'Wspomnienia',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png',
                'text': 'Zapisane',
                'route': '/',
            },
            {
                'src': 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png',
                'text': 'Zbiórki pieniędzy',
                'route': '/',
            }
        ]

        const shortcuts = [
            {
                'src': 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-0/cp0/c0.0.50.50a/p50x50/106387698_3231081856914295_4289629399641721905_n.jpg?_nc_cat=108&_nc_sid=ca434c&_nc_ohc=Wek0eXCLutQAX8DFB6I&_nc_ht=scontent-waw1-1.xx&oh=2ae62b40f9b52f5d4b157925d70df2f9&oe=5F53C66C',
                'text': 'Hearthstone Polska',
                'route': '/',
            },
            {
                'src': 'https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-0/cp0/c16.0.50.50a/p50x50/22181648_1079226248846412_758401004991203976_o.jpg?_nc_cat=111&_nc_sid=ca434c&_nc_ohc=kiByOkk2yS8AX_TTygd&_nc_ht=scontent-waw1-1.xx&oh=0e65e8dc3e67e451d3348c16ed657aa5&oe=5F5350D9',
                'text': 'Praca w IT dla Stażystów i Juniorów (IT...',
                'route': '/',
            },            {
                'src': 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-0/cp0/c68.0.50.50a/p50x50/10592929_10204070210107354_8029872524163278249_n.jpg?_nc_cat=104&_nc_sid=ca434c&_nc_ohc=upbWobL2LIMAX-vPsvC&_nc_ht=scontent-waw1-1.xx&oh=cd152d81242b3e81912cccd199a44bb8&oe=5F518C22',
                'text': 'Front-end: pierwsza praca w HTML5, CSS3 i JavaScript',
                'route': '/',
            }      
        ]    

    return(
        <div className="SiedbarHomeLeft">
            {links.map((map, index) => 
                (!tSiedbar ? index < 7 ? <SiedbarHomeLink src={map.src} text={map.text} /> : ''  : <SiedbarHomeLink src={map.src} text={map.text} />)
            )}
            <button className="siedbarHomeLink siedbarHomeLink--button" 
                    onClick={(e) => setTSiedbar(!tSiedbar)}
                >{!tSiedbar ? <><div className="siedbarHomeLink__faContent"><i class="fa fa-chevron-down"></i></div> Zobacz więcej </>
                            : <><div className="siedbarHomeLink__faContent"><i class="fa fa-chevron-up"></i></div> Pokaż mniej</>}</button>

            <hr />

            <h3>Skróty</h3>
            {shortcuts.map(shortcut => <SiedbarHomeLink src={shortcut.src} text={shortcut.text} />)}
        </div>
    )   
}

export default SiedbarHomeLeft;