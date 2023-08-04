import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioTiles = [
    {
      image: '../../../assets/Tiles Images/note.jpg',
      title: 'Note App',
      body: 'Capture, organize, and remember every idea with our intuitive Note App.',
      link: 'https://sba-dev-noteapp.netlify.app/',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/cara.jpg',
      title: 'Cara | Online Shop',
      body: 'Indulge in style and elevate your wardrobe with our fashionable collection of clothing.',
      link: '../../../assets/Webpages/Cara-Org/index.html',
      class: 'all work css'
    },
    {
      image: '../../../assets/Tiles Images/active.jpg',
      title: 'Active House Technology',
      body: 'Welcome to the future of smart living with our groundbreaking Active House Technology.',
      link: '../../../assets/Webpages/ActiveHouse - Org/index.html',
      class: 'all work css'
    },
    {
      image: '../../../assets/Tiles Images/verticalTab.jpg',
      title: 'Vertical Tabs',
      body: 'Experience a new level of browsing convenience with our innovative Vertical Tabs feature.',
      link: '../../../assets/Webpages/Vertical tabs/index.html',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/ABC_News.jpg',
      title: 'ABC News',
      body: 'Stay informed and connected to the world with ABC News, delivering reliable and up-to-date information at your fingertips.',
      link: '../../../assets/Webpages/News API/index.html',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/animeGen.jpg',
      title: 'Anime Generator',
      body: 'Unleash your imagination with our Anime Generator, where you can bring your own unique characters to life in the captivating world of anime.',
      link: '../../../assets/Webpages/Anime Gnenerator/index.html',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/bml.jpg',
      title: 'BMI Calculator',
      body: 'Discover the key to a healthier lifestyle with our BMI Calculator, your personalized tool for assessing and managing your body mass index.',
      link: '../../../assets/Webpages/BMI Calculator/index.html',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/joke.jpg',
      title: 'Dad Joke Generator',
      body: 'Unleash the laughter with our Dad Joke Generator.',
      link: '../../../assets/Webpages/Dad Joke Generator/index.html',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/engdic.jpg',
      title: 'English Dictionary',
      body: 'Unlock words\' meanings with our English Dictionary.',
      link: '../../../assets/Webpages/English Dictionary/index.html',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/feedui.jpg',
      title: 'Feedback UI',
      body: 'Optimize user feedback with our intuitive Feedback UI.',
      link: '../../../assets/Webpages/Feedback UI/index.html',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/temp.jpg',
      title: 'Temperature Converter',
      body: 'Instantly convert temperatures between units with our Temperature Converter.',
      link: '../../../assets/Webpages/Temprature Convertor/index.html',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/qgen.jpg',
      title: 'Quotes Generator',
      body: 'Elevate your mindset with our Quotes Generator, inspiring you with daily doses of wisdom and motivation.',
      link: '../../../assets/Webpages/Random Quotes Generator/index.html',
      class: 'all work js'
    }
  ];
  
}
