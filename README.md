# MyReads

Udacity's nanodegree project for react.js , a virtual library which have 3 shelves. You can search for a book you want and put it in any shlef of the 3 and you can also move books from one shelf to the other.

## How to try the App

You can try the hosted version here : https://trymyprojects.github.io/

## How to install it locally
- this project uses node.js so if you don't have it yet, you can install node.js from here first : [Node.js](https://nodejs.org/en/)

- then head to the directory you want to store the app and run these commands
```
git clone https://github.com/sarah-maris/reactnd-project-myreads.git
npm install
```
- after installing all the depnedencies just type this command
```
npm start
```
Now your default browser will open at (http://localhost:3000/) and you wiil see a home bage similar to this one.
![image](https://user-images.githubusercontent.com/94765709/184538297-81b6769b-2de6-4ead-b950-a7dc635e807e.png)

- if you want to move a book from one shelf to another click on the green button on the desired book and choose the desired shelf.
you will notice that the default value for the menu us the current shelf of the book
![image](https://user-images.githubusercontent.com/94765709/184538396-2ee56a6d-cb0b-4694-8b0d-50356689e0e1.png)

- if you want to search for a specific book just hit the (+) button in the bottom-right corner of the screen and it will navigate you to the search page.
![image](https://user-images.githubusercontent.com/94765709/184538480-5e5e63db-d117-45f7-95ee-fe01d7a61497.png)

### Some Udacity Resources:

- [Project starter template](https://github.com/udacity/reactnd-project-myreads-starter)
- [Project Rubric](https://review.udacity.com/#!/rubrics/918/view)
- [Udacity CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [Udacity HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)


## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

#### Search Terms

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
