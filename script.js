const dareQuestions = [
"Give your partner a passionate kiss for one minute.",
"Show your partner your favorite part of your body.",
"Let your partner choose one item of clothing for you to remove.",
"Kiss your partner's neck for 30 seconds.",
"Give your partner a sensual massage.",
"Let your partner blindfold you and tease you with kisses.",
"Show your partner your sexiest underwear.",
"Whisper your wildest fantasy into your partner's ear.",
"Let your partner choose where you kiss them.",
"Give your partner a slow, seductive dance.",
"Let your partner take a sexy photo of you.",
"Kiss your partner while sitting on their lap.",
"Let your partner choose your next romantic pose.",
"Tell your partner what you find most attractive about their body.",
"Let your partner remove one item of clothing while you maintain eye contact.",
"Give your partner a sensual back rub.",
"Let your partner choose a naughty nickname for you.",
"Kiss your partner in three different places.",
"Let your partner whisper a secret desire to you.",
"Spend two minutes cuddling and kissing without speaking.",
"Show your partner your favorite lingerie or underwear.",
"Let your partner choose a song for you to dance to.",
"Give your partner a long, passionate hug.",
"Tell your partner your biggest turn-on.",
"Let your partner choose a playful challenge for you.",
"Kiss your partner while they sit on your lap.",
"Give your partner a romantic compliment in your sexiest voice.",
"Let your partner choose an outfit for your next date.",
"Show your partner your most seductive facial expression.",
"Let your partner give you a playful kiss wherever they choose.",
"Tell your partner what you would love to try on a romantic night together.",
"Let your partner choose a romantic scene for you to act out.",
"Give your partner a slow dance while maintaining eye contact.",
"Let your partner choose a place for you to kiss them.",
"Tell your partner your favorite memory of being intimate together.",
"Let your partner hold your hand while you whisper something naughty.",
"Give your partner a shoulder massage.",
"Let your partner choose a romantic nickname for you to use all night.",
"Tell your partner three things you love about their body.",
"Let your partner choose a song for you to sing seductively.",
"Give your partner a kiss that lasts 30 seconds.",
"Let your partner choose a playful pose for a photo.",
"Tell your partner your most adventurous romantic idea.",
"Let your partner choose a romantic question you must answer honestly.",
"Give your partner a sensual hug from behind.",
"Let your partner choose a romantic challenge for the next round.",
"Tell your partner what makes you feel most desired.",
"Let your partner choose a flirty message for you to send them.",
"Give your partner a kiss and tell them what you want to do on your next date.",
"Let your partner choose your final dare of the night."
];

// Add your truth-question list here.
const truthQuestions = [
  // "What is something you've always wanted to tell your partner?",
  // "What is your favorite memory together?",
  // "What is something your partner does that you find irresistible?",
  // "What is one thing you would love to experience together?",
  // "What was your first impression of your partner?"
  "What was your first impression of me?",
  "When did you first realize you were attracted to me?",
  "What is your favorite memory of us together?",
  "What do you find most attractive about me?",
  "What is something you have always wanted to tell me but never have?",
  "What makes you feel most loved by me?",
  "What is your favorite way for me to show you affection?",
  "What is one thing I do that makes your heart race?",
  "What is your favorite part of kissing me?",
  "What is your favorite romantic moment we have shared?",
  "What is something about me that you find irresistible?",
  "What is your biggest romantic fantasy?",
  "What makes you feel most desired?",
  "What is your favorite way to cuddle with me?",
  "What is one thing you wish we did more often together?",
  "What is your favorite thing about my body?",
  "What is something I do that secretly turns you on?",
  "What is the most romantic thing you have imagined us doing?",
  "What is one place you would love to kiss me?",
  "What is your favorite memory of being close to me?",
  "What is something you have always wanted to try on a date with me?",
  "What makes you feel comfortable enough to be vulnerable with me?",
  "What is one thing I could do to make you feel more appreciated?",
  "What is your favorite way to receive affection?",
  "What is something you find sexy about my personality?",
  "What is one thing you wish I knew about your desires?",
  "What is your favorite type of kiss?",
  "What is something you have wanted to ask me about intimacy?",
  "What makes you feel most confident around me?",
  "What is one romantic experience you would love us to have?",
  "What is your favorite thing about spending time alone with me?",
  "What is one thing I do that makes you feel special?",
  "What is your biggest turn-on in a relationship?",
  "What is something that instantly puts you in a romantic mood?",
  "What is one thing you would love me to whisper in your ear?",
  "What is your favorite way to show me you want me?",
  "What is something about our chemistry that you love?",
  "What is one thing you have never told anyone about your romantic side?",
  "What is your favorite memory of us laughing together?",
  "What is something you wish we could do more often in private?",
  "What is one thing that makes you feel emotionally connected to me?",
  "What is your favorite kind of romantic surprise?",
  "What is something you find incredibly attractive but rarely admit?",
  "What is one thing you would like us to improve about our intimacy?",
  "What is your favorite way for me to initiate affection?",
  "What is one romantic secret you have been keeping from me?",
  "What is something you have always wanted to do with me but felt shy about asking?",
  "What is your favorite thing about our relationship?",
  "What is one thing you want us to experience together this year?",
  "What is the most intimate question you have ever wanted to ask me?"
];

const state = {players:["Alex","Sarah"], current:0, round:1, type:null, lastIndex:-1};

const $ = s => document.querySelector(s);
const screens = ["home","players","game","result"];

function show(id){
  screens.forEach(x => $("#"+x).classList.remove("active"));
  $("#"+id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

function initials(name){ return (name || "?").trim().charAt(0).toUpperCase(); }

function updatePlayers(){
  state.players[0] = $("#playerOne").value.trim() || "Player 1";
  state.players[1] = $("#playerTwo").value.trim() || "Player 2";
  $("#turnName").textContent = state.players[state.current];
  $("#avatar").textContent = initials(state.players[state.current]);
  $("#miniNameOne").textContent = state.players[0];
  $("#miniNameTwo").textContent = state.players[1];
  $("#miniOne").textContent = initials(state.players[0]);
  $("#miniTwo").textContent = initials(state.players[1]);
}

function randomQuestion(type){
  const list = type === "dare" ? dareQuestions : truthQuestions;
  if(list.length === 1) return list[0];
  let i;
  do { i = Math.floor(Math.random()*list.length); } while(i === state.lastIndex);
  state.lastIndex = i;
  return list[i];
}

function choose(type){
  state.type = type;
  $("#pick").classList.add("hidden");
  $("#challenge").classList.remove("hidden");
  $("#challenge").classList.toggle("dare", type === "dare");
  $("#challengeTag").textContent = type === "dare" ? "DARE" : "TRUTH";
  $("#challengeTag").style.color = type === "dare" ? "#ff69ad" : "#bda3ff";
  $("#challengeText").textContent = randomQuestion(type);
  $("#actionLabel").textContent = type === "dare" ? "DO THE DARE" : "ANSWER HONESTLY";
  $("#doneBtn").textContent = type === "dare" ? "✓ I DID IT" : "✓ I TOLD THE TRUTH";
}

function finish(result){
  $("#resultIcon").textContent = state.type === "dare" ? (result==="drink" ? "🍹" : "🔥") : (result==="drink" ? "🍹" : "💬");
  const name = state.players[state.current];
  $("#resultText").textContent = result==="drink"
    ? `${name} chose to drink!`
    : `${name} ${state.type==="dare" ? "completed the dare!" : "told the truth!"}`;
  $("#resultSub").textContent = "Pass the phone to the next player.";
  show("result");
}

function nextPlayer(){
  state.current = state.current === 0 ? 1 : 0;
  state.round++;
  $("#round").textContent = state.round;
  $("#challenge").classList.add("hidden");
  $("#pick").classList.remove("hidden");
  updatePlayers();
  show("game");
}

$("#startBtn").onclick = () => show("players");
$("#playersNext").onclick = () => { updatePlayers(); state.round=1; $("#round").textContent=1; show("game"); };
$("#homeBtn").onclick = () => show("home");
$("[data-screen='home']").onclick = () => show("home");
$("[data-screen='players']").onclick = () => show("players");

document.querySelectorAll(".pick-card").forEach(btn => btn.onclick = () => choose(btn.dataset.type));
$("#doneBtn").onclick = () => finish("done");
$("#drinkBtn").onclick = () => finish("drink");
$("#anotherBtn").onclick = () => choose(state.type);
$("#nextBtn").onclick = nextPlayer;

function openSettings(){ $("#settings").classList.add("open"); }
function closeSettings(){ $("#settings").classList.remove("open"); }
$("#settingsBtn").onclick = openSettings;
$("#gameSettings").onclick = openSettings;
$("#closeSettings").onclick = closeSettings;
$("#settings").onclick = e => { if(e.target.id==="settings") closeSettings(); };
$("#restart").onclick = () => { closeSettings(); state.current=0; state.round=1; updatePlayers(); $("#round").textContent=1; show("game"); };
$("#changePlayers").onclick = () => { closeSettings(); show("players"); };
$("#exit").onclick = () => { closeSettings(); show("home"); };

updatePlayers();
