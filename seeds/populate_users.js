exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('users').insert({
                    username: 'pmoney',
                    password: 'password',
                    email: 'price@price.com',
                    avatar: 'http://www.fillmurray.com/g/210/305',
                    city: 'illadelph',
                    state: 'PA'
                }),
                knex('users').insert({
                    username: 'ek2k',
                    password: 'password',
                    email: 'ed@ededneddy.com',
                    avatar: 'http://www.fillmurray.com/g/210/305',
                    city: 'breckenridge',
                    state: 'CO'
                }),
                knex('users').insert({
                    username: 'partyboob',
                    password: 'password',
                    email: 'kbleezey@karen.com',
                    avatar: 'http://www.fillmurray.com/g/210/305',
                    city: 'austin',
                    state: 'TX'
                })
            ])
        }).then(function() {
            return knex('shows').del()
        }).then(function() {
            return Promise.all([
                knex('shows').insert({
                    name: 'Mr. Robot',
                    network: 'Usa',
                    genre: 'Drama'
                }),
                knex('shows').insert({
                    name: 'Stranger Things',
                    network: 'Netflix',
                    genre: 'Sci-Fi'
                }),
                knex('shows').insert({
                    name: 'Rick and Morty',
                    network: 'Cartoon network',
                    genre: 'Animated Sitcom'
                })
            ]).then(function() {
                return knex('episodes').del()
            }).then(function() {
                return Promise.all([
                    knex('episodes').insert({
                        show_id: 24,
                        episode_number: 2,
                        episode_name: 'Chapter 2: The Weirdo on Maple Street',
                        season_number: 1
                    }),
                    knex('episodes').insert({
                        show_id: 24,
                        episode_number: 5,
                        episode_name: 'Chapter 5: The Flea and the Acrobat',
                        season_number: 1
                    }),
                    knex('episodes').insert({
                        show_id: 23,
                        episode_number: 2,
                        episode_name: 'Mortynight Run',
                        season_number: 2
                    }),
                    knex('episodes').insert({
                        show_id: 23,
                        episode_number: 2,
                        episode_name: 'Lawnmower Dog',
                        season_number: 1
                    }),
                    knex('episodes').insert({
                        show_id: 22,
                        episode_number: 1,
                        episode_name: '0hellofriend.mov',
                        season_number: 1
                    }),
                    knex('episodes').insert({
                        show_id: 22,
                        episode_number: 3,
                        episode_name: '1k3rnel-pan1c.ksd',
                        season_number: 2
                    })
                ]).then(function() {
                    return knex('user_shows').del()
                }).then(function() {
                    return Promise.all([
                        knex('user_shows').insert({
                            user_id: 2,
                            show_id: 3
                        }),
                        knex('user_shows').insert({
                            user_id: 1,
                            show_id: 2
                        }),
                        knex('user_shows').insert({
                            user_id: 3,
                            show_id: 1
                        }),
                        knex('user_shows').insert({
                            user_id: 2,
                            show_id: 1
                        }),
                        knex('user_shows').insert({
                            user_id: 1,
                            show_id: 2
                        })
                    ]).then(function() {
                        return knex('user_reviews').del()
                    }).then(function() {
                        return Promise.all([
                            knex('user_reviews').insert({
                                user_id: 2,
                                episode_id: 6,
                                review: 'I like mr robot episode 3',
                                spoilers: false,
                                star_rating: 5
                            }),
                            knex('user_reviews').insert({
                                user_id: 1,
                                episode_id: 1,
                                review: 'I like stranger things episode 2',
                                spoilers: false,
                                star_rating: 5
                            }),
                            knex('user_reviews').insert({
                                user_id: 3,
                                episode_id: 4,
                                review: 'Dogs take over the world then escape',
                                spoilers: true,
                                star_rating: 4
                            }),
                            knex('user_reviews').insert({
                                user_id: 3,
                                episode_id: 3,
                                review: 'I like rick and morty episode 2',
                                spoilers: false,
                                star_rating: 5
                            })
                        ]).then(function() {
                            return knex('review_comments').del()
                        }).then(function() {
                            return Promise.all([
                                knex('review_comments').insert({
                                    review_id: 2,
                                    comment: 'this is a comment on the review for stranger things episode 2',
                                    user_id: 2
                                }),
                                knex('review_comments').insert({
                                    review_id: 4,
                                    comment: 'this is a comment on the review for rick and morty episode 2',
                                    user_id: 1
                                })
                            ])
                        })
                    })
                })
            })
        })
};
