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

* assert:

  `npm install assert --save`

* google-api-nodejs-client:

  `npm install googleapis --save`


## User Stories

* I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

* I can paginate through the responses by adding a ?offset=2 parameter to the URL.

* I can get a list of the most recently submitted search strings.

##Search Usage

https://mks-img-search-al-api.herokuapp.com/imagesearch/lolcats funny?offset=2

##Search Output

[

    {
        "url": "https://s-media-cache-ak0.pinimg.com/736x/3d/eb/a0/3deba0e817b6bac73ecc58dfe9422902.jpg",
        "snippet": "... the funniest LoLCats we've ...",
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEhjFqs8e8b_5sGm7m2byTngPrEbyuGyGbG4yLSoc4Si9fw8mxvgXS72E",
        "context": "https://www.pinterest.com/pin/249246160601850881/"
    },
    {
        "url": "http://www.bajiroo.com/wp-content/uploads/2013/06/funny-lol-cats-fun-pics-images-photos-pictures-5.jpg",
        "snippet": "funny-lol-cats-fun-pics-images ...",
        "thumbnail": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUXCGnfYdIRdxb86GIz-VCaSsgmgG5uS27hMCq1IquRvSTd2zwQwtphXA",
        "context": "http://www.bajiroo.com/33-funniest-lolcats-ever"
    }

]

##Latest Queries Usage

https://mks-img-search-al-api.herokuapp.com/latest/imagesearch/

##Latest Queries Output

[

    {
        "term": "new year australia",
        "when": "2017-01-01T05:44:37.451Z"
    },
    {
        "term": "brisbane river festival",
        "when": "2017-01-01T05:07:16.924Z"
    },
    {
        "term": "gold coast",
        "when": "2017-01-01T05:06:20.641Z"
    },
    {
        "term": "lone pine koala sanctuary",
        "when": "2017-01-01T05:03:29.092Z"
    },
    {
        "term": "sunrise scene",
        "when": "2017-01-01T05:03:21.238Z"
    },
    {
        "term": "garden",
        "when": "2017-01-01T05:03:06.812Z"
    },
    {
        "term": "sunshine",
        "when": "2017-01-01T05:02:13.278Z"
    },
    {
        "term": "flowers",
        "when": "2017-01-01T04:06:39.993Z"
    },
    {
        "term": "freecodecamp",
        "when": "2016-12-31T21:57:30.873Z"
    },
    {
        "term": "lolcats funny",
        "when": "2016-12-31T20:46:48.582Z"
    }

]