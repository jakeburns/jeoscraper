var data = d3.json("https://server.jakeburns.now.sh");


data.then(function(d){
  console.log(d);

  d3.select("body").append("h1").text("Did Jeopardy James win?").attr("align","middle").classed("name", true)


  d3.select("body").append("h1").attr("align", "middle").classed("info", true).text("Number of games  won: " + d["numGames"])

    d3.select("body").append("h1").attr("align", "middle").classed("info", true).text("Total money won : " + d["totalMoney"])

  d3.select("body").append("h1").attr("align", "middle").classed("info", true).text("Accurate as of : " + d["currentDate"])
})
