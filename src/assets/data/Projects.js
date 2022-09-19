import Landing from '../projects/Landing_picture.png'
import Weather from '../projects/weather_main.png'
import Converter from '../projects/CurrencyConverter.png'
import Posts from '../projects/posts2.png'
import Gym from '../projects/gym_mobile_main.png'
export const projects = [
    {
        name: 'Sign up example',
        skills: 'React, Sass, RESTful API',
        description: 'Sign up with POST/GET requests',
        img: Landing,
        mobile: false,
        url: 'https://signup-ihor.netlify.app'
    },
    {
        name: 'Weather forecast',
        skills: 'React, Typescript, Tailwind',
        description: 'Cool weather forecast app, which shows the weather accurately.',
        img: Weather,
        mobile: false,
        url: 'https://weather-ihor.netlify.app'
    },
    {
        name: 'Currency converter',
        skills: 'React, JS, Tailwind',
        description: 'Simple but useful currency converter.',
        img: Converter,
        mobile: false,
        url: 'https://currency-ihor.netlify.app'
    },
    {
        name: 'Posts',
        skills: 'React, JS, CSS',
        description: "Post-app with different functions. Ignore the design - it's my first app)",
        img: Posts,
        mobile: false,
        url: 'https://posts-ihor.netlify.app'
    },
    {
        name: 'Workout app',
        skills: 'React, JS, Tailwind',
        description: 'Workout app for rep-counting',
        img: Gym,
        mobile: true,
        url: 'https://workout-ihor.netlify.app'
    },
]