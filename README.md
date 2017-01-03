# Image Search Abstraction Layer API

Image Search Abstraction Layer Api repository.

You can run it at https://mks-img-search-al-api.herokuapp.com/

## Requirements

* Expressjs:

  `npm install express --save`

* dotenv:

  `npm install dotenv --save`

* mongodb:

  `npm install mongodb --save`

* google-api-nodejs-client:

  `npm install googleapis --save`

## User Stories

* I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

* I can paginate through the responses by adding a ?offset=2 parameter to the URL.

* I can get a list of the most recently submitted search strings.

##Search Usage

`https://mks-img-search-al-api.herokuapp.com/imagesearch/lolcats funny?offset=2`

##Search Output

[

    {
        "url": "http://www.lolcats.com/images/u/08/50/lolcatsdotcomrq4lywopmz2tyzsb.jpg",
        "snippet": "Ehh.. A Wize Guy Heh?",
        "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwC1Qu-zMGPmny2gkfRQHiZOy8-Jp46SUBmmuwdfq0yD6J_lBSzt-xBQ",
        "context": "http://www.lolcats.com/page-6.html"
    },
    {
        "url": "http://data.whicdn.com/images/17561072/funny-pictures-marshmallows_large.jpg",
        "snippet": "Hall Of Fame Lolcats 39 N",
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFazFat4V8qWOWaZf2UtPsxZqz9RkOHX2mpHQ9PlOTIX7Z20MrPBoa0I",
        "context": "http://lovelydogandcat.thesocialmediastore.net/lolcats-images-funny/"
    }

]

##Latest Queries Usage

https://mks-img-search-al-api.herokuapp.com/latest/imagesearch/

##Latest Queries Output

[

    {
        "term": "new year australia",
        "when": "2017-01-03T08:10:21.303Z"
    },
    {
        "term": "brisbane river festival",
        "when": "2017-01-03T08:10:09.343Z"
    },
    {
        "term": "gold coast",
        "when": "2017-01-03T08:10:01.905Z"
    },
    {
        "term": "lone pine koala sanctuary",
        "when": "2017-01-03T08:09:52.109Z"
    },
    {
        "term": "sunrise scene",
        "when": "2017-01-03T08:09:39.381Z"
    },
    {
        "term": "garden",
        "when": "2017-01-03T08:09:30.444Z"
    },
    {
        "term": "sunshine",
        "when": "2017-01-03T08:09:19.951Z"
    },
    {
        "term": "flowers",
        "when": "2017-01-03T08:09:09.823Z"
    },
    {
        "term": "freecodecamp",
        "when": "2017-01-03T08:08:57.684Z"
    },
    {
        "term": "lolcats funny",
        "when": "2017-01-03T08:07:49.561Z"
    }

]