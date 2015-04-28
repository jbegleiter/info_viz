
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

//errata
var test = new Topic("test");
var test_art = new Article(0, "www.yelp.com", "Yelp");
test.add_article(test_art);
test.add_article(test_art);
//console.log(test.articles[0])
//var hi = test.calc_radius;
console.log(test.list_articles(1));


