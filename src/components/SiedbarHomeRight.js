import React from 'react';
import '../css/siedbarHomeRight.css'
import SponsoredItem from './SponsoredItem';

const SiedbarHomeRight = () => {

    const sponsors = [
        {
            'title': 'GetResponse - Senior JavaScript Developer',
            'link': 'Justjoin.it',
            'img': 'https://scontent-waw1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p296x100/117182589_23845402997970034_448312465265757152_n.png.jpg?_nc_cat=103&_nc_sid=67cdda&_nc_ohc=BCkJ1y4AjcwAX-lWa7F&_nc_ht=scontent-waw1-1.xx&oh=b0ea9fdde6ec341d83cfa8a46cdd5807&oe=5F531BA2'
        },
        {
            'title': 'Dobrze wiesz, możesz obstawiać!',
            'link': 'sts.pl',
            'img': 'https://scontent-waw1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p296x100/117236817_23845226528580724_3091768779727937466_n.png.jpg?_nc_cat=102&_nc_sid=67cdda&_nc_ohc=f777nCMQRMUAX_rO-Mm&_nc_ht=scontent-waw1-1.xx&oh=b70cfae06fa7edc102e876c05f420e40&oe=5F51C048'
        }
    ]

    return(
        <div className="siedbarHomeRight">
            <h3>Sponsorowane</h3>
            {sponsors.map((sponsor, index) => <SponsoredItem key={index} sponsor={sponsor}/>)}
            <hr />
            <h3>Kontakty</h3>
         
            <hr />
            <h3>Konwersacje grupowe</h3>
         
        </div>
    );
}

export default SiedbarHomeRight;