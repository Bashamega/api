const express = require('express');
const app = express();
const cors = require('cors');

// Define the object you want to return
const dataObject = {
  'projects': [
    {
        'name': 'CPK',
        'position': 'Developer',
        'about': 'A simple website where you can share you html and css projects',
        'link' : 'https://educpk.github.io/'
    },
    {
        'name': 'Italian Vocabulary',
        'position': 'Developer',
        'about': 'A website built to help students learn italian',
        'link': 'https://italianvocabulary.vercel.app/'
    },
    {
        'name': 'Xprofile',
        'position': 'Contibutor',
        'about': 'XProfile is an open-source app that provides a one-link portfolio for showcasing your projects, skills, social links, and more.',
        'link': 'https://xprofile.us/'
    },{
        'name': 'Web Dev Tools',
        'position': 'Owner',
        'about': 'WebDev Tools is a comprehensive online platform designed to empower web developers with a wide array of code samples and snippets. Whether you are a seasoned professional or just starting your journey in web development, our website provides you with a vast collection of code examples to streamline your workflow, enhance productivity, and create exceptional websites and web applications.',
        'link': 'https://web-dev-tools.vercel.app/'
    },{
        'name': 'REST Countries API with color theme switcher',
        'position': 'Developer',
        'about': '',
        'link': 'https://countriesaroundtheworld.vercel.app/'
    },{
        'name': 'Time tracking app',
        'position': 'Developer',
        'about': '',
        'link': 'https://timetracking-frontendmentor.vercel.app/'
    },{
        'name': 'News Home page',
        'position': 'Developer',
        'about': '',
        'link': 'https://newshomepagetemplate.vercel.app/'
    },{
        'name': 'Interactive rating component',
        'position': 'Developer',
        'about': '',
        'link': 'https://bashamega-interactive-rating-component.vercel.app/'
    }
    
  ]
};

// Enable CORS
app.use(cors());

// Endpoint to return the object
app.get('/projects', (req, res) => {
  res.json(dataObject);
});

// Handling other routes
app.use('*', (req, res) => {
  res.status(404).send('Route not found');
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app;