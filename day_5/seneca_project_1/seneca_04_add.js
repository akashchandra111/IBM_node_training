function add()	{
	service.add({math: "sum"}, (msg, res) =>	{
		var s = 0;
		for (var i=0; i<msg.values.length; ++i)	s += msg.values[i];
		res(null, {sum: s});
	});
}

module.exports = add;
