# Tech Blog

## Description

The tech blog project is culmination of the last few week's learnings: the MVC principle, SQL / MySQL, express.js, and relational modeling. I built this project from scratch by starting with the models. I knew I'd need a user model and a post model, and it wasn't until later on that I realized a comments model was also necessary. After defining the relationships between these models, I seeded some starting data into my database. Next I created the controllers, which required several routes. I simultaneoulsy worked on the views, and worked piecemeal on the different components until I had a working product. Getting the application to the end goal took many commits and several adjustments, and this is by far the most time-intensive projet I've worked on. But in the end, I learned how the three MVC components work together to build a fullstack application, and I also had my first taste of creating user sessions. A login feature is paramount to most websites, so this is a critical thing to know for future development.

## Installation

My application is being hosted on Heroku here:
https://aqueous-springs-68236-b5e4d5df42c9.herokuapp.com/

The repository can also be cloned here:
https://github.com/ericlyn4s/tech-blog

## Usage

From the homepage, you can see any articles that have been posted. In order to click further into the site, you'll be implored to signup or login. This will check that your email address is valid and that your password includes a letter and number. Now, you can click on an article from the front page and you'll be taken to that post's path, which includes comments made by other users on the post. You're also given the option to comment on the post yourself. Hitting the 'home' button in the navigation bar will take you back to the homepage. Hitting the 'dashboard' button will take you to a list of all posts you've created. From here, you're also given the option to create a new post. After creating this post, you'll be taken back to your dashboard, where your new post will be displayed at the top of the list. Clicking into the post from this view will take you to it's individual webpage, where you can see comments or add a new one.

<image src="/public/pictures/dashboard-pic.png" width="650" alt="Image of the dashboard, which includes the option to create a new post"/>

<image src="/public/pictures/homepage-pic.png" width="650" alt="Image of the homepage"/>

## Credits

I had a tutor session with Charlie Puentes on 2/13/24.

## License

MIT License

Copyright (c) 2024 Eric Peterson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

