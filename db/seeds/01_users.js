exports.seed = function(knex) {
  return knex('users').truncate()
    .then(() => {
      return knex('users').insert([
        {
            user_name: 'ricksanchez3',
            first_name: 'Rick',
            last_name: 'Sanchez',
            email: 'rick_sanchez@dr.com',
            hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/05/Man-PNG-File.png',
            team_id: 1,
            api_token: 'db82fcf8ef077c60859be505792891a1',
            pivotal_user_id: 2952887
        },
        {
            user_name: 'mortysmith',
            first_name: 'Morty',
            last_name: 'Smith',
            email: 'morty_smith@dr.com',
            hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/05/Man-Download-PNG.png',
            team_id: 1,
            api_token: 'e4b49703e55334df9294e8e956791d8c',
            pivotal_user_id: 2952891
        },
        {
            user_name: 'loser5',
            first_name: 'Jerry',
            last_name: 'Smith',
            email: 'none@test.com',
            hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/05/Man-PNG-Image.png',
            team_id: 1
        },
        {
            user_name: 'devil',
            first_name: 'Lucius',
            last_name: 'Needful',
            email: 'satan@hell.com',
            hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-PNG-Picture.png',
            team_id: 2,
            pivotal_user_id: 2853315
        },
        {
            user_name: 'Surgeon',
            first_name: 'Beth',
            last_name: 'Smith',
            email: 'beth@c138.com',
            hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/04/Girl-Download-PNG.png',
            team_id: 1
        },
        {
            user_name: 'Daylight',
            first_name: 'Summer',
            last_name: 'Smith',
            email: 'happy@lovely.com',
            hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/04/Girl-High-Quality-PNG.png',
            team_id: 1
        },
        {
            user_name: 'unity',
            first_name: 'Christina',
            last_name: 'Hendricks',
            email: 'everything@everything.com',
            hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/04/Girl-PNG-HD.png',
            team_id: 2
        },
        {
            user_name: 'Arthricia',
            first_name: 'Chelsea',
            last_name: 'Kane',
            email: 'catperson@purge.com',
            hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
            avatar_url: 'http://www.pngall.com/wp-content/uploads/2016/05/Model-PNG-Clipart.png',
            team_id: 3
        }]);
    })
};
