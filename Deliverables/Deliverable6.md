# Deliverable 6 Report
## Developers: Ryan Wood, Latisha Talayumptewa, Blase Gornick, Jeremiah Lopez, Brian Dorame, Alyssa Sombrero

<!--
Provide 1-2 paragraphs to describe your system (include value proposition & main features)
Include link to project on GitHub
Criteria: evaluated in term of correctness, completeness, thoroughness, consistence, coherence, and adequate use of language
consistent with current state of project.
-->
### Introduction: 
Film Haven is a streaming entertainment website that allows indie film enthusiasts to easily watch the most recent and popular indie films created by independent creators, prioritizing the customer needs by curating the website to their interests and encouraging community engagement.  By visiting Film Haven, users can experience innovative films and support small movie businesses and independent creators. Film Haven is a indie movie review website that allows film enthusiasts and aspiring indie filmmakers to discover, showcase, and review unique and compelling indie films. 

The system must support user account creation and management, allowing users to securely register, login, and update their bio and favorite genres. Publishers update their profile to include the bio, genre specialization and website link and need a simple process to submit their movie for assessment by admins, ensuring it is following platform guidelines. The system must also provide personalized recommendations generated from the user's favorite genres to help the user discover new indie films based on their viewing history and preferences. Additionally, users should be able to create and manage Watchlists and mark films as Favorites for easy access. The platform must include a review system, allowing users to add ratings and comments to movies, creating community engagement through comments and interactions. Admins must have the tools to review and approve film submissions and ban users to regulate platform rules. Finally, movies should be easily searched for by the user, using various criteria such as genre, year, rating, and title, allowing for a seamless and engaging experience for all stakeholders.

#### GitHub Project Link: https://github.com/rmwood367/cs386-Group10-Project/tree/main

<!-- 
List in sections Requirements & associated pull request that was implemented for the release

Example:
* Include description of requirement
* link to issue
* lik to pull request(s)
* Who implemented the requirement
* Who approved it
* screen shot that depicts implemented feature (if applicable)
* Order the requriements by the name of student who implmnted them

Important:
All source of code are submitted by pull requests and quality assurance person in tema 
should review and approve each pull request.

Criteria:
evaluated through correctness, completeness, thoroughness, consistency, coherence, amount of work put into implementation
students may recieve different grades depending on their involvement
allmembers contribute with non-trivial implementation
all pull request should be approved and integrated by quality assurance person
follow adequate worflow
  - description of requirement on issue tracker
  - submission of implemented requirement as a pull request
  - review of pull request by another dev
-->
### Requirements:

* Requirement: As a user I want to have my profile updated with my customization and saved on my account.
* Issue Link: #99 [issue #99](https://github.com/rmwood367/cs386-Group10-Project/issues/99)
* Pull Request Link: [pull request #97](https://github.com/rmwood367/cs386-Group10-Project/pull/97)
* Implemented By: Brian Dorame
* Approved By: Ryan Wood
* Print Screen:![image](https://github.com/user-attachments/assets/fe81f6e7-bd2e-4eec-a9f1-212fa839752b)

* Requirement:  As a film enthusiast, I want to apply filters to my search results so I can find specific films that I like very quickly.
* Issue Link: [https://github.com/rmwood367/cs386-Group10-Project/issues/13](https://github.com/rmwood367/cs386-Group10-Project/issues/13)
* Pull Request Link: [https://github.com/rmwood367/cs386-Group10-Project/pull/100]
* Implemented By: Jeremiah Lopez
* Approved By: Alyssa Sombrero  
* Print Screen: ![image](https://github.com/user-attachments/assets/768e57c9-89c2-4854-8be6-77c3fa9c08f7)

* Requirement: as a user I want to be able to review the movies I watch and engage with other reviews
* Issue Link: [issue #106](https://github.com/rmwood367/cs386-Group10-Project/issues/106)
* Pull Request Link: 
* Implemented By: Ryan Wood
* Approved By: Latisha Talayumptewa
* Print Screen: 
<img width="737" alt="Screenshot 2025-04-13 at 7 31 06 PM" src="https://github.com/user-attachments/assets/ef5f9cab-73db-4d44-afc5-999ccd0d839e" />

<br><img width="739" alt="Screenshot 2025-04-13 at 7 30 58 PM" src="https://github.com/user-attachments/assets/bb11c974-eebe-4a49-a8d9-75f5b4f164b0" />

* Requirement:  As a movie enthusiast, I want to see available genres so I can focus on the ones I enjoy.
* Issue Link: https://github.com/rmwood367/cs386-Group10-Project/issues/110
* Pull Request Link: https://github.com/rmwood367/cs386-Group10-Project/pull/108
* Implemented By: Alyssa Sombrero
* Approved By: Ryan Wood
* Print Screen:
  <img width="737" alt="TestDiscoverWebPage" src="https://github.com/CocoCat0/hello-world/blob/main/Screenshot%202025-04-13%20201253.png" />
  
  
* Requirement: Display details of a selected movie where users can view the title, movie description/plot, directors, genre, release date, runtime, ratings, and access reviews so they can determine whether the film matches their interests.
* Issue Link: [https://github.com/rmwood367/cs386-Group10-Project/issues/105](https://github.com/rmwood367/cs386-Group10-Project/issues/105)
* Pull Request Link: [https://github.com/rmwood367/cs386-Group10-Project/pull/107]
* Implemented By: Latisha Talayumptewa
* Approved By: Ryan Wood
* Print Screen: ![image](https://github.com/user-attachments/assets/43555e73-f09a-4c1f-91dd-9942445322d8)

* Requirement:
* Issue Link:
* Pull Request Link:
* Implemented By:
* Approved By:
* Print Screen:
<br>

<!--
Implement automated tests for features described in previous subsections. Provide following:
- Test framework used to develop your tests
- link to your GitHub folder where automated unit tests are located
- example of test case. Include GitHub link to class being tested and to the test
- print screen showing the result of automated tests execution

Criteria
- have adequate # of automated tests
- should be well written & match features implemented in aforementioned pull requests
-->
### Test:

#### Test Framework: jest for JavaScript testing
#### Link to automated unit tests: 
#### Link to class bieng tested & test itself:
#### Screenshot of Automated Tests Execution:
![image](https://github.com/user-attachments/assets/2232bf5d-6943-4db8-aa48-0b36eedc0c08)


<!-- 
Include link to video showing system working 
Criteria:
- graded based on quality of video & evidence that the features are running as expected
- relevance of demonstrated functionalities
- correctness of functionalities
- quality of developed system from external POV (User interface)
-->
### Demo:
Link to Demo: 

<!--
Describe how team managed code quality. What were your policies convention
Adopted best practices, etc to foster high-quality code?

Criteria:
- adequate list of practices that were adopted to improve code quality
- clear description with adequate use of language
-->
### Code Quality:
Our standards for code quality all came from the google style guidelines at https://google.github.io/styleguide/. These guidelines are widely used, and the level of detail in the guide was excellent. The most important standards were the ones regarding readability, like indents and braces surrounding conditionals.

<!-- 
Describe what your team learned during this second release and what would you change if you would 
continue developing the project

Criteria:
Adequate reflection about problems & solutions
- clear description with adequate use of language.
-->
### Lessons Learned:
As a team, we learned how to improve our efficiency while working on the second release of our website. We found it more manageable to create a document outlining the tasks and their implementation, allowing each of us to sign up for tasks individually. This approach gave us the opportunity to focus on tasks that suited our strengths. If we were to continue the project, we would prioritize better time management. This would involve allocating specific hours to work on deliverables and scheduling breaks, avoiding last-minute efforts that could compromise the quality of our product and teamwork.
