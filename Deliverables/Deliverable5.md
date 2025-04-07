# Deliverable 5 Report
## Developers: Ryan Wood, Latisha Talayumptewa, Blase Gornick, Jeremiah Lopez, Brian Dorame, Alyssa Sombrero

#### Link to project on GitHub:
<!-- insert link -->
https://github.com/rmwood367/cs386-Group10-Project

### Description: 
Film Haven is a streaming platform for movie lovers and aspiring filmmakers, featuring original, experimental films by independent creators where each user can create an account for a viewer or a producer, a home page to allow you to browse indie movies, profile page customization, and the ability to create and share reviews.

This website focuses on community engagement and this is shown through the reviews given to each film, and allowing comments on each one to give critique and conversation. It also allows viewers to discuss new material they have never seen before through recommendations based on their most recently viewed, and through the special feature of short of the month.


### Architecure: 

### Class Diagrams:
![ClassDiagram5 drawio (2)](https://github.com/user-attachments/assets/996d52e5-2425-49e7-94a7-16bd96a11bb1)

### Sequence Diagrams: ![User Sequence Diagram](https://github.com/user-attachments/assets/bfe9306c-aa0c-457c-b358-b14c48ea8fb0)

The majority of the people who use our service will be movie enthusiasts and movie watchers. Our primary use case is allowing a user/viewer to login, watch a movie, and leave feedback. This is how our service should work for somebody who already has an account. Feedback should be given to the publisher, and the user should have a success message, following a succesful review of a movie that has been succesfully displayed.


### Design Patterns: 
Structural:
![CS386DesignPattern](https://github.com/user-attachments/assets/7a2310c3-16be-4e98-ac3f-6724306d3d91)

Creational:
![DesignPattern](https://github.com/user-attachments/assets/9b776fe5-653a-4f5b-b8af-d5aa4f5bba45)

### Design Principles: 

**Design Principle #1:**

Looking at the movieReviews.html file you can see the class definitions below. These classes demonstrate SRP because each has a single, well-defined responsibility - the Movie class manages movie data and review collections, while the Review class only represents individual review data.

<img width="855" alt="movie-review-classes" src="https://github.com/user-attachments/assets/f174ec89-649e-4aa2-bb40-97fb56331fab" />



