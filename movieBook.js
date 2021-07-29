const movies = [
{id:1, title:'Titanic', genre:'romance',synopsis:"James Cameron's Titanic is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the ship of dreams -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912."},
{id:2, title:'Avatar', genre:'sci-fi',synopsis:'On the lush alien world of Pandora live the Navi, beings who appear primitive but are highly evolved. Because the planet s environment is poisonous, human/Navi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Navi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.'},
{id:3, title:'Brooklyn', genre:'drama',synopsis:'Young Irish immigrant Eilis Lace (Saoirse Ronan) navigates her way through 1950s Brooklyn. Lured by the promise of America, Eilis departs Ireland and the comfort of her mother home for the shores of New York City. The initial shackles of homesickness quickly diminish as a fresh romance sweeps Eilis into the intoxicating charm of love. But soon, her past disrupts her new vivacity, and Eilis must choose between two countries and the lives that exist within.'},
{id:4, title:'Brave Heart' , genre:'historical',synopsis:'William Wallace is the medieval Scottish patriot who is spurred into revolt against the English when the love of his life is slaughtered. Leading his army into battles that become a war, his advance into England threatens King Edward throne before he is captured and executed, but not before becoming a symbol for a free Scotland.'},
{id:5, title:'Life Of Pi', genre:'sci-fi',synopsis:'After deciding to sell their zoo in India and move to Canada, Santosh and Gita Patel board a freighter with their sons and a few remaining animals. Tragedy strikes when a terrible storm sinks the ship, leaving Pi (Suraj Sharma), as the only human survivor. However, Pi is not alone; a fearsome Bengal tiger has also found refuge aboard the lifeboat. As days turn into weeks and weeks drag into months, Pi and the tiger must learn to trust each other if both are to survive.'}
]

//copy the array
const list =()=>{
    return [...movies]
}

//find a specific item
const find = (id) =>{
    const movie = movies.find(movie=>movie.id === +id)
}

module.exports = {list:list, find:find}

