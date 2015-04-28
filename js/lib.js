
// Jason Begleiter
// 4/13/15

//Topics
//Constructor Methods
function Topic (name, position) {
	this.name = name;

	this.articles = [];
	this.add_article = function(Article){
		this.articles.push(Article);
	};

	this.remove_article = function(Article){
		var index = this.articles.indexOf(Article);
		this.articles.splice(index, 1);
	}
	this.list_articles = function(index){
		if (index == -1) {
			return this.articles;
		}
		else if (index <= this.articles.length) {
			var return_list = [];
			for (i=0; i <= index; i++){
				return_list.push(this.articles[i]);
			}
			return return_list;
		}
	}

};

//Articles
function Article (id, url, title) {
	this.id = id;
	this.url = url;
	this.title = title;
	//this.outbound_links = outbound_links;

};
//Links
//Facts
//Thematic Continents
//Person

//testing

var test = new Topic("test");
var test_art = new Article(0, "www.yelp.com", "Yelp");
var test_art1 = new Article(1, "www.google.com", "Google");
test.add_article(test_art);
test.add_article(test_art1);


var x = document.getElementById("demo");
var y = test.list_articles(1);
x.innerHTML =JSON.stringify(y);
console.log(test.list_articles(1)[0].id);


