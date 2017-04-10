[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# tic-tac-toe-game
Link to Game: https://awoodrum87.github.io/tic-tac-toe-client/index.html

Technologies used:
1. My trusty MacBook
2. HTML and CSS (sans Bootstrap) for UI
3. JavaScript for the game engine. The game engine processes the logic to determine
   a winner and the token that won (X or O), determine a tie, and display the winner.
4. jQuery and Ajax for handling click events and manipulating HTML

Planning and approach:
The approach was to put together a simple front end so that I could register the clicks (most importantly, the player tokens and their index in the game board array). I assumed building the game engine and testing it would be the most challenging so I wanted to get to that as soon as possible. Then I had planned to move on to the interaction with the API (specifically getting game data, storing it, and starting a new game).

I followed this plan very closely and I would not change my approach given the chance to do it again.

Problem solving strategy:
I tested as I coded. I usually tested before finishing the feature, usually after a line or two of code was written. I had console.log functions where ever possible so I could see what my code doing each step of the way. To solve the problems that popped up, I usually played with the order my code was in (that was most of my trouble) or just tried to tinker with it until it worked. If that did not solve my problems I opened an issue or worked with my classmates.

Unsolved Problems and future iterations:
The only outstanding requirement is to use AJAX to interact with the API to visually display game statistics. I plan to complete that by the second submission date.

For future iterations my focus would be on the UI and making it more visually appealing. I would incorporate Bootstrap Modals and
a navigation bar to make the sign-up/in/out part of the page cleaner and not visible while playing the game.

Wireframes and User Stories:
Link to first draft of wireframes: https://goo.gl/photos/UPa2914MnndoBCUv8
Link to wireframe after realizing the SPA requirement: https://goo.gl/photos/qKFzMFW27kSzG5RVA

1. User wants to create an account
2. User wants to log-in
3. User wants to change password
4. User wants to logout
5. User wants to play tic-tac-toe
6. User wants winner or tie game to appear at the conclusion of a game
7. User wants to be able to play multiple games, one at a time, within a single login
8. User wants game data stored and then retrieved to display game stats on the screen








## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
