exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('users').insert({
                    id: 1,
                    username: 'pmoney',
                    password: 'password',
                    email: 'price@price.com',
                    avatar: 'http://www.fillmurray.com/g/210/305',
                    city: 'illadelph',
                    state: 'PA'
                }),
                knex('users').insert({
                    id: 2,
                    username: 'ek2k',
                    password: 'password',
                    email: 'ed@ededneddy.com',
                    avatar: 'http://1.bp.blogspot.com/-4x8LvBUopUg/UP_3v-hRgcI/AAAAAAAAC90/rerm6FhEJ4I/s1600/Anthony+Lamb+-+Nick+Cage+as+Salvador+Dali.jpg',
                    city: 'breckenridge',
                    state: 'CO'
                }),
                knex('users').insert({
                    id: 3,
                    username: 'parTybooB',
                    password: 'password',
                    email: 'kbleezey@karen.com',
                    avatar: 'http://vignette3.wikia.nocookie.net/powerpuff/images/1/16/Powerpuffgirls-buttercup_large.png/revision/latest?cb=20160110051139',
                    city: 'austin',
                    state: 'TX'
                }),
                knex('users').insert({
                    id: 4,
                    username: 'PoomPoom',
                    password: 'password',
                    email: 'pickle@puppy.com',
                    avatar: 'http://farm4.static.flickr.com/3602/3391833200_dd6625087e_o.jpg',
                    city: 'austin',
                    state: 'TX'
                })
            ])
        }).then(function() {
            return knex('shows').del()
        }).then(function() {
            return Promise.all([
                knex('shows').insert({
                    id: 25,
                    name: 'Mr. Robot',
                    network: 'Usa',
                    genre: 'Drama'
                }),
                knex('shows').insert({
                    id: 26,
                    name: 'Stranger Things',
                    network: 'Netflix',
                    genre: 'Sci-Fi'
                }),
                knex('shows').insert({
                    id: 27,
                    name: 'Rick and Morty',
                    network: 'Cartoon network',
                    genre: 'Animated Sitcom'
                })
            ]).then(function() {
                return knex('episodes').del()
            }).then(function() {
                return Promise.all([
                    knex('episodes').insert({
                        id: 1,
                        show_id: 25,
                        episode_number: 2,
                        episode_name: 'Chapter 2: The Weirdo on Maple Street',
                        season_number: 1
                    }),
                    knex('episodes').insert({
                        id: 2,
                        show_id: 25,
                        episode_number: 5,
                        episode_name: 'Chapter 5: The Flea and the Acrobat',
                        season_number: 1
                    }),
                    knex('episodes').insert({
                        id: 3,
                        show_id: 26,
                        episode_number: 2,
                        episode_name: 'Mortynight Run',
                        season_number: 2
                    }),
                    knex('episodes').insert({
                        id: 4,
                        show_id: 26,
                        episode_number: 2,
                        episode_name: 'Lawnmower Dog',
                        season_number: 1
                    }),
                    knex('episodes').insert({
                        id: 5,
                        show_id: 27,
                        episode_number: 1,
                        episode_name: '0hellofriend.mov',
                        season_number: 1
                    }),
                    knex('episodes').insert({
                        id: 6,
                        show_id: 27,
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
                            show_id: 27
                        }),
                        knex('user_shows').insert({
                            user_id: 1,
                            show_id: 26
                        }),
                        knex('user_shows').insert({
                            user_id: 3,
                            show_id: 25
                        }),
                        knex('user_shows').insert({
                            user_id: 2,
                            show_id: 25
                        }),
                        knex('user_shows').insert({
                            user_id: 1,
                            show_id: 26
                        })
                    ]).then(function() {
                        return knex('user_reviews').del()
                    }).then(function() {
                        return Promise.all([
                            knex('user_reviews').insert({
                                id: 1,
                                user_id: 2,
                                episode_id: 6,
                                review: 'I love this show!! So many great characters and dialogue. Totally recommended.',

                                spoilers: false,
                                star_rating: 5
                            }),
                            knex('user_reviews').insert({
                                id: 2,
                                user_id: 1,
                                episode_id: 1,
                                review: 'Just started watching, but so far, it is pretty good',
                                spoilers: false,
                                star_rating: 5
                            }),
                            knex('user_reviews').insert({
                                id: 3,
                                user_id: 3,
                                episode_id: 4,
                                review: 'Blows my mind with the awesome',
                                spoilers: true,
                                star_rating: 4
                            }),
                            knex('user_reviews').insert({
                                id: 4,
                                user_id: 4,
                                episode_id: 3,
                                review: 'It frightens and confuses me, but I like it',

                                spoilers: false,
                                star_rating: 3
                            })
                        ]).then(function() {
                            return knex('review_comments').del()
                        }).then(function() {
                            return Promise.all([
                                knex('review_comments').insert({
                                    review_id: 2,
                                    comment: 'COMMENTS YAY',
                                    user_id: 2
                                }),
                                knex('review_comments').insert({
                                    review_id: 4,
                                    comment: 'COMMENTS YAY',
                                    user_id: 1
                                })
                            ])
                        })
                    })
                })
            })
        })
};
