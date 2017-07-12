exports.seed = function(knex) {
  return knex('users').truncate()
    .then(() => {
      return knex('users').insert([
        {
            user_name: 'Bulldog',
            first_name: 'Rick',
            last_name: 'Sanchez',
            email: 'rick@c137.com',
            password: '1234',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/05/Man-PNG-File.png',
            team_id: 1
        },
        {
            user_name: 'EyePatch',
            first_name: 'Morty',
            last_name: 'Smith',
            email: 'morty@c137.com',
            password: '1234',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/05/Man-Download-PNG.png',
            team_id: 1
        },
        {
            user_name: 'loser5',
            first_name: 'Jerry',
            last_name: 'Smith',
            email: 'none@test.com',
            password: '1234',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/05/Man-PNG-Image.png',
            team_id: 1
        },
        {
            user_name: 'devil',
            first_name: 'Lucius',
            last_name: 'Needful',
            email: 'satan@hell.com',
            password: '123',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-PNG-Picture.png',
            team_id: 2
        },
        {
            user_name: 'Surgeon',
            first_name: 'Beth',
            last_name: 'Smith',
            email: 'beth@c138.com',
            password: '1234',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/04/Girl-Download-PNG.png',
            team_id: 1
        },
        {
            user_name: 'Daylight',
            first_name: 'Summer',
            last_name: 'Smith',
            email: 'happy@lovely.com',
            password: '1234',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/04/Girl-High-Quality-PNG.png',
            team_id: 1
        },
        {
            user_name: 'unity',
            first_name: 'Christina',
            last_name: 'Hendricks',
            email: 'everything@everything.com',
            password: '1234',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/04/Girl-PNG-HD.png',
            team_id: 2
        },
        {
            user_name: 'Arthricia',
            first_name: 'Chelsea',
            last_name: 'Kane',
            email: 'catperson@purge.com',
            password: '1234',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/05/Model-PNG-Clipart.png',
            team_id: 3
        }]);
    })
};
