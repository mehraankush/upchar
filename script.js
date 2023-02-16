const express = require("express");
// const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/button2.html");
});

app.post("/", function(req,res){

    let input_text = req.body.input;
    // const url= "https://script.google.com/macros/s/AKfycbwQ8n-kgYi3fSLHzCW50TMTuYzcf9ps3sCV37FZkGmqsFI6_GbO8a4n-YaXwtzjqyN6/exec";
    
    if(input_text.includes("electric") || input_text.includes("shock") || input_text.includes("current") || input_text.includes("high voltage") || input_text.includes("Electric burn") || input_text.includes("Arc burn") || input_text.includes("Lightining burn") || input_text.includes("power")){
        res.sendFile(__dirname + "/Elec_Shock.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("chest pain") || input_text.includes("dizziness") || input_text.includes("sweating") || input_text.includes("nausea") || input_text.includes("shortness of breath") || input_text.includes("Jaw pain") || input_text.includes("back pain") || input_text.includes("cardiac arrest") || input_text.includes("heart pain") || input_text.includes("heart")){
        res.sendFile(__dirname + "/heart_attack.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("confusion") || input_text.includes("inability to talk") || input_text.includes("noisy breathing") || input_text.includes("loss of consciouness") || input_text.includes("choking") || input_text.includes("food stuck")){
        res.sendFile(__dirname + "/chocking.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("trouble speaking") || input_text.includes("weakness ") || input_text.includes("paralysis") || input_text.includes("problem seeing") || input_text.includes("severe headache") || input_text.includes("problem walking") || input_text.includes("stroke")){
        res.sendFile(__dirname + "/stroke.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("shaking") || input_text.includes("dry mouth") || input_text.includes("breath lessness") || input_text.includes("feeling confusion") || input_text.includes("panic attack")){
        res.sendFile(__dirname + "/panic_attack.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("water") || input_text.includes("sea") || input_text.includes("drowning") || input_text.includes("river") || input_text.includes("pond") || input_text.includes("swimming") || input_text.includes("pool") || input_text.includes("sink") || input_text.includes("sinking") || input_text.includes("sank") || input_text.includes("drown") || input_text.includes("drowned")){
        res.sendFile(__dirname + "/near_drowning.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("cut") || input_text.includes("bleeding") || input_text.includes("knife") || input_text.includes("blood flowing") || input_text.includes("blade") ){
        res.sendFile(__dirname + "/cut.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("stomach ache") || input_text.includes("poision") || input_text.includes("poisoning") || input_text.includes("blue lip") || input_text.includes("vomiting") || input_text.includes("diarrhea") || input_text.includes("rashes in skin") ){
        res.sendFile(__dirname + "/poisoning.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("snake bite") || input_text.includes("snake") || input_text.includes("scropion") || input_text.includes("cobra")){
        res.sendFile(__dirname + "/snake-bite.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("fracture") || input_text.includes("bone") || input_text.includes("broken") || input_text.includes("pain")|| input_text.includes("swelling") || input_text.includes("bleeding")|| input_text.includes("bluish")){
        res.sendFile(__dirname + "/fracture.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("burns") || input_text.includes("heat") || input_text.includes("fire") || input_text.includes("flame")|| input_text.includes("burned")){
        res.sendFile(__dirname + "/burns.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("chocking") || input_text.includes("chok") || input_text.includes("choked") || input_text.includes("food")|| input_text.includes("stucked")|| input_text.includes("choking")|| input_text.includes("neck")){
        res.sendFile(__dirname + "/chocking.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("diabetes") || input_text.includes("type1") || input_text.includes("type2") || input_text.includes("sugar")|| input_text.includes("prediabatic")|| input_text.includes("prediabatese")|| input_text.includes("urinating")|| input_text.includes("weight loss")|| input_text.includes("lossing weight")|| input_text.includes("diabetes")){
        res.sendFile(__dirname + "/diabetes.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("fever") || input_text.includes("hot") || input_text.includes("high temperature") || input_text.includes("body temperature")|| input_text.includes("feeling cold")|| input_text.includes("shiver")){
        res.sendFile(__dirname + "/fever.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("motion sickness") || input_text.includes("travel") || input_text.includes("travlers") || input_text.includes("traveling")|| input_text.includes("trip")|| input_text.includes("bus")|| input_text.includes("train")|| input_text.includes("car")|| input_text.includes("ship")){
        res.sendFile(__dirname + "/motion-sickness.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("headache") || input_text.includes("head pain") || input_text.includes("exams")){
        res.sendFile(__dirname + "/headache.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("heart attact") || input_text.includes("chest pain") || input_text.includes("sweating") || input_text.includes("cardiac arrest")|| input_text.includes("heart")|| input_text.includes("chest")){
        res.sendFile(__dirname + "/heart_attack.html");
        // console.log("YAah! right");
    }
    else{
        console.log("Sorry! Can't Find Your Problem Please use the First-aid Brochure");
    }

    // res.send("<a href = 'http://localhost:3000/'><button> Restart </button></a>");
});


app.listen(8000, function(){
    console.log("The server is running at port 3000");
});
