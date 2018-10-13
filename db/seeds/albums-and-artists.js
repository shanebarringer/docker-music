exports.seed = function(knex, Promise) {
  return knex("artists")
    .del()
    .then(() =>
      knex("artists").insert([
        { name: "Sufjan Stevens" },
        { name: "Explosions in The Sky" },
        { name: "Fleet Foxes" },
        { name: "Hammock" },
        { name: "Run the Jewels" },
        { name: "Lord Huron" },
        { name: "Charles Bradley" },
        { name: "Local Natives" },
        { name: "A Tribe Called Quest" },
        { name: "Ryan Adams" }
      ])
    )
    .then(() => knex("albums").del())
    .then(() =>
      knex("albums").insert([
        {
          title: "Greetings from Michigan The Great Lakes State",
          artist_id: 1
        },
        { title: "Seven Swans", artist_id: 1 },
        {
          title: "Come on Feel the Illinois",
          artist_id: 1
        },
        { title: "Carrie & Lowell", artist_id: 1 },
        {
          title: "The Earth is not a Cold Dead Place",
          artist_id: 2
        },
        {
          title: "Take Care, Take Care, Take Care",
          artist_id: 2
        },
        { title: "Fleet Foxes", artist_id: 3 },
        { title: "Helplessness Blues", artist_id: 3 },
        { title: "Crack-Up", artist_id: 3 },
        {
          title: "Everything and Nothing",
          artist_id: 4
        },
        { title: "Oblivion Hymns", artist_id: 4 },
        { title: "Run the Jewels", artist_id: 5 },
        { title: "Run the Jewels 2", artist_id: 5 },
        { title: "Run the Jewels 3", artist_id: 5 },
        { title: "Lonesome Dreams", artist_id: 6 },
        { title: "Strange Trails", artist_id: 6 },
        { title: "Victim of Love", artist_id: 7 },
        { title: "Changes", artist_id: 7 },
        { title: "No Time for Dreaming", artist_id: 7 },
        { title: "Sunlit Youth", artist_id: 8 },
        { title: "Hummingbird", artist_id: 8 },
        { title: "Gorilla Manor", artist_id: 8 },
        { title: "The Low End Theory", artist_id: 9 },
        { title: "Midnight Marauders", artist_id: 9 },
        {
          title: "We Got it from Here... Thank You 4 Your Service",
          artist_id: 9
        },
        { title: "Heartbreaker", artist_id: 10 },
        { title: "Gold", artist_id: 10 },
        { title: "1989", artist_id: 10 },
        { title: "Live at Carnegie Hall", artist_id: 10 }
      ])
    )
    .then(() => console.log("data seeded!"));
};
