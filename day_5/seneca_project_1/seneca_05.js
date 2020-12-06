const service = require('seneca')({log: 'silent'});

service.add({cmd: "wordcount"}, 
	(msg, res) =>	{
		var c = msg.phrase.split(" ");	
		res(null, {count: c.length});
	}
);

service.add({cmd: "wordcount", skipShort: true}, 
	(msg, res) =>	{
		var c = msg.phrase.split(" ");
		var nc = 0;
		for (let i=0; i<c.length; ++i)	if (c[i].length > 3)	++nc;	
		res(null, {count: nc});
	}
);

const myphrase = "A msg from service server, pushed to the client" ;


service.act(
  { cmd: "wordcount", phrase: myphrase },
  (err, resp) => {
    console.log("count_info:", resp);
  }
);

service.act(
    { cmd: "wordcount", skipShort: true,  phrase: myphrase },
    (err, resp) => {
      console.log("count_info_2:", resp);
    }
  );
