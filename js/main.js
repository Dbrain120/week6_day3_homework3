// let element = document.getElementById('carRacer')

// let element2 = $('#carRacer')

function dataChange(){
    let year = $("#change-form input[name=Year]").val()
    let lap = $("#change-form input[name=Lap]").val()
    // console.log(year)
    // console.log(lap)

    $.get('https://ergast.com/api/f1/' + year + '/' + lap + '/driverStandings.json', function(data){
        let common = data.MRData.StandingsTable.StandingsLists[0]
        
        // For Loop Solution
        for(let i = 0; i < 8; i++){
            let position = common.DriverStandings[i].position
            let name = common.DriverStandings[i].Driver.givenName
            let nationality = common.DriverStandings[i].Driver.nationality
            let sponsor = common.DriverStandings[i].Constructors[0].name
            let points = common.DriverStandings[i].points
            $("#position" + i.toString()).text(position)
            $("#DriverName" + i.toString()).text(name)
            $("#nationality" + i.toString()).text(nationality)
            $("#sponsor" + i.toString()).text(sponsor)
            $("#points" + i.toString()).text(points)
        }
        
    })
}