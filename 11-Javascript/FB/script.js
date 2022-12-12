var database =
[
    {
        username: "user1",
        password: "pass1"
    },
    {
        username: "user2",
        password: "pass2"
    },
    {
        username: "user3",
        password: "pass3"
    }
];

var newsfeed = 
[
    {
        username: "nUser1",
        timeline: "U1 statement"
    },
    {
        username: "nUser2",
        timeline: "U2 statement"
    },
    {
        username: "nUser3",
        timeline: "U3 statement"
    }
];

function isUserValid(username, password)
{
    for ( var i=0; i < database.length; i++)
    {
        if (database[i].username === username && database[i].password === password)
        {
            return true;
        }
    }
    return false;
}

function signIn(username,password)
{
    if (isUserValid(username, password))
    {
        console.log(newsfeed);
    }
    else
    {
        alert("Invalid username and/or password");
    }
};

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
