const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let biography = [];

rl.question('What\'s your name? Nicknames are also acceptable :) ', answer => {
  biography.push(answer);
  rl.question('What\'s an activity you like doing? ', answer => {
    biography.push(answer);
    rl.question('What do you listen to while doing that? ', answer => {
      biography.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', answer => {
        biography.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal? ', answer => {
          biography.push(answer);
          rl.question('Which sport is your absolute favourite? ', answer => {
            biography.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', answer => {
              biography.push(answer);
              console.log(`${biography[0]} loves listening to ${biography[2]} while ${biography[1]}, devouring ${biography[4]} for\n${biography[3]}, prefers ${biography[5]} over anyother sport, and is amazing at ${biography[6]}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});




