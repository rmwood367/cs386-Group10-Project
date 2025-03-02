<!-- rough draft for del. 3 from info gathered in meeting -->

**System Description:**
<!--first pargraph of system decription that inlcudes problem statement, product porposition, and Value Porposition. Still needs key requirments of system that is awaiting compleiion of class digram -->
**Problem Statement**: The problem of limited public visibility for indie films afects passionate movie producers who lack funding for production and distribution, while film enthusiasts struggle to find new indie films. This affects independent filmmakers who are dedicated to their craft but struggle to get their work noticed, as well as film enthusiasts who seek unique and compelling indie films but face difficulties in discovering them. Releasing movies into public spaces is costly creating a barrier for filmmakers which hinders their ability to reach a broader audience and gain public exposure. While, film enthusiasts are left without an accessible platform to discover and enjoy new indie films. <br>
**Product Proposition:** For film enthusiasts who enjoy watching unique and captvating movies, as well as aspiring indie filmmakers seeking a platform to showcase their work, Film Haven is a streaming entertainment website dedicated to original films created by independent producers. Film Haven offers compelling and experimental stories that difer from mainstream industry norms. Unlike Hollywood giants such as Disney and Marvel, our platform features passion driven projects that bring fresh and original narratives to the audience that don’t abide by movie industry standards. By visiting Film Haven, users can experience innovative films and support small movie businesses and independent creators. <br>
**Value Proposition:** Film Haven is a indie movie review websit that allows film enthusiasts and aspiring indie filmmakers to discover, showcase, and review unique and compelling indie films. Unlike mainstream movie platforms, Film Haven features passion driven projects that offer Fresh and original stories, providing an accessible and supportive space for independent creators and film lovers.

**Key Requiremnts:** 
<!-- awating class digrams -->



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
