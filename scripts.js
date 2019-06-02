var data = d3.json("https://server.jakeburns.now.sh");


data.then(function(d){
  console.log(d);

  d3.select("body").append("h1").text("James Holzhauer ").attr("align","middle")


  d3.select("body").append("h1").attr("align", "middle").text("Number of games  won: " + d["numGames"])

    d3.select("body").append("h1").attr("align", "middle").text("Total money won : " + d["totalMoney"])

  d3.select("body").append("h1").attr("align", "middle").text("Accurate as of : " + d["currentDate"])
})
