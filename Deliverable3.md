<!-- rough draft for del. 3 from info gathered in meeting -->

**System Description:**
<!-- copied from discord -->

There is an ongoing problem concerning the number of f Indie movies
present in public eyes, thus affecting the movie producers who are very
passionate about the projects they presented, but lacking fundings for production
companies. Due to this situation, the directors can’t present their movies in public
spots, such as brand movie theaters, DVD copies of their movies, and more.
Utilizing the average cost of creating 30 copies of movies to be distributed in a
movie theater, would approximately be $36,000. Please note, this cost is only to
create copies, now imagine how much it would be to create advertisements, hire
production crews, movie equipment, movie documentations, and more movie
essentials. Considering this approximation, it may be around 1 million dollars to
follow the steps of a typical Hollywood movie

**Model:**
<!-- diagram to be developed -->

<!-- below will be delted once digram is complete -->
Classes:

1. UserAccount:

Attributes: userID, username, password, email, bio, favoriteGenres

Methods: login(), register(), updateProfile(), leaveReview(), rateMovie()

2. Movie:

Attributes: movieID, title, genre, releaseDate, director, description, rating

Methods: play(), download(), rate(), review()

3. PublisherAccount:

Attributes: publisherID, name, bio, genreSpecialization, filmography, websiteLink

Methods: submitMovie(), updateProfile(), respondToReview()

4. Admin:

Attributes: adminID, username, password, email

Methods: login(), approveMovie(), removeMovie(), banUser(), approveReview()

5. Stream:

6. Display:

7. PublisherDisplay:

8. Userdisplay:
