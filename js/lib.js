
// Jason Begleiter
// 4/13/15


//Global Article List
var master_Articles = [];
var article_id_index = master_Articles.length - 1;

var master_Topics = [];

function create_topic(name){
	var new_topic = new Topic(name);
	new_topic.position = master_Topics.length;
	return new_topic;
}

function create_article(url,title,image){
	var new_article = new Article(url,title,image);
	return new_article;
}
function add_article(Article, Topics){
	article_id_index++;
	Article.id = article_id_index;
	Article.topics = Topics;
	master_Articles.push(Article)
}


//Topics
//Constructor Methods
function Topic (name) {
	this.name = name;
	this.position = -1;

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
	this.topic_weight = function(){
		var t_weight = this.articles.length;
		for (i=0; i< this.articles.length; i++){
			t_weight += this.articles[i].weight;
		}
		return t_weight;
	}

};

//Articles
function Article (url, title, image) {
	this.id = -1;
	this.topics = [];
	this.url = url;
	this.title = title;
	this.image = image;
	this.weight = 1;
	this.facts = [];

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


//unit tests
function Test_list() {
	var test = new Topic("test");
	var test_art = new Article(0, "www.yelp.com", "Yelp");
	var test_art1 = new Article(1, "www.google.com", "Google");
	test.add_article(test_art);
	test.add_article(test_art1);


	// var x = document.getElementById("demo");
	var y = test.list_articles(1);
	//x.innerHTML =JSON.stringify(y);

	var rt_msg = "Testing lists";
	var rt_result = JSON.stringify(y);
	return [rt_msg, rt_result];
};

function Test_create_article(){
	y = create_article("www.facebook.com", "Facebook")
	var rt_msg = "Testing Create Article";
	var rt_result = JSON.stringify(y);
	return [rt_msg, rt_result];
}

function Test_add_article(Article, Topics){

}
//testing procedure
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

//execute testing
test_p([Test_list(),Test_create_article()]);






