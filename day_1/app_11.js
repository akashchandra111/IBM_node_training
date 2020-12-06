// Pulsar make event to ping every 1s for 8 times <= inputs
class Pulsar	{
	constructor(ticks, times)	{
		this.ticks = ticks;
		this.times = times;
	}

	on(str)	{
		if (str == 'pulse')	{
			console.log(this.ticks, this.times);
			for (let i=0; i<this.times; ++i)	setTimeout(()=> {}, this.ticks);
		}
	}
}

var pulsar = new Pulsar(1000, 8); // run every sec,  only 8 times.

pulsar.on('pulse', function(){
  console.log("process.mem: ", process.memoryUsage());
});	

