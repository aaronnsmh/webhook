var rbx = require('noblox.js'); // roblox-js works fine
var request = require('request');

var username = process.env.username;
var password = process.env.password;

var groupId = process.env.group; //"1227618";

	var headers = {
  "Content-Type": "application/json"
}

rbx.login(username, password).then(function() {
  console.log("LoggedIn");

  var onWallPost = rbx.onWallPost({group: groupId});
  onWallPost.on("data", function(data) {
    let message = data.content;
    let avatar = "https://www.roblox.com/headshot-thumbnail/image?userId=" + + data.author.id + "&width=420&height=420&format=png"
     var options = {
  url: "https://discordapp.com/api/webhooks/483951529460760576/vsX6HdSINnQtkwnTgKuL8I8N39dHf9tA2qS9BzKI92-cTolNgjUD7JFn_oCFUFe4WE1F",
  method:  "POST",
  headers: headers,
  form: {"content": message,
         "username": data.author.name,
         "avatar_url": "https://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&userid=" + data.author.id}
}
     request(options)
        console.log(data);

  });
  var onShout = rbx.onShout({group: groupId});
    onShout.on("data", function(data) {
    let message2 = data.message;
      let avatar = "https://www.roblox.com/headshot-thumbnail/image?userId=" + + data.author.id + "&width=420&height=420&format=png"
       var options2 = {
  url: "https://discordapp.com/api/webhooks/483951400523661312/xipCdi0nJq6BKOny7gGuU8zOD_a1cdeBLJFUJAlxwL_pAJfp09R_vqeimr74xQrD70Oy",
  method:  "POST",
  headers: headers,
  form: {"content": message2,
         "username": data.author.name,
         "avatar_url": avatar}
}
       request(options2)
        console.log(data);

  });
  onWallPost.on("close", function(e) { console.log("The event has disconnected!"); });
  onWallPost.on("error", function(e) {});
  onShout.on("close", function(e) { console.log("The event has disconnected!"); });
  onShout.on("error", function(e) {});
}).catch(function(e) {});



