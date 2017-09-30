$(document).ready(function(){

    
    //Puts all images on load
    for(var i=1; i<= 151; i ++){
        $('#pokemon').append(`<img src="http://pokeapi.co/media/img/${i}.png" num="${i}">`);
    }

    //puts information in pokedex sidebar
    $(document).on("click", 'img', function(){
        console.log("1");
        var no = $(this).attr('num');
        console.log("2");

        //loading text
        $('#dex').html(
            "<p>Loading...</p>"
        );

        $.get("https://pokeapi.co/api/v2/pokemon/"+no+"/", function(res) {
            console.log("3");
            var typehtml = "<ul>";
            for(var i  = 0; i< res.types.length; i++){
                typehtml +="<li>"+res.types[i].type.name+"</li>";
            }
            console.log("4");
            typehtml += "</ul>"
            console.log('dont ban me please');
            console.log(res.name);
            $('#dex').html(
                `
                <h1>${res.name}</h1>
                <img src="http://pokeapi.co/media/img/${no}.png">
                <h4>Types</h4>
                ${typehtml}
                <h4>Height</h4>
                <p> ${res.height}</p>
                <h4>Weight</h4>
                <p>${res.weight}</p>
                `
            );}, "json");
    });
    
    // $('img').click(()=>{
    //     var temp = $(this).attr("num");
    //     console.log(temp);
    //     var pic = 'http://pokeapi.co/media/img/'+temp+'.png';
    //     $('#dex img').attr('src', pic);
    // });
    // $(document).on("click", "img", function(){
    //     var pic = $(this).attr('src');
    //     $('#dex img').attr('src', pic);
    // });

});