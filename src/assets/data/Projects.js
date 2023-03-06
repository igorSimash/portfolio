import Landing from '../projects/Landing_picture.png'
import Weather from '../projects/weather_main.png'
import Converter from '../projects/CurrencyConverter.png'
import Posts from '../projects/posts2.png'
import Gym from '../projects/gym_mobile_main.png'
import Shop from '../projects/shop-app2.png'
import Todo from '../projects/Todo beta.png'
export const projects = [
    {
        name: 'Todo app (no responsive yet)',
        skills: 'React, Typescript, Node.js, Express, MySQL',
        description: 'Full Stack app with sign up/in, sessions etc...',
        img: Todo,
        mobile: false,
        site: 'https://ihor-todo.vercel.app/todos',
        github: 'https://github.com/igorSimash/todo',
        githubServer: 'https://github.com/igorSimash/todo-server'
    },
    {
        name: 'Shop app',
        skills: 'MERN Stack, TailwindCSS',
        description: 'Fake shop-app with MongoDB connection',
        img: Shop,
        mobile: false,
        site: 'https://ihor-shop.vercel.app/',
        github: 'https://github.com/igorSimash/shop-app-react',
        githubServer: 'https://github.com/igorSimash/shop-app-server'
    },
    {
        name: 'Sign up example',
        skills: 'React, Sass, RESTful API',
        description: 'Sign up with POST/GET requests',
        img: Landing,
        mobile: false,
        site: 'https://signup-ihor.netlify.app',
        github: 'https://github.com/igorSimash/signup-example'
    },
    {
        name: 'Weather forecast',
        skills: 'React, Typescript, Tailwind',
        description: 'Cool weather forecast app, which shows the weather accurately.',
        img: Weather,
        mobile: false,
        site: 'https://weather-ihor.netlify.app',
        github: 'https://github.com/igorSimash/weather-forecast'
    },
    {
        name: 'Currency converter',
        skills: 'React, JS, Tailwind',
        description: 'Simple but useful currency converter.',
        img: Converter,
        mobile: false,
        site: 'https://currency-ihor.netlify.app',
        github: 'https://github.com/igorSimash/currency-converter'
    },
    {
        name: 'Posts',
        skills: 'React, JS, CSS',
        description: "Post-app with different functions. Ignore the design - it's my first app)",
        img: Posts,
        mobile: false,
        site: 'https://posts-ihor.netlify.app',
        github: 'https://github.com/igorSimash/posts'
    },
    {
        name: 'Workout app',
        skills: 'React, Tailwind, backend',
        description: 'Workout app for rep-counting',
        img: Gym,
        mobile: true,
        site: 'https://workout-ihor.netlify.app',
        github: 'https://github.com/igorSimash/gym-app'
    },

]