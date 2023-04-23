<h1 align="center"><b>Pirate's Advenure </b><img src="https://media.giphy.com/media/l4EoYvSFAO0BjGcU0/giphy.gif" width="35"></h1>

Welcome to our pirate-themed treasure hunt website! This exciting adventure is filled with clues, riddles, and challenges that will lead you to the ultimate treasure. Follow the trail of our infamous pirate captain and discover hidden secrets along the way. Put your wits and skills to the test as you navigate through different levels, solve puzzles, and unlock clues. Join us on this thrilling journey and see if you have what it takes to find the treasure and become a legendary pirate!

## <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width ="25"><b> Technologies Used</b>

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=flat)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=flat)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat)
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white&style=flat)
- ![JSON](https://img.shields.io/badge/JSON-000000?logo=json&logoColor=white&style=flat)

## Soft Skills Assessed

1. Problem-solving skills: The game requires players to solve clues and puzzles to progress through the levels and ultimately find the treasure.

2. Critical thinking: Players need to use logic and reasoning to analyze information, make decisions, and solve complex challenges.

3. Communication skills: The game can be played individually or in teams, and players need to communicate effectively to collaborate, share ideas, and coordinate their efforts.

4. Creativity: Players may need to think outside the box and come up with innovative solutions to overcome obstacles and challenges.

5. Perseverance: The game can be challenging, and players need to persist in the face of setbacks, failures, and obstacles.

6. Time management: The game has a time limit, and players need to manage their time effectively to complete tasks and reach their objectives.

7. Adaptability: The game may have unexpected twists and turns, and players need to adapt quickly to changing circumstances.

## Deployment

1. To directly view the front-end of the website, visit the following url :-

```
https://644574157ba8f973b205a847--regal-sfogliatella-7a298a.netlify.app/

```

2. To run the application on your device :-

- run the index.html file
- "npm run start" on the terminal (like in vs code): it will start node server which will listen on port http://localhost:3000
  After this you will be able to register as a user, hence will be able to login

## Features

- Total clues(including dead-end paths) :- 5
- Dead-ends :- 2
- Total solutions :- 1

1. At each page we have a "progress" button which is in a modal window. You can press it to check your progress like how much time you have spent on the page and also how many tries you have made for that level.

2. Node api is storing user's data on server as json object ( mongodb or any other database could have been used to store data ).

3. Node api is used to fetch user's data on login if user is valid user and redirects user to play game, else user is kept at login page.

4. On Register user's details are stored in json object with uniqueId.

5. Chrome localStorage is used to store the user's object post login.

6. Each user first need to register with a valid email address, he/she needs to submit a username along with password. This username will be displaying on the progress button (as demonstrated later). All the details of the user will be stored at the database.

7. If a user has not registered, he/she will not be able to login in, therefore first you have to register as a user.

## Features that I planned to add but due to shortage of time was not able to add

- There were numerous features that I had envisioned, but due to time constraints and ongoing evaluations, I could only showcase a limited set of functionalities :-

1. I was planning to encrypt password on login using cryptojs / aes etc. and even during storage.

2. User's progress object is readily available on front end and to be integrated.

3. Browser's refresh event needs to be captured so that it's not reset.

4. I was also planning to add some more interesting clues along with some animation effects.

## Demonstration of some important features

1. Not able to log-in without a registered email address

<img width="545" alt="1" src="https://user-images.githubusercontent.com/70968092/233853776-ed161b99-ed49-4d64-9b5b-3f96e8b67d4c.png">

- These are the email address's that I registered initially along with the data stored

<img width="933" alt="2" src="https://user-images.githubusercontent.com/70968092/233853843-3b165284-f955-4b6c-b734-ffa26a614b78.png">

2. Now, I logged in with my email and a username "Manmeet". So, one can see my log in on the top right corner

<img width="934" alt="3" src="https://user-images.githubusercontent.com/70968092/233854003-9688abc7-37a6-46f1-af45-6ac8ff9fa6c4.png">

3. The user's progress at each level can be seen on clicking the progess button

<img width="928" alt="4" src="https://user-images.githubusercontent.com/70968092/233854066-63380a44-020b-4ebc-a8c1-9f8eb38c5448.png">

## Demo of the game

- To start the game click on the "Get Started" button.

<img width="957" alt="Screenshot 2023-04-23 021312" src="https://user-images.githubusercontent.com/70968092/233805854-9e222f78-588a-4b21-885f-818957baff55.png">

- After this, you need to log in with your registered email id. If not registered, you can register your account using the "register" option. All of this is controlled and saved at the backend using the node modules.

<img width="945" alt="2" src="https://user-images.githubusercontent.com/70968092/233805902-c3bc996f-cff6-4e14-893f-4d8378b5e21f.png">

<img width="911" alt="1 1" src="https://user-images.githubusercontent.com/70968092/233854864-c0c5f37a-9105-4172-a302-1b7e7aa047b3.png">

Now you can start the game with your account!

- Clue - 1 --> "Arrr matey, ye've reached the first mark on our grand adventure! But the real journey begins now, as we search for the elusive treasure map that'll lead us to riches beyond our wildest dreams. Hoist the sails and keep yer eyes peeled, for danger lurks around every corner and only the bravest among us shall prevail.You may ask Captain kidd for "The Map" but remember to add "your sword" as you find the map."

<img width="953" alt="1 2" src="https://user-images.githubusercontent.com/70968092/233854875-e64c697b-7de2-4ce2-b073-dd300428fb87.png">

This clue leads to two ways, one goes towards the first dead end and other is the right path. To find the answer to this one click on the link "Captain kidd". You will reach to a cipher website, then encrypt the text "The Map" (exactly) to find the encrypted code. Now if you just type the code and submit it you will lead to wrong path.

<img width="334" alt="4" src="https://user-images.githubusercontent.com/70968092/233805971-4382cba5-8d90-46c6-b671-9b58c16986f8.png">

- First let's explore the wrong path i.e you have typed "XKIpOmg8pBxnlmvz60Gm8Q==" as the answer.

Clue-2(Incorrect) --> "WELL DONE CAPTAIN! NOW THIS ONE IS RELATED TO OUR OLD FRIEND, MR. JACK SPARROW. RECENTLY, HE WAS SAILING BY THE BLACK PEARL AND WAS ASKING FOR THIS ?"!

<img width="960" alt="1 3" src="https://user-images.githubusercontent.com/70968092/233854953-af797701-9112-45de-a7b7-7b598558f84e.png">

This is from the movie "pirates of the caribbean", the dialogue completes as "rum always". After answering this you will face the first dead end.

- First Dead end :-

<img width="956" alt="6" src="https://user-images.githubusercontent.com/70968092/233806067-d5b4b92e-6352-4d4f-8f28-6010bc31f942.png">

Now, the dead end provide you to restart the game.

- Now, let's explore the right path i.e. you have typed "XKIpOmg8pBxnlmvz60Gm8Q==your sword" as an answer.

* clue-2(Correct) --> Here, in this clue there is a link named "Click me". You can see this if you select the text of the page. Clicking on the link you will head to a document. In the document, it is written "Great going captain ! For the next one you first need to remove all the unnecessary things from your life."

<img width="960" alt="1 4" src="https://user-images.githubusercontent.com/70968092/233854981-dcbb7956-962f-4bdc-930e-ee51b58203e8.png">

<img width="488" alt="8" src="https://user-images.githubusercontent.com/70968092/233806128-b4d22754-ac92-4277-a91b-ff665d299677.png">

- Now, there are again two ways to this, one leads to dead end and other goes to the right way. Let's first explore the wrong way.

Towards dead end --> "https://shorturl.at/enemies/unnecessary/erAM9" In this link if you remove the "unnecessary/" from this and click on submit, you will lead to next incorrect clue.

- clue-3(Incorrect) --> "Well done on the last one captain! Now answer this one, fill the blank for the person described :- "She was born in Guangdong, China in 1775. Married a notorious pirate named Cheng I, who commanded a fleet of over 300 ships and 20,000 pirates. As a female pirate captain who commanded a powerful fleet of ships and men has made her a symbol of female empowerment and resistance against patriarchy in Chinese history" Who is she ?"

<img width="960" alt="1 5" src="https://user-images.githubusercontent.com/70968092/233855000-c8cf7192-1c62-4300-a855-8a85b4a250e1.png">

The answer to this one can be found on Google. Answer --> "Zheng Yi" (exactly)

- Now, we face the dead end 2 :-

<img width="956" alt="6" src="https://user-images.githubusercontent.com/70968092/233806185-1a2114a4-8c63-48a6-ae70-4c4fc87089d6.png">

- If you answer this you lead to the dead end, again.

- Towards the right path :-

If you had answered by also removing the "enemies/" in the above clue-2, then you would lead to right way.

Answer --> https://shorturl.at/erAM9

By typing this and Clicking the submit button, you reach to the final clue to find the treasure.

- clue-4 --> "This time you got it right, captain! Now this is the last step. You have to get this one right !"

<img width="960" alt="1 6" src="https://user-images.githubusercontent.com/70968092/233855012-eabfecce-4498-4a15-9ae2-a104dceb2e4a.png">

Here, you can find a link. On that link you find a document which has some numbers. By using the numbers provided at the bottom, you can find that the answer is "treasure".

<img width="371" alt="12" src="https://user-images.githubusercontent.com/70968092/233845768-7ebe5b9b-8f8b-437d-a612-2e2b4087107c.png">

- On answering this correctly, you reach to the final treasure.

<img width="960" alt="1 7" src="https://user-images.githubusercontent.com/70968092/233855069-da14c086-9f14-4b1f-89e9-dbbcc4180676.png">
