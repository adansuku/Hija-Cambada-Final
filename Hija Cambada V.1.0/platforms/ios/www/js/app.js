angular.module("starter",["ionic","starter.controllers","starter.plantasController","starter.avesController","starter.esquemaController","starter.mapaController","ui.router"]).run(["$ionicPlatform","$state",function(t,e){t.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0)),window.StatusBar&&StatusBar.styleDefault()}),t.registerBackButtonAction(function(t){"app.pajaroCuervo"==e.current.name||navigator.app.backHistory()},101)}]).config(["$stateProvider","$urlRouterProvider",function(t,e){t.state("app",{url:"/app","abstract":!0,templateUrl:"templates/menu.html",controller:"PlantasCtrl"}).state("app.principal",{url:"/principal",views:{menuContent:{templateUrl:"templates/principal.html",controller:"PlaylistsCtrl"}}}).state("app.principalPlantas",{url:"/principalPlantas",views:{menuContent:{templateUrl:"templates/plantas/principalPlantas.html",controller:"PlaylistsCtrl"}}}).state("app.sencillaCompuesta",{url:"/sencillaCompuesta",views:{menuContent:{templateUrl:"templates/hojas/sencillaCompuesta.html",controller:"PlantasCtrl"}}}).state("app.opuestaAlterna",{url:"/opuestaAlterna",views:{menuContent:{templateUrl:"templates/hojas/opuestaAlterna.html",controller:"PlantasCtrl"}}}).state("app.rugosaLisa",{url:"/rugosaLisa",views:{menuContent:{templateUrl:"templates/hojas/rugosaLisa.html",controller:"PlantasCtrl"}}}).state("app.tipoBorde",{url:"/tipoBorde",views:{menuContent:{templateUrl:"templates/hojas/tipoBorde.html",controller:"PlantasCtrl"}}}).state("app.hojaPequeGrande",{url:"/hojaPequeGrande",views:{menuContent:{templateUrl:"templates/hojas/hojaPequeGrande.html",controller:"PlantasCtrl"}}}).state("app.formaVerticalHorizontal",{url:"/formaVerticalHorizontal",views:{menuContent:{templateUrl:"templates/hojas/formaVerticalHorizontal.html",controller:"PlantasCtrl"}}}).state("app.abultamientos",{url:"/abultamientos",views:{menuContent:{templateUrl:"templates/hojas/abultamientos.html",controller:"PlantasCtrl"}}}).state("app.agallasGlandulas",{url:"/agallasGlandulas",views:{menuContent:{templateUrl:"templates/hojas/agallasGlandulas.html",controller:"PlantasCtrl"}}}).state("app.alargadasRedondeadas",{url:"/alargadasRedondeadas",views:{menuContent:{templateUrl:"templates/hojas/alargadasRedondeadas.html",controller:"PlantasCtrl"}}}).state("app.nervios",{url:"/nervios",views:{menuContent:{templateUrl:"templates/hojas/nervios.html",controller:"PlantasCtrl"}}}).state("app.mayoresMenores",{url:"/mayoresMenores",views:{menuContent:{templateUrl:"templates/hojas/mayoresMenores.html",controller:"PlantasCtrl"}}}).state("app.glandulas",{url:"/glandulas",views:{menuContent:{templateUrl:"templates/hojas/glandulas.html",controller:"PlantasCtrl"}}}).state("app.hojasMayoresMenores",{url:"/hojasMayoresMenores",views:{menuContent:{templateUrl:"templates/hojas/hojasMayoresMenores.html",controller:"PlantasCtrl"}}}).state("app.nervioCentral",{url:"/nervioCentral",views:{menuContent:{templateUrl:"templates/hojas/nervioCentral.html",controller:"PlantasCtrl"}}}).state("app.rojizaMismoColor",{url:"/rojizaMismoColor",views:{menuContent:{templateUrl:"templates/hojas/rojizaMismoColor.html",controller:"PlantasCtrl"}}}).state("app.puntaAfiladaRedondeada",{url:"/puntaAfiladaRedondeada",views:{menuContent:{templateUrl:"templates/hojas/puntaAfiladaRedondeada.html",controller:"PlantasCtrl"}}}).state("app.follao",{url:"/follao",views:{menuContent:{templateUrl:"templates/plantas/follao.html",controller:"PlantasCtrl"}}}).state("app.follaoFoto",{url:"/follaoFoto",views:{menuContent:{templateUrl:"templates/plantas/follaoFoto.html",controller:"PlantasCtrl"}}}).state("app.paloBlanco",{url:"/paloBlanco",views:{menuContent:{templateUrl:"templates/plantas/paloBlanco.html",controller:"PlantasCtrl"}}}).state("app.paloBlancoFoto",{url:"/paloBlancoFoto",views:{menuContent:{templateUrl:"templates/plantas/paloBlancoFoto.html",controller:"PlantasCtrl"}}}).state("app.sauco",{url:"/sauco",views:{menuContent:{templateUrl:"templates/plantas/sauco.html",controller:"PlantasCtrl"}}}).state("app.saucoFoto",{url:"/saucoFoto",views:{menuContent:{templateUrl:"templates/plantas/saucoFoto.html",controller:"PlantasCtrl"}}}).state("app.naranjero",{url:"/naranjero",views:{menuContent:{templateUrl:"templates/plantas/naranjero.html",controller:"PlantasCtrl"}}}).state("app.naranjeroFoto",{url:"/naranjeroFoto",views:{menuContent:{templateUrl:"templates/plantas/naranjeroFoto.html",controller:"PlantasCtrl"}}}).state("app.faya",{url:"/faya",views:{menuContent:{templateUrl:"templates/plantas/faya.html",controller:"PlantasCtrl"}}}).state("app.fayaFoto",{url:"/fayaFoto",views:{menuContent:{templateUrl:"templates/plantas/fayaFoto.html",controller:"PlantasCtrl"}}}).state("app.brezo",{url:"/brezo",views:{menuContent:{templateUrl:"templates/plantas/brezo.html",controller:"PlantasCtrl"}}}).state("app.brezoFoto",{url:"/brezoFoto",views:{menuContent:{templateUrl:"templates/plantas/brezoFoto.html",controller:"PlantasCtrl"}}}).state("app.tejo",{url:"/tejo",views:{menuContent:{templateUrl:"templates/plantas/tejo.html",controller:"PlantasCtrl"}}}).state("app.tejoFoto",{url:"/tejoFoto",views:{menuContent:{templateUrl:"templates/plantas/tejoFoto.html",controller:"PlantasCtrl"}}}).state("app.barbuzano",{url:"/barbuzano",views:{menuContent:{templateUrl:"templates/plantas/barbuzano.html",controller:"PlantasCtrl"}}}).state("app.barbuzanoFoto",{url:"/barbuzanoFoto",views:{menuContent:{templateUrl:"templates/plantas/barbuzanoFoto.html",controller:"PlantasCtrl"}}}).state("app.sanguino",{url:"/sanguino",views:{menuContent:{templateUrl:"templates/plantas/sanguino.html",controller:"PlantasCtrl"}}}).state("app.sanguinoFoto",{url:"/sanguinoFoto",views:{menuContent:{templateUrl:"templates/plantas/sanguinoFoto.html",controller:"PlantasCtrl"}}}).state("app.mocan",{url:"/mocan",views:{menuContent:{templateUrl:"templates/plantas/mocan.html",controller:"PlantasCtrl"}}}).state("app.mocanFoto",{url:"/mocanFoto",views:{menuContent:{templateUrl:"templates/plantas/mocanFoto.html",controller:"PlantasCtrl"}}}).state("app.hija",{url:"/hija",views:{menuContent:{templateUrl:"templates/plantas/hija.html",controller:"PlantasCtrl"}}}).state("app.hijaFoto",{url:"/hijaFoto",views:{menuContent:{templateUrl:"templates/plantas/hijaFoto.html",controller:"PlantasCtrl"}}}).state("app.madrono",{url:"/madrono",views:{menuContent:{templateUrl:"templates/plantas/madrono.html",controller:"PlantasCtrl"}}}).state("app.madronoFoto",{url:"/madronoFoto",views:{menuContent:{templateUrl:"templates/plantas/madronoFoto.html",controller:"PlantasCtrl"}}}).state("app.til",{url:"/til",views:{menuContent:{templateUrl:"templates/plantas/til.html",controller:"PlantasCtrl"}}}).state("app.tilFoto",{url:"/tilFoto",views:{menuContent:{templateUrl:"templates/plantas/tilFoto.html",controller:"PlantasCtrl"}}}).state("app.laurel",{url:"/laurel",views:{menuContent:{templateUrl:"templates/plantas/laurel.html",controller:"PlantasCtrl"}}}).state("app.laurelFoto",{url:"/laurelFoto",views:{menuContent:{templateUrl:"templates/plantas/laurelFoto.html",controller:"PlantasCtrl"}}}).state("app.vinatigo",{url:"/vinatigo",views:{menuContent:{templateUrl:"templates/plantas/vinatigo.html",controller:"PlantasCtrl"}}}).state("app.vinatigoFoto",{url:"/vinatigoFoto",views:{menuContent:{templateUrl:"templates/plantas/vinatigoFoto.html",controller:"PlantasCtrl"}}}).state("app.delfino",{url:"/delfino",views:{menuContent:{templateUrl:"templates/plantas/delfino.html",controller:"PlantasCtrl"}}}).state("app.delfinoFoto",{url:"/delfinoFoto",views:{menuContent:{templateUrl:"templates/plantas/delfinoFoto.html",controller:"PlantasCtrl"}}}).state("app.aderno",{url:"/aderno",views:{menuContent:{templateUrl:"templates/plantas/aderno.html",controller:"PlantasCtrl"}}}).state("app.adernoFoto",{url:"/adernoFoto",views:{menuContent:{templateUrl:"templates/plantas/adernoFoto.html",controller:"PlantasCtrl"}}}).state("app.marmolan",{url:"/marmolan",views:{menuContent:{templateUrl:"templates/plantas/marmolan.html",controller:"PlantasCtrl"}}}).state("app.marmolanFoto",{url:"/marmolanFoto",views:{menuContent:{templateUrl:"templates/plantas/marmolanFoto.html",controller:"PlantasCtrl"}}}).state("app.acebino",{url:"/acebino",views:{menuContent:{templateUrl:"templates/plantas/acebino.html",controller:"PlantasCtrl"}}}).state("app.acebinoFoto",{url:"/acebinoFoto",views:{menuContent:{templateUrl:"templates/plantas/acebinoFoto.html",controller:"PlantasCtrl"}}}).state("app.pruebaPlantasBD",{url:"/pruebaPlantasBD",views:{menuContent:{templateUrl:"templates/plantas/pruebaPlantasBD.html",controller:"PlantasCtrl"}}}).state("app.principalPajaros",{url:"/principalPajaros",views:{menuContent:{templateUrl:"templates/aves/principalPajaros.html",controller:"AvesCtrl"}}}).state("app.principalPajarosMenu",{url:"/principalPajarosMenu",views:{menuContent:{templateUrl:"templates/aves/principalPajarosMenu.html",controller:"AvesCtrl"}}}).state("app.pajaroCuervo",{url:"/pajaroCuervo",views:{menuContent:{templateUrl:"templates/aves/pajaroCuervo.html",controller:"AvesCtrl"}}}).state("app.pajaroGavilan",{url:"/pajaroGavilan",views:{menuContent:{templateUrl:"templates/aves/pajaroGavilan.html",controller:"AvesCtrl"}}}).state("app.pajaroHerrerillo",{url:"/pajaroHerrerillo",views:{menuContent:{templateUrl:"templates/aves/pajaroHerrerillo.html",controller:"AvesCtrl"}}}).state("app.pajaroMirlo",{url:"/pajaroMirlo",views:{menuContent:{templateUrl:"templates/aves/pajaroMirlo.html",controller:"AvesCtrl"}}}).state("app.pajaroMosquitero",{url:"/pajaroMosquitero",views:{menuContent:{templateUrl:"templates/aves/pajaroMosquitero.html",controller:"AvesCtrl"}}}).state("app.pajaroPalomaRabiche",{url:"/pajaroPalomaRabiche",views:{menuContent:{templateUrl:"templates/aves/pajaroPalomaRabiche.html",controller:"AvesCtrl"}}}).state("app.pajaroPalomaTurque",{url:"/pajaroPalomaTurque",views:{menuContent:{templateUrl:"templates/aves/pajaroPalomaTurque.html",controller:"AvesCtrl"}}}).state("app.pajaroPetirrojo",{url:"/pajaroPetirrojo",views:{menuContent:{templateUrl:"templates/aves/pajaroPetirrojo.html",controller:"AvesCtrl"}}}).state("app.pajaroPinzon",{url:"/pajaroPinzon",views:{menuContent:{templateUrl:"templates/aves/pajaroPinzon.html",controller:"AvesCtrl"}}}).state("app.pajaroReyezuelo",{url:"/pajaroReyezuelo",views:{menuContent:{templateUrl:"templates/aves/pajaroReyezuelo.html",controller:"AvesCtrl"}}}).state("app.principalMapa",{url:"/principalMapa",views:{menuContent:{templateUrl:"./templates/mapa/principalMapa.html",controller:"MapaCtrl"}}}).state("app.principalMapaMenu",{url:"/principalMapaMenu",views:{menuContent:{templateUrl:"./templates/mapa/principalMapaMenu.html",controller:"MapaCtrl"}}}).state("app.principalEsquema",{url:"/principalEsquema",views:{menuContent:{templateUrl:"templates/esquema/principalEsquema.html",controller:"EsquemaCtrl"}}}).state("app.principalEsquemaMenu",{url:"/principalEsquemaMenu",views:{menuContent:{templateUrl:"templates/esquema/principalEsquemaMenu.html",controller:"EsquemaCtrl"}}}).state("app.esquemaForma",{url:"/esquemaForma",views:{menuContent:{templateUrl:"templates/esquema/esquemaForma.html",controller:"EsquemaCtrl"}}}).state("app.esquemaMargen",{url:"/esquemaMargen",views:{menuContent:{templateUrl:"templates/esquema/esquemaMargen.html",controller:"EsquemaCtrl"}}}).state("app.esquemaVenacion",{url:"/esquemaVenacion",views:{menuContent:{templateUrl:"templates/esquema/esquemaVenacion.html",controller:"EsquemaCtrl"}}}).state("app.arbol1",{url:"/arbol1",views:{menuContent:{templateUrl:"templates/arboles/arbol1.html",controller:"PlantasCtrl"}}}).state("app.arbol1Descripcion",{url:"/arbol1Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol1Descripcion.html",controller:"PlantasCtrl"}}}).state("app.arbol2",{url:"/arbol2",views:{menuContent:{templateUrl:"templates/arboles/arbol2.html",controller:"PlantasCtrl"}}}).state("app.arbol2Descripcion",{url:"/arbol2Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol2Descripcion.html",controller:"PlantasCtrl"}}}).state("app.arbol3",{url:"/arbol3",views:{menuContent:{templateUrl:"templates/arboles/arbol3.html",controller:"PlantasCtrl"}}}).state("app.arbol3Descripcion",{url:"/arbol3Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol3Descripcion.html",controller:"PlantasCtrl"}}}).state("app.arbol4",{url:"/arbol4",views:{menuContent:{templateUrl:"templates/arboles/arbol4.html",controller:"PlantasCtrl"}}}).state("app.arbol4Descripcion",{url:"/arbol4Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol4Descripcion.html",controller:"PlantasCtrl"}}}).state("app.arbol5",{url:"/arbol5",views:{menuContent:{templateUrl:"templates/arboles/arbol5.html",controller:"PlantasCtrl"}}}).state("app.arbol5Descripcion",{url:"/arbol5Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol5Descripcion.html",controller:"PlantasCtrl"}}}).state("app.arbol6",{url:"/arbol6",views:{menuContent:{templateUrl:"templates/arboles/arbol6.html",controller:"PlantasCtrl"}}}).state("app.arbol6Descripcion",{url:"/arbol6Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol6Descripcion.html",controller:"PlantasCtrl"}}}).state("app.arbol7",{url:"/arbol7",views:{menuContent:{templateUrl:"templates/arboles/arbol7.html",controller:"PlantasCtrl"}}}).state("app.arbol7Descripcion",{url:"/arbol7Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol7Descripcion.html",controller:"PlantasCtrl"}}}).state("app.arbol8",{url:"/arbol8",views:{menuContent:{templateUrl:"templates/arboles/arbol8.html",controller:"PlantasCtrl"}}}).state("app.arbol8Descripcion",{url:"/arbol8Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol8Descripcion.html",controller:"PlantasCtrl"}}}).state("app.arbol9",{url:"/arbol9",views:{menuContent:{templateUrl:"templates/arboles/arbol9.html",controller:"PlantasCtrl"}}}).state("app.arbol9Descripcion",{url:"/arbol9Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol9Descripcion.html",controller:"PlantasCtrl"}}}).state("app.arbol10",{url:"/arbol10",views:{menuContent:{templateUrl:"templates/arboles/arbol10.html",controller:"PlantasCtrl"}}}).state("app.arbol10Descripcion",{url:"/arbol10Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol10Descripcion.html",controller:"PlantasCtrl"}}}).state("app.arbol11",{url:"/arbol11",views:{menuContent:{templateUrl:"templates/arboles/arbol11.html",controller:"PlantasCtrl"}}}).state("app.arbol11Descripcion",{url:"/arbol11Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol11Descripcion.html",controller:"PlantasCtrl"}}}).state("app.arbol12",{url:"/arbol12",views:{menuContent:{templateUrl:"templates/arboles/arbol12.html",controller:"PlantasCtrl"}}}).state("app.arbol12Descripcion",{url:"/arbol12Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol12Descripcion.html",controller:"PlantasCtrl"}}}).state("app.arbol13",{url:"/arbol13",views:{menuContent:{templateUrl:"templates/arboles/arbol13.html",controller:"PlantasCtrl"}}}).state("app.arbol13Descripcion",{url:"/arbol13Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol13Descripcion.html",controller:"PlantasCtrl"}}}).state("app.arbol14",{url:"/arbol14",views:{menuContent:{templateUrl:"templates/arboles/arbol14.html",controller:"PlantasCtrl"}}}).state("app.arbol14Descripcion",{url:"/arbol14Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol14Descripcion.html",controller:"PlantasCtrl"}}}).state("app.arbol15",{url:"/arbol15",views:{menuContent:{templateUrl:"templates/arboles/arbol15.html",controller:"PlantasCtrl"}}}).state("app.arbol15Descripcion",{url:"/arbol15Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol15Descripcion.html",controller:"PlantasCtrl"}}}).state("app.arbol16",{url:"/arbol16",views:{menuContent:{templateUrl:"templates/arboles/arbol16.html",controller:"PlantasCtrl"}}}).state("app.arbol16Descripcion",{url:"/arbol16Descripcion",views:{menuContent:{templateUrl:"templates/arboles/arbol16Descripcion.html",controller:"PlantasCtrl"}}}).state("app.materialNecesario",{url:"/materialNecesario",views:{menuContent:{templateUrl:"templates/practica/materialNecesario.html",controller:"PlantasCtrl"}}}).state("app.objetivos",{url:"/objetivos",views:{menuContent:{templateUrl:"templates/practica/objetivos.html",controller:"PlantasCtrl"}}}).state("app.portadaPracticas",{url:"/portadaPracticas",views:{menuContent:{templateUrl:"templates/practica/portadaPracticas.html",controller:"PlantasCtrl"}}}).state("app.practicaUno",{url:"/practicaUno",views:{menuContent:{templateUrl:"templates/practica/practicaUno.html",controller:"PlantasCtrl"}}}).state("app.principalVideo",{url:"/principalVideo",views:{menuContent:{templateUrl:"templates/video/principalVideo.html",controller:"PlaylistsCtrl"}}}).state("app.search",{url:"/search",views:{menuContent:{templateUrl:"templates/search.html"}}}).state("app.browse",{url:"/browse",views:{menuContent:{templateUrl:"templates/browse.html"}}}).state("app.playlists",{url:"/playlists",views:{menuContent:{templateUrl:"templates/playlists.html",controller:"PlaylistsCtrl"}}}).state("app.single",{url:"/playlists/:playlistId",views:{menuContent:{templateUrl:"templates/playlist.html",controller:"PlaylistCtrl"}}}),e.otherwise("/app/principal")}]);