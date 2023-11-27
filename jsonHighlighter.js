function loadDummyJSON() {
    var data = {
"id": {
  "name": "serhan",
  "last_name": "konukluk",
  "birth_year": 1998,
  "country": "turkiye"
},
"interested_in": {
  "programming": {
      "python": [
        "scripting",
        "network tools",
        "api testing",
        "test automation"
      ],
    
      "bash": [
        "automation scripts",
        "system utils",
        "system monitoring/tracing"
      ],
    
      "golang": "learning backend web development!!!"
    },
    "qa_testing": {
      "robot_framework": [
        "appium mobile ui automation",
        "selenium web automation",
        "rest api user acceptance test scenarios",
        "smoke testing"
      ],
    
      "k6": [
        "load testing",
        "spike testing",
        "stress testing"
      ]
    ,
    
      "jmeter": [
        "any kind of performance test, alternate to k6. i like this tool's outputs more than k6."
      ],

      "manuel_tests": ["exploratory testing", "black/gray box testing", "usability testing "]
    }},
"hobbies": [
  {
    "fav_music_genre": "changes every 15 min."
  },
  {
    "fav_book_genre": [
      "gothic",
      "horror fiction",
      "romanticism",
      "detective/crime fiction",
      "sci/fi",
      "19th century lit."
    ]
  },
  {
    "fav_actions": [
      "playing drums",
      "guitar and any instrument that have strings",
      "sleeping"
    ]
  }
],
"how_to_contact": "serhankonukluk@gmail.com"
}

    document.getElementById("json").innerHTML = syntaxHighlight(data);
  }

  function syntaxHighlight(json) {
    json = JSON.stringify(json, undefined, 4);
    // Adding color to keys and values
    json = json.replace(/"(\w+)"\s*:/g, '"<span class="key">$1</span>":');
    json = json.replace(/:\s*"(.*?)"/g, ': "<span class="string">$1</span>"');
    json = json.replace(/:\s*(\d+)/g, ': <span class="number">$1</span>');
    return json;
  }