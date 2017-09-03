Parse.Cloud.define('currentTime', function(req, res) {
  res.success(""+new Date().getTime());
});


Parse.Cloud.define('storyJapan', function(req, res) {
  var StoryJapan = Parse.Object.extend("StoryJapan");
    
    
    var query = new Parse.Query(StoryJapan);
    //query.equalTo("level",parseInt(req.params.level));
  query.limit(1000);
//   Array.prototype.randomElement = function(min,max){
  
//   return Math.floor(Math.random()*(max - min)) + min;
  
  
//   }
  
  query.find({
    
    success: function(results){
      
//      var final10 =[];
      
//       for(var i =0; i < 10; i++){
//         var random = results.randomElement(0,results.length);
        
//         if (final10.indexOf(random) == -1){
//           final10.push(random);
//         }else{
          
//           i--;
//         }
//       }
      
      var quiz = [];
      for(var j =0; j < results.length; j++){
      
        var index = results[j];
        quiz.push(results[index]);
      }
      //res.success(quiz);
      res.success(JSON.stringify(quiz));
    },
    error: function(e){
    res.error(e);
    
    
    
    }
  });
});



Parse.Cloud.define('randomQuiz', function(req, res) {
 
    var Sample = Parse.Object.extend("Sample");
    
    
    var query = new Parse.Query(Sample);
    query.equalTo("level",parseInt(req.params.level));
  
  Array.prototype.randomElement = function(min,max){
  
  return Math.floor(Math.random()*(max - min)) + min;
  
  
  }
  
  query.find({
    
    success: function(results){
      
      var final10 =[];
      
      for(var i =0; i < 10; i++){
        var random = results.randomElement(0,results.length);
        
        if (final10.indexOf(random) == -1){
          final10.push(random);
        }else{
          
          i--;
        }
      }
      
      var quiz = [];
      for(var j =0; j < final10.length; j++){
      
        var index = final10[j];
        quiz.push(results[index]);
      }
      //res.success(quiz);
      res.success(JSON.stringify(quiz));
    },
    error: function(e){
    res.error(e);
    
    
    
    }
  });
});
  


Parse.Cloud.define('randomQuizHSK', function(req, res) {
 
    var Sample = Parse.Object.extend("HSK");
    
    
    var query = new Parse.Query(Sample);
    query.equalTo("level",parseInt(req.params.level));
  
  Array.prototype.randomElement = function(min,max){
  
  return Math.floor(Math.random()*(max - min)) + min;
  
  
  }
  
  query.find({
    
    success: function(results){
      
      var final10 =[];
      
      for(var i =0; i < 10; i++){
        var random = results.randomElement(0,results.length);
        
        if (final10.indexOf(random) == -1){
          final10.push(random);
        }else{
          
          i--;
        }
      }
      
      var quiz = [];
      for(var j =0; j < final10.length; j++){
      
        var index = final10[j];
        quiz.push(results[index]);
      }
      //res.success(quiz);
      res.success(JSON.stringify(quiz));
    },
    error: function(e){
    res.error(e);
    
    
    
    }
  });
});
  

Parse.Cloud.define('randomQuizKLPT', function(req, res) {
 
    var Sample = Parse.Object.extend("KLPT");
    
    
    var query = new Parse.Query(Sample);
    query.equalTo("level",parseInt(req.params.level));
  
  Array.prototype.randomElement = function(min,max){
  
  return Math.floor(Math.random()*(max - min)) + min;
  
  
  }
  
  query.find({
    
    success: function(results){
      
      var final10 =[];
      
      for(var i =0; i < 10; i++){
        var random = results.randomElement(0,results.length);
        
        if (final10.indexOf(random) == -1){
          final10.push(random);
        }else{
          
          i--;
        }
      }
      
      var quiz = [];
      for(var j =0; j < final10.length; j++){
      
        var index = final10[j];
        quiz.push(results[index]);
      }
      //res.success(quiz);
      res.success(JSON.stringify(quiz));
    },
    error: function(e){
    res.error(e);
    
    
    
    }
  });
});


Parse.Cloud.define('randomQuizEiken', function(req, res) {
 
    var Sample = Parse.Object.extend("Eiken");
    
    
    var query = new Parse.Query(Sample);
    query.equalTo("level",parseInt(req.params.level));
  
  Array.prototype.randomElement = function(min,max){
  
  return Math.floor(Math.random()*(max - min)) + min;
  
  
  }
  
  query.find({
    
    success: function(results){
      
      var final10 =[];
      
      for(var i =0; i < 10; i++){
        var random = results.randomElement(0,results.length);
        
        if (final10.indexOf(random) == -1){
          final10.push(random);
        }else{
          
          i--;
        }
      }
      
      var quiz = [];
      for(var j =0; j < final10.length; j++){
      
        var index = final10[j];
        quiz.push(results[index]);
      }
      //res.success(quiz);
      res.success(JSON.stringify(quiz));
    },
    error: function(e){
    res.error(e);
    
    
    
    }
  });
});

Parse.Cloud.define('randomQuizJLPT', function(req, res) {
 
    var Sample = Parse.Object.extend("N1N5All");
    
    
    var query = new Parse.Query(Sample);
    query.equalTo("level",parseInt(req.params.level));
  
  Array.prototype.randomElement = function(min,max){
  
  return Math.floor(Math.random()*(max - min)) + min;
  
  
  }
  
  query.find({
    
    success: function(results){
      
      var final10 =[];
      
      for(var i =0; i < 10; i++){
        var random = results.randomElement(0,results.length);
        
        if (final10.indexOf(random) == -1){
          final10.push(random);
        }else{
          
          i--;
        }
      }
      
      var quiz = [];
      for(var j =0; j < final10.length; j++){
      
        var index = final10[j];
        quiz.push(results[index]);
      }
      //res.success(quiz);
      res.success(JSON.stringify(quiz));
    },
    error: function(e){
    res.error(e);
    
    
    
    }
  });
});




Parse.Cloud.define('randomQuizAllHSK', function(req, res) {
 
    var Sample = Parse.Object.extend("sample");
    
    
    var query = new Parse.Query(Sample);
    query.equalTo("level",parseInt(req.params.level));
  
  Array.prototype.randomElement = function(min,max){
  
  return Math.floor(Math.random()*(max - min)) + min;
  
  
  }
  
  query.find({
    
    success: function(results){
      
      var final10 =[];
      
      for(var i =0; i < 10; i++){
        var random = results.randomElement(0,results.length);
        
        if (final10.indexOf(random) == -1){
          final10.push(random);
        }else{
          
          i--;
        }
      }
      
      var quiz = [];
      for(var j =0; j < final10.length; j++){
      
        var index = final10[j];
        quiz.push(results[index]);
      }
      //res.success(quiz);
      res.success(JSON.stringify(quiz));
    },
    error: function(e){
    res.error(e);
    
    
    
    }
  });
});



