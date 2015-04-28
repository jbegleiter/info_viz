
// Jason Begleiter
// 4/13/15

//Topics
//Constructor Methods
function Topic (name, position) {
	this.name = name;
	this.position = position;

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
function Article (id, url, title, image, weight, facts) {
	this.id = id;
	this.url = url;
	this.title = title;
	this.image = image;
	this.weight = weight;
	this.facts = facts;

	this.increase_weight = function() {
		this.weight++;
	}
	this.decrease_weight = function() {
		this.weight--;
	}
	this.add_fact = function(Fact) {
		this.facts.push(Fact);
	}
	this.remove_fact = function(Fact) {
		this.facts.splice(this.facts.indexOf(Fact),1);
	}

};
//Links
//Facts
function Fact (id, text, image, Article_source){
	this.id = id;
	this.text = text;
	this.image = image;
	this.Article_source = Article_source;
}

//testing
function Test_list() {
	var test = new Topic("test");
	var test_art = new Article(0, "www.yelp.com", "Yelp");
	var test_art1 = new Article(1, "www.google.com", "Google");
	test.add_article(test_art);
	test.add_article(test_art1);


	var x = document.getElementById("demo");
	var y = test.list_articles(1);
	//x.innerHTML =JSON.stringify(y);

	var rt_msg = "Testing lists";
	var rt_result = JSON.stringify(y);
	return [rt_msg, rt_result];
};

//execute
function test_p(Funtions){
	var element = document.getElementById("test_div");
	for (i=0; i<Funtions.length; i++){
		var p1 = document.createElement("p");
		var p2 = document.createElement("p");
		var node1 = document.createTextNode(Funtions[i][0]);
		var node2 = document.createTextNode(Funtions[i][1]);
		p1.appendChild(node1);
		p2.appendChild(node2);
		element.appendChild(p1);
		element.appendChild(p2);
	}
}
// var ohay = [Test_list(), Test_list()];
// var p = document.createElement("p");
test_p([Test_list()]);





