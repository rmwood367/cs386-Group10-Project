Deliverable 2
Group 10: Ryan Wood, Latisha Talayumptewa, Blase Gornick, Jeremiah Lopez, Brian Dorame, Alyssa Sombrero

Positioning
Problem Statement:

There is an ongoing problem concerning the number of f Indie movies present in public eyes, thus affecting the movie producers who are very passionate about the projects they presented, but lacking fundings for production companies. Due to this situation, the directors can’t present their movies in public spots, such as brand movie theaters, DVD copies of their movies, and more. Utilizing the average cost of creating 30 copies of movies to be distributed in a movie theater, would approximately be $36,000. Please note, this cost is only to create copies, now imagine how much it would be to create advertisements, hire production crews, movie equipment, movie documentations,  and more movie essentials. Considering this approximation, it may be around 1 million dollars to follow the steps of a typical Hollywood movie.

Product Position Statement:
For customers who enjoy watching movies and short films, as well as aspiring small movie producers , we present the upcoming  website platform ReelHaven; ReelHaven will be a streaming entertainment website that’ll contain sets of original movies created by non-industrial producers that tell more compelling and experimental stories. Unlike mainstream movie productions (Hollywood, Disney, and Marvel), our product will have passion movie projects that foretells original stories that don’t strictly abide by movie industry standards. Plus it’ll give those who visit the website an opportunity to support a small movie business.

Value Proposition and Customer Segment:

Stakeholders
List of Stakeholders of the Project:
Budget Filmmakers:
Independent creators who use the website to showcase their work and add on the database of films
Viewers / Consumers:
Consumers who visit the website to browse movies and watch any movies they find interesting and express their reactions through reviews.
Competitors: 
Developed websites and companies like letterbox, IMDb, and Rotten Tomatoes
Developers:
The web programmers and creators of the website Reel Haven. The developers task is to review movies for any violations on the rules and agreements, as well as its admin role.





Function Requirements (features)
Requirements:
We are going to need a working system of filtering movies. Movies can be recommended, searched for, or sorted by genre, year etc.
We will need selected movies to playback the file, or allow the user to download the file depending on implementation.
We will need settings on this playback. The user should be able to rewind, pause, fast forward, and change other settings, such as quality.
We will need a bio for producers who created their account on the platform to introduce themselves, share their passion, genres they specialize in, and their filmography. There will be an optional “button” if producers want to share a link to their website or youtube channel.





Non-functional Requirements
Non-functional requirements:
Performance
Importance: Ensures the website is responsive and can support many users at one time.
Goal: should load within 7 seconds for 95% of users and support multiple users at the same time, depending on our server support
Verification: Conduct testing & measure response time under stress loads.


Compatibility:
Importance: This website needs to be functional on many different screen	sizes.
Goal: Should be compatible with any desktop browser. Mobile support will be optional
Verification: Test across browsers and different devices.




Minimum Viable Product
 Our Minimum viable Viable Product will be a streaming service on the web browser. We will test it through a private server on Visual Studio Code as well as using our own personal laptops to run it as a private server. We will test our code using some version of pytest, or any equivalent testing framework for the languages we decide to use. We are going to validate that our site can effectively display or let you download files, allow you to create and use an account, and allow you to upload movies for review before being posted to the site.




Use Cases
Ryan Wood:
	User Case: looking at other reviews
	Actor: Site User / Friends of other users
	Trigger: Opening home page and/or clicking on a review
	Pre-condition: a user following another user, another users history
	Post-condition: A full view of the written review and rating
	Success Scenario: 
A user sees the displayed review from their homepage and can click on it to see more/interact with it	
A user sees the review from another user’s profile page and can click/interact with it
Alternate Scenario 1:
A user does not see a review on their homepage and is given a prompt to follow other users to see reviews
User does not have an account so it redirects them to make one so they can follow another user
User Interface Diagram:


Alyssa Sombrero:
	Use Case: Uploading Movie
	Actor: Budget FilmMakers (Indie FilmMakers), Client (Consumers)
	Trigger: Clicking on a submission page link
	Pre-conditions: An account user, on the submission page.
	Post-condition:  A checkbox checked verifying for “Rules and agreements” on uploading movie, an uploaded movie with a successful message, uploaded movie title recorded in database, under account name / username
	Success Scenario:
A user (can be the producer or client) clicks on submission page
User is  successfully in submission page and reads the rules and agreement section
User checks on check box to verify they read the terms
User successfully uploads an hour and half long video
Website responds with a success message
User clicks on the submit button and the website responds with a successful submission message.

	Alternate Scenario 1:
User doesn't have an account and attempts to upload movie

	Alternate Scenario 2:
User uploads movie
 does not read the rules and agreements (via checking the checkbox)

	Alternate Scenario 3:
User has an account
User uploads a movie that takes 80 GB memory (perhaps a movie marathon)
Successfully submits the movie

	Alternate Scenario 4:
User has an account
User agrees to agreements and rules
User uploads a movie (an accidental movie)
Successfully approved and uploaded
User wants to remove the uploaded movie and upload the intended one


Blase Gornick:
Use Case #1: Watch selected movie from catalog
Actor: Site user/Movie watcher
Trigger: Movie chosen from selection
Pre-conditions: Access to movie is permitted and user has an account
Post-condition: Movie is shown with display and video settings
Success Scenario:
User selects movie from catalog
Website checks account information with movie permissions
Movie stores default settings from account with the displayed video
Website displays movie with correct audio and video settings
Alternate Scenario #1:
User does not have an account
Redirect user to account creation
Alternate Scenario #2:
User does not have access to movie
Display error with relevant permissions denied


Latisha Talayumptewa:
	User Case: Managing a Filmmaker Profile
	Actor: Filmmaker
	Trigger: Filmmaker decides to build an online presence
	Pre-condition: The filmmaker has an account
	Post-condition: The filmmaker has a completed profile and showcases   their work, allowing users to view the profile.
	Success Scenario: 
The user navigates to the profile section.
The user inputs personal information/details in the given required fields.
User uploads their profile picture.
User showcases their projects (current and past) as part of the given portfolio section.
The profile is successfully saved and visible to the user.
Viewers can visit the profile, watch the filmmakers films, and are able to follow the filmmaker.
	Alternate Scenario #1:
The filmmaker does not fill in all the required information
System notifies filmmaker of missing information
Alternate Scenario #2:
The images fail to upload
System displays an error message and suggests the user to retry
User Interface Diagram:


Brian Dorame:
	User Interface Diagram: 




	User Case part 1: Submission process of uploaded movie
	Actor: Indie Filmmaker, administrator, movie marketer
	Trigger: Indie Filmmaker decides to upload a movie
	Pre-condition: Indie Filmmaker is logged in
	Post-condition: Movie is submitted for review
	Success Scenario:
			Indie Filmmaker uploads the movie file and fills in the data (title, description, genre, cast, etc.).
Indie Filmmaker submits the movie for review.
Actor(Movie Marketer) uses movie submission and suggests movies.


Alternate Scenario (Upload Denied):
Administrator rejects the movie submission.
Application notifies the Indie Filmmaker of the rejection.
Application provides feedback from the Administrator.
Indie Filmmaker reviews feedback and may resubmit.

	Alternate Scenario: 
User does not fill required text data for movie submission and presses submit
System notifies user to fill required boxes
	


Jeremiah Lopez:
	User Case: Insert a comment underneath movie in discussion board
	Actor: Site user and/or filmmaker
	Trigger: Click on comment entry box underneath film
	Pre-condition: User has a profile set up and types comment
	Post-condition: Comment displayed underneath selected film
	Success Scenario:
The user navigates to the profile section.
The user inputs personal information/details in the given required fields.
User uploads their profile picture. 
User clicks on the film they want to discuss about
User submits a personalized comment related to the film or a reply to another user
	Alternate Scenario #1:
User clicks on comment box underneath film
Website notifies them they need to create an account to access this feature
Alternate Scenario #2:
The profile images fail to upload
System displays an error message and suggests the user to retry
Alternate Scenario #3:
User submitted inappropriate phrases/words in profile
System displays an error message and suggests the user to retry
	User Interface Diagram: 





User Stories 
Ryan Wood:

	As a movie lover, I want to explore curated playlists of indie films based on themes or genres, so that I can easily find movies that match my mood or interests.
Priority: Medium
Estimated Time: 12 hours
Tasks:
Design a playlist system that groups films based on themes (e.g., “Best Sci-Fi Shorts,” “Award-Winning Films,” “Rising Directors”).
Implement a filtering system that allows users to browse playlists by genre, length, and rating.
Develop an admin panel for curators to create and update playlists.
Enable user-generated playlists, allowing viewers to create and share their own lists.
Run usability tests to ensure seamless playlist navigation and playback experience
As an independent filmmaker, I want to share my short films directly from the platform to social media, so that I can increase visibility and attract a larger audience.
Priority: High
Estimated Time: 10 hours
Tasks:
Implement social media integration (Facebook, Twitter, Instagram, etc.) to allow sharing of film links.
Develop a “Share” button for each movie page that generates a preview and link to the film
Ensure compatibility with different platforms and optimize meta tags for previews.
Create a customizable sharing message so filmmakers can add personal descriptions.
Test sharing functionality across various devices and browsers.

Alyssa Sombrero:

	As a small movie producer, I need a free platform to upload my movies for the public to watch for free and can watch anywhere, so that I can receive more public exposure for my short films.

	Priority: High

	Estimated Time: 12 hours

	Tasks:
Initializing a database and required necessities to store movie under the website database
Create a UI for the checkbox function and submission button.
Check if the check box function is able to respond with an error message if not checked and submission button is able to successfully upload the movie contents name into database
When functions are successful implement it to website
Run tests on it to verify if it does it successfully and handles error objects

	
As a filmmaker competitor, I want to utilize this platform to showcase all my films and shorts, so I can gain a larger audience who is interested in my works, as well as receiving more support than other social media platforms.

	Priority: medium
	
	Estimated Time: 8 hours
	
	Tasks:
Implement a algorithm to equally recommend shorts / movies to users as well as other producers
Debug algorithm to not contain any bias towards other producers, but only towards the users preference
Run tests on the algorithm and test its limit on what its given
Implement the algorithm on to the website
Run tests and debug.


Blase Gornick:

As an indie movie enthusiast, I want a page of recommended movies so that I may discover more interesting films relevant to me.

Priority: Medium

Estimated time: 12 hours

Task:
Create a User Interface create a page which will be filled with movies based on genres
In one section of the page, there will be recommended movies implemented by a “recommending” algorithm that calculates based on user’s preference
Connect the UI to the algorithms, so the algorithm can take control and recommend movies based on genres / reviews 
Continuously test and debug algorithm on a different page, simulating the actual movie page
Implement it to the website
Test run it

As a parent, I would like to be able to report movies or add a maturity rating to movies so that other parents and children can know what is appropriate and what is not.

Priority: Very low/optional

Estimated Time: 9 hours

Task:
Create a UI to filter out rated M movies based on the genres tags
Create a UI button report if the filter doesn't filter out the rated M movies, and the report will be sent to the admins
Test functions on a separate page to simulate the filters and button report
If the two functions pass the simulation, connect the functions to the webpage
Test and debug
		
Latisha Talayumptewa:

As a film enthusiast, I want to get personalized recommendations so that I can discover new indie films.
Priority: High
Estimated Time: 12 hours
Tasks: 
Create the UI for the recommendation section on the homepage. 
Implement filtering on recommendation system to suggest movies in the same genre or by the same director.
Allow other users ratings/reviews of films to contribute to recommendations. 
Test implementation and design.

As a filmmaker, I want to receive reviews/ratings of my work to provide me with valuable feedback in ways to improve.
Priority: Medium 
Estimated Time: 9 hours
Tasks: 
Design review submission form. 
Create UI to display reviews for films. 
Create UI for a review section for filmmakers to view feedback on their films. 
Test review submission.


Brian Dorame:
As a movie enthusiast, I want to give reviews on movies so that I can share my opinions and help others find movies. Tasks:
Design the review submission form.
Create the user interface for displaying reviews on the movie's detail page.
Enable users to rate movies with a star rating system.
Priority:
High
 Estimated Hours:
8 hours
			
As a filmmaker, I want to be able to publish my low budget films so that I can be recognized and gain exposure.
			Tasks:
Design and implement the film submission portal.
Create the user interface for data input.
Implement notification system for submission status updates.

			Priority: Medium
Estimated Hours:
12 hours
	

Jeremiah Lopez:

	User Story:  As a film enthusiast, I want to apply filters to my search results so I can find specific films that I like very quickly.
	
	Priority: Medium

	Estimated Hours: 6

	Tasks:
Create a pleasing UI structure so the user can click on check boxes on which filters to apply to their search results.
Assign variable to movies to distinguish them from each other
Variables can be decided via filmmaker’s decisions or viewer’s
Test implementation and further design process


	User Story: As a movie enthusiast, I want to be able to have small discussions about the film I watched so I can be more involved in the community.
	
	Priority: Low

	Estimated Hours: 10

	Tasks: 
Implement a small section underneath the current film that is for user-inputted comments, possible drop down.
Have a database stored the comment along with time and date the comment was made
Have it display the user’s name and profile pic (if they have one)
Have the user be able to reply to another user’s comment
Test implementation and design process

Issue Tracker:
*See Isues, all members did their portion*
