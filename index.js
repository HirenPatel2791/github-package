const hello = function (name) {
  console.log("Hello " + name + "!!");
};

module.exports = {
  hello
};
/*
release tries:
#fix: a fix # => this should release v1.0.1 
* feat: first feature \n\n BREAKING CHANGE: it breaks something # => this should create next beta release trying again3
* created newBeta branch
* fix: fix commit in newBeta
* nonsementic commit
* changes on develop
*/
/**
 * github revert tries:
 * init commit on new branch qrStatus
 *
 * more changes to qrStatus
 *
 * aditya's changes
 *
 * aditya's changes 2
 * create conflict
 */

