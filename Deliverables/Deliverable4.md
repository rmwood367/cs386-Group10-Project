# Deliverable 4 Report
## Developers: Ryan Wood, Latisha Talayumptewa, Blase Gornick, Jeremiah Lopez, Brian Dorame, Alyssa Sombrero

### Introduction: 
Film Haven is a streaming platform for movie lovers and aspiring filmmakers, featuring original, experimental films by independent creators where each user can create an account for a viewer or a producer, a home page to allow you to browse indie movies, profile page customization, and the ability to create and share reviews. 
<!--  Short paragraph to describe system (Has value prop & description of main features)

Criteria (1pt):
evaluated in terms of correctedness, completeness, thoroughness, consistency, coherence, adequate use of language
  desc consistent w/ current state of project
-->
#### Link to project on GitHub:
<!-- insert link -->
https://github.com/rmwood367/cs386-Group10-Project

### Requirements:
<!--
Requirements & associated pull request that you implemented for this release
Ex:
include:
  desc of requirement
  link to issue
  link to pull request(s)
  who approved it
  print screen depicting implemented (if applicable)

Criteria (8pt):
  all members of group should have worked on implementation activities & submitted pull requests. Only stable code should be included in release
  section will be evaluated in correctness, completeness, thoroughness, consitency, coherence, adequate use of language, amount of work put into implementation.
  Students can recieve different grades depending on involvment (all members contribute w/ non-trivial implementation)
  All pull request should be approved & integrated by quality assurance person (follow adequate workflow (desc of requirement on issue tracker, submission of the implemented requirement as a pull request, review of pull request by anothe developer)
  

Ex:
Requirment: As a student, I want to add hwk assignment so that I can organize my ToDo list
Issue: <link to Github Issue>
Pull Request: <insert link via .../project/pull/493
implemented by: <insert who>
approved by: <insert who>
print screen: <print screen that depicts implemented feature


-->
Requirement: As a user, I want to be able to search movies and see data on it after looking for one.
- Issue: https://github.com/rmwood367/cs386-Group10-Project/issues/57
- Pull Request: Pending
- Implemented by: Ryan Wood and Alyssa Sombrero
- Approved by: Jeremiah Lopez
- Print Screen: Not applicable

Requirments: As a user, I want to be able to create an account and save my data.
- Issue: https://github.com/rmwood367/cs386-Group10-Project/issues/11
- Pull Request: Sign Up styling Blase Gornick link(https://github.com/rmwood367/cs386-Group10-Project/pull/52)
- implemented by: Brian Dorame, Blase Gonrick, Latisha Talayumptewa
- approved by: Brian Dorame
- print screen: not applicable

Reqirement: As a worker under the developer, I want to maintain the data presented in the server-side of the app.
- Issue: https://github.com/rmwood367/cs386-Group10-Project/issues/62
- Pull Request: Created the Script.js for server side, integrated API, created .gitig... link (https://github.com/rmwood367/cs386-Group10-Project/pull/60)
- Implemented by: Alyssa Sombrero, Ryan Wood
- Approved by: Ryan Wood
- Print Screen: Not applicable

Requirement: As a user, I want to see my reviews, news, and recommendations based on the interests.
- Issue: https://github.com/rmwood367/cs386-Group10-Project/issues/9
- Pull Request: Added Display Page
- Implemented by: Jeremiah Lopez
- Approved by: Ryan Wood
- Print Screen: Not applicable
### Tests:
<!--
implement automated tests that verify correct behavior of code
  provide following:
    - test framework you used ot devel test (JUnit, unittest, pytest, etc)
    - link to github folder where automated unit tests located
    - example of test case. include in answer GitHub link to the class being tested and to the test
    - print screen showing result of the execution of the automated tests

  Criteria (3pts):
    adequate # of automated tests, should be well-written to excercise main components of system, covering relevant inputs
-->
![image](https://github.com/user-attachments/assets/d8815619-adda-4598-ba34-782776d2ac7b)


### Technology:
<!--
List the adopted technologies w/ brief description & justification for choosing them

Criteria (1pt):
  evaluated in terms of correctness, completeness, thoroughness, consistency, coherence, adequate use of language
-->
* Computer / Laptop: Laptops were used due to easy access and ability to work on our coding environment anywhere we go, and computers were a preference for some when working at home.
<!-- insert description of using computers and laptops to work our software . Maybe include the hardwares that allows computers to interact w/ application -->

* Azure: This is the deployment platform we used for this project.
<!-- possibly insert description of Azure and how its needed to deploy website -->
  
### Deployment:
<!--
Provide link and describe how you are deploying system

Criteria (3pts):
  graded based on adequate use of tech & its description
-->

* Link: http://localhost:3000
* How we are deploying *Film Haven* into Azure:
    Before we deploy the website into Azure, we decided to test it out using node.js first. We implemented API routing so it can be run on local system (via localhost:3000). We will first test out the website on node using command (*node script.js* in the group10 directory). If everything is working correctly, then we'll copy the files into Azure for official deployment. 

### Licensing:
MIT License was chosen for this project because its simplicity, permissiveness, and allowing for open collaboration, making it appealing for open-source projects.
<!--
Inform license you've adopted in source code and explain why you adopted this license

Criteria (1pt):
  evaluated in terms of correctness, completeness, thoroughness, consistency, coherence, and adequate use of language.
-->

### ReadMe.md File:
<!--
pepare a Readme.md file
repo should contain a CONTRIBUTING.md file, LICENSE file, CODE_OF_CONDUCT.md file

Criteria (3pts):
  Based on presence & quality of information presented in files
-->
https://github.com/rmwood367/cs386-Group10-Project/blob/main/README.md

### UX Design:
The design approach we did for our user interface was simplicity and easy accessbility. We wanted our users to easily go through our site and know about it is about without overwhelming them. We add eye-popping aesthetics that grab the user's attention and directs them to places we want them to show. This includes our film of the week or any potential film news. The user interface is very responsive and smooth throughout the website and allows for easy traversal between pages. Certain titles/sections will use different colors to distinguish themselves from the sections around them. We attempt to use a cinema aesthetic with the images we used, corresponding with the idea of our website. 
![image](https://github.com/user-attachments/assets/e348a166-28db-4079-a816-66374c453c73)
![CS386Sreenshot1](https://github.com/user-attachments/assets/a55234b8-de04-4d3b-8bd8-25ca93bac1f2)
![CS386Screenshot3](https://github.com/user-attachments/assets/d6f3c070-70b6-4e6d-a78a-f9a61d10993d)

<!--
Describe approach you adopted to design user interface (include screen shots)

Criteria (3pts):
  graded based on appearance (aesthetics) & usability (ease of use) of system
-->

### Lessons Learned:
One of the problems we had with this project was trying to merge between many different branches. We had to split out work between many people, causing us to creating many branches and pull requests, therefore, creating slight confusion on what can access what. This was quickly resolved as we learned more about github and its features, while communicating between each other. Another problem was doing this all relatively last minute. Despite coming up the features beforehand and communicating our parts, we still turned in this deliverabled pretty last minute. For the 2nd release, we will regulate our time more efficiently and effectively. We will learn more about the programs and environments we use and communicate to each other thoroughly to get project done.
<!--
describe what your team learned during 1s t release & what you are planning to change for 2nd release

Criteria (2pts):
  Adequate reflection abt problems & solutions, clear description w/ adequate use of language.
  -->

### Demo Link:
<!--
include link to a video showing sys working

Criteria (5pts):
graded based on quality of video, evidence that features are running as expected. Additional criteria are the relevance of demonstrated functionalities, correctnesss of funcitonalities, quality of developed system from user interface pov
-->
https://nau.zoom.us/rec/share/p7YSEiQ8MyB4hExQ51-cS_Dwb3FyFe-jPbiWY58KPz1WfLKqE-ZVN8FGO172zAO-.XmyIBzAyoAn-nH07
