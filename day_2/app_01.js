    let  names = {
      cities: ["Blr","Del","Mum","Pune"],
      print: function(delay=1000) {

        setTimeout(
			() =>	{
          		console.log(this.cities.join(","))
        	}, delay)
      }
    }

    names.print()
