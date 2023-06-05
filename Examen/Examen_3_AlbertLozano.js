/*
Nombre y apellidos: Albert Lozano Blasco
Curso y módulo: 1ºDAM - Lenguajes de Marcas
Examen 3a Evaluación - HTML, JavaScript
*/

    const data = JSON.parse('{"results": [{"gender":"female","name":{"title":"Miss","first":"Eva","last":"Giménez"},"location":{"street":{"number":5189,"name":"Calle de Atocha"},"city":"San Sebastián","state":"Andalucía","country":"Spain","postcode":77941,"coordinates":{"latitude":"-35.3284","longitude":"44.9247"},"timezone":{"offset":"-7:00","description":"Mountain Time (US & Canada)"}},"email":"eva.gimenez@example.com","login":{"uuid":"550386b0-c0c4-49e5-b8b2-8183732d24f4","username":"blackleopard187","password":"phillips","salt":"bUqK7vRI","md5":"b7be97ec688420812155e10b20ad61b5","sha1":"07a3035d4da127e7d2c764bf06dce1261879f82b","sha256":"0165895377dbe91628ccd09b0f5e60260a1a9cb762a44e164a3455dddba1f45c"},"dob":{"date":"1973-09-13T06:18:33.756Z","age":49},"registered":{"date":"2006-08-10T06:24:19.603Z","age":16},"phone":"921-812-926","cell":"655-927-538","id":{"name":"DNI","value":"07743708-Z"},"picture":{"large":"https://randomuser.me/api/portraits/women/43.jpg","medium":"https://randomuser.me/api/portraits/med/women/43.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/43.jpg"},"nat":"ES"},{"gender":"female","name":{"title":"Ms","first":"Nishitha","last":"Dhamdhame"},"location":{"street":{"number":1784,"name":"Colaba Causeway"},"city":"Noida","state":"Jharkhand","country":"India","postcode":68269,"coordinates":{"latitude":"8.9473","longitude":"107.9352"},"timezone":{"offset":"+4:00","description":"Abu Dhabi, Muscat, Baku, Tbilisi"}},"email":"nishitha.dhamdhame@example.com","login":{"uuid":"74c923a7-a15e-4cff-97d6-709489aa3e5a","username":"happyladybug124","password":"susan1","salt":"fv5U80LE","md5":"2e05e2f79a4f68bc5bed04eb98ea6cae","sha1":"f57839958d42b3d14501dc62d3abef98d50830f1","sha256":"42478392a6816da8cb03cd7f7c00e8d9e73da7101426f0e1767c66e164dbc08d"},"dob":{"date":"1978-12-16T20:57:43.533Z","age":44},"registered":{"date":"2007-08-28T19:44:34.720Z","age":15},"phone":"8661836566","cell":"9011719454","id":{"name":"UIDAI","value":"605084737990"},"picture":{"large":"https://randomuser.me/api/portraits/women/53.jpg","medium":"https://randomuser.me/api/portraits/med/women/53.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/53.jpg"},"nat":"IN"},{"gender":"female","name":{"title":"Miss","first":"Kübra","last":"Erberk"},"location":{"street":{"number":4819,"name":"Mevlana Cd"},"city":"Karaman","state":"Gaziantep","country":"Turkey","postcode":87843,"coordinates":{"latitude":"69.3208","longitude":"96.2193"},"timezone":{"offset":"+5:45","description":"Kathmandu"}},"email":"kubra.erberk@example.com","login":{"uuid":"853c7ed5-db95-4910-8bda-d16a43a670a7","username":"purplesnake195","password":"soccer","salt":"UKtLfasS","md5":"ebc44bdbe8f54c0696d4a3147469c85b","sha1":"0ef6f0af88cece661628163be5eeebbb3625002e","sha256":"2cf90d8137f2f1e815ed79923ae9b1c3b2346e4899ab066a3f1c03854f67ef39"},"dob":{"date":"1966-06-19T15:48:25.573Z","age":56},"registered":{"date":"2014-11-13T13:12:04.462Z","age":8},"phone":"(264)-406-4736","cell":"(118)-006-6689","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/27.jpg","medium":"https://randomuser.me/api/portraits/med/women/27.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/27.jpg"},"nat":"TR"},{"gender":"female","name":{"title":"Miss","first":"Megan","last":"Anderson"},"location":{"street":{"number":601,"name":"Dundas Rd"},"city":"Westport","state":"Ontario","country":"Canada","postcode":"W9C 0Z6","coordinates":{"latitude":"-70.1167","longitude":"12.2964"},"timezone":{"offset":"+10:00","description":"Eastern Australia, Guam, Vladivostok"}},"email":"megan.anderson@example.com","login":{"uuid":"c03f07fa-dfb9-48f3-8a51-1460a5e0a722","username":"bigbutterfly365","password":"forgot","salt":"9SJG0lWQ","md5":"587bafe3407c6da6c3807dad7b017ff3","sha1":"433e846d9216c4d157ab703cd4c6c6d201939603","sha256":"817484d197d007c4fb164fb50c418ae680a0d2859baa9e9ac337a078ce3bca46"},"dob":{"date":"1968-04-15T14:12:21.311Z","age":55},"registered":{"date":"2002-08-07T01:41:09.672Z","age":20},"phone":"I90 R41-1661","cell":"P05 J48-2425","id":{"name":"SIN","value":"586253049"},"picture":{"large":"https://randomuser.me/api/portraits/women/61.jpg","medium":"https://randomuser.me/api/portraits/med/women/61.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/61.jpg"},"nat":"CA"},{"gender":"male","name":{"title":"Mr","first":"Barış","last":"Toraman"},"location":{"street":{"number":1470,"name":"Mevlana Cd"},"city":"Adana","state":"Sakarya","country":"Turkey","postcode":48569,"coordinates":{"latitude":"66.2707","longitude":"-94.3316"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"baris.toraman@example.com","login":{"uuid":"2c52e0a6-38a9-4288-bf34-b77ca87b0634","username":"bluefrog720","password":"visual","salt":"oGPKiFGU","md5":"abfef2c99f2464494fbdcf5621f1127a","sha1":"881b17f629df2b9934dcb54a1a66c1b8342bdecc","sha256":"1f7e7da1bd2860eae73cabe941c5b7af9927672de80ef22fd0c5b0b1c57133d4"},"dob":{"date":"1971-12-11T03:59:40.728Z","age":51},"registered":{"date":"2012-02-23T23:57:18.804Z","age":11},"phone":"(654)-704-2268","cell":"(981)-879-6175","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/77.jpg","medium":"https://randomuser.me/api/portraits/med/men/77.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/77.jpg"},"nat":"TR"},{"gender":"male","name":{"title":"Mr","first":"Frederick","last":"Burke"},"location":{"street":{"number":8551,"name":"North Road"},"city":"Stevenage","state":"Leicestershire","country":"United Kingdom","postcode":"O87 2FD","coordinates":{"latitude":"-6.7061","longitude":"-170.0512"},"timezone":{"offset":"-6:00","description":"Central Time (US & Canada), Mexico City"}},"email":"frederick.burke@example.com","login":{"uuid":"513d8c9d-e76b-42af-8c08-2bccb208fd4f","username":"angryleopard258","password":"sammy1","salt":"5EyRjP0I","md5":"296f45881722f5009b60fb6fbb02f954","sha1":"23c872ee538ed017101b78c646313909cfbf03cb","sha256":"2b98ef91174719d276262f389a46d7ac8c062ff5ba09788ca80491e7239d15b5"},"dob":{"date":"1985-08-30T20:00:48.595Z","age":37},"registered":{"date":"2018-03-06T22:41:49.244Z","age":5},"phone":"016977 94321","cell":"07304 550762","id":{"name":"NINO","value":"YH 56 29 86 P"},"picture":{"large":"https://randomuser.me/api/portraits/men/76.jpg","medium":"https://randomuser.me/api/portraits/med/men/76.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/76.jpg"},"nat":"GB"},{"gender":"female","name":{"title":"Miss","first":"Jelena","last":"Tripković"},"location":{"street":{"number":9153,"name":"Trinaestog Oktobra"},"city":"Aleksinac","state":"Raška","country":"Serbia","postcode":34397,"coordinates":{"latitude":"57.5379","longitude":"43.5055"},"timezone":{"offset":"0:00","description":"Western Europe Time, London, Lisbon, Casablanca"}},"email":"jelena.tripkovic@example.com","login":{"uuid":"5d17ed0b-421c-4151-82a8-bd03477ed14e","username":"orangepanda851","password":"pants","salt":"igUgwhdi","md5":"3bce53751fe0a0d408582d822562a3ff","sha1":"914394defcc6caa7cff05680085ab5e5fa896eb6","sha256":"0bbbc33026403f1ab40fdbb6b7faf6c16ff22d553606830fdd8252896992c042"},"dob":{"date":"1945-02-08T12:08:02.159Z","age":78},"registered":{"date":"2007-03-17T05:04:58.849Z","age":16},"phone":"024-8802-969","cell":"060-2477-588","id":{"name":"SID","value":"542384676"},"picture":{"large":"https://randomuser.me/api/portraits/women/72.jpg","medium":"https://randomuser.me/api/portraits/med/women/72.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/72.jpg"},"nat":"RS"},{"gender":"male","name":{"title":"Mr","first":"Roope","last":"Seppala"},"location":{"street":{"number":6763,"name":"Esplanadi"},"city":"Nurmes","state":"Northern Ostrobothnia","country":"Finland","postcode":43447,"coordinates":{"latitude":"-22.9266","longitude":"-76.3552"},"timezone":{"offset":"+2:00","description":"Kaliningrad, South Africa"}},"email":"roope.seppala@example.com","login":{"uuid":"dd8a1965-8e5c-4204-993b-e1222e84ffa3","username":"brownpeacock905","password":"moto","salt":"G3tVlcqZ","md5":"04d039c0b3168170452a16c8a6560075","sha1":"7063d9be5fe9569a0e3c0f5a6e811b6fa89beb72","sha256":"0bb29b1396e28390be5e9c41ed5489b675afabcd021556956d5f1ab285365309"},"dob":{"date":"1951-01-29T11:30:46.855Z","age":72},"registered":{"date":"2005-01-18T16:50:38.423Z","age":18},"phone":"03-952-996","cell":"042-669-44-23","id":{"name":"HETU","value":"NaNNA843undefined"},"picture":{"large":"https://randomuser.me/api/portraits/men/16.jpg","medium":"https://randomuser.me/api/portraits/med/men/16.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/16.jpg"},"nat":"FI"},{"gender":"male","name":{"title":"Mr","first":"Oskari","last":"Wuollet"},"location":{"street":{"number":1217,"name":"Otavalankatu"},"city":"Haapavesi","state":"Kymenlaakso","country":"Finland","postcode":79331,"coordinates":{"latitude":"-28.3333","longitude":"-65.3467"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"oskari.wuollet@example.com","login":{"uuid":"bfd1803c-7fef-4559-9f65-b7bf1e72c948","username":"greenfrog766","password":"wishbone","salt":"C048tuLe","md5":"fa31782e45f2b58ad6cf0a7a47d50e1a","sha1":"2a322f5e753ecba2e10017725be475567dcb8987","sha256":"5be605d8adc1a5ac3f927eb077018190ad43b12f15603eea5c566d486785dffe"},"dob":{"date":"1970-11-10T09:57:07.401Z","age":52},"registered":{"date":"2016-04-22T16:35:24.834Z","age":7},"phone":"02-841-753","cell":"045-967-89-56","id":{"name":"HETU","value":"NaNNA483undefined"},"picture":{"large":"https://randomuser.me/api/portraits/men/95.jpg","medium":"https://randomuser.me/api/portraits/med/men/95.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/95.jpg"},"nat":"FI"},{"gender":"female","name":{"title":"Ms","first":"Smruthi","last":"Chavare"},"location":{"street":{"number":8597,"name":"Shivajinagar"},"city":"Nizamabad","state":"Tamil Nadu","country":"India","postcode":55051,"coordinates":{"latitude":"9.7495","longitude":"133.6865"},"timezone":{"offset":"+4:00","description":"Abu Dhabi, Muscat, Baku, Tbilisi"}},"email":"smruthi.chavare@example.com","login":{"uuid":"d3f9dead-8c13-4cfb-92c4-07f7035370f4","username":"crazybird514","password":"robins","salt":"UeoX7TYi","md5":"a4430cd7e84094bdc2b6dcba6d73764b","sha1":"d17c76baea4c432ce65c004b26993131fa52fc39","sha256":"98c30c74ec604783e8234e591c8f8a5f9d5d73a0be5b14ae397366352bf98ed4"},"dob":{"date":"1998-04-20T23:01:13.489Z","age":25},"registered":{"date":"2011-04-10T18:10:37.364Z","age":12},"phone":"7324093904","cell":"9406588571","id":{"name":"UIDAI","value":"666582734905"},"picture":{"large":"https://randomuser.me/api/portraits/women/3.jpg","medium":"https://randomuser.me/api/portraits/med/women/3.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/3.jpg"},"nat":"IN"}]}');

    const results = data.results

    function getNombre() {
        var index = document.getElementById("numbers").value - 1;
        var nombre = results[index].name.title + " " + results[index].name.first + " " + results[index].name.last
        document.getElementById("inputNombre").value = nombre;
    }
    document.getElementById("numbers").addEventListener("change", getNombre)

    function getEmail() {
        var index = document.getElementById("numbers").value - 1;
        var email = results[index].email
        document.getElementById("inputEmail").value = email;
    }
    document.getElementById("numbers").addEventListener("change", getEmail)

    function getDireccion() {
        var index = document.getElementById("numbers").value - 1;
        var direccion = results[index].location.street.name + results[index].location.street.name + ", " + results[index].location.city + ", " + results[index].location.state + ", " + results[index].location.country + ", " + results[index].location.postcode
        document.getElementById("inputDireccion").value = direccion;
    }
    document.getElementById("numbers").addEventListener("change", getDireccion)

    function getFechaNacimiento() {
        var index = document.getElementById("numbers").value - 1;
        var fechaNacimiento = results[index].dob.date.substring(8,10) + "/" + results[index].dob.date.substring(5,7) + "/" + results[index].dob.date.substring(0,4)
        document.getElementById("inputFechaNacimiento").value = fechaNacimiento;
    }
    document.getElementById("numbers").addEventListener("change", getFechaNacimiento)

    function getImagen() {
        var index = document.getElementById("numbers").value - 1;
        switch (index) {
            case 0:
                var imagen = "source/43.jpg"
                break;
    
            case 1:
                var imagen = "source/53.jpg"
                break;
    
            case 2:
                var imagen = "source/27.jpg"
                break;   
    
            case 3:
                var imagen = "source/61.jpg" 
                break;
    
            case 4:
                var imagen = "source/77.jpg" 
                break;
                
            case 5:
                var imagen = "source/76.jpg" 
                break; 
                
            case 6:
                var imagen = "source/72.jpg" 
                break;   
                
            case 7:
                var imagen = "source/16.jpg" 
                break;
                
            case 8:
                var imagen = "source/95.jpg" 
                break;
                
            case 9:
                var imagen = "source/3.jpg" 
                break; 
        }
        document.getElementById("imagen").src = imagen;
    }
    document.getElementById("numbers").addEventListener("change", getImagen)

