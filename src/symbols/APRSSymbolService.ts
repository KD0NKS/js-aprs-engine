import APRSSymbol from './APRSSymbol';
import StringUtil from '../util/StringUtil';

interface IAPRSSymbolService {
    GetAPRSSymbol(symbolTableId: string, symbolCode: string): any;
}

/**
 * Defines a set of symbols to be used as defined in chapter 20 of the APRS spec.
 */
export default class APRSSymbolService implements IAPRSSymbolService {
    private symbols: APRSSymbol[];
    private overlays: APRSSymbol[];
    private readonly CROSSHAIR = new APRSSymbol({
        key: ''
        , value: "/Crosshair.gif"
        , name: "Crosshair"
    });

    constructor() {
        this.symbols = [
            new APRSSymbol({ key: "/!", value: "/PrimaryTable/PD.gif", name: "Police Department" })
            , new APRSSymbol({ key: '/#', value: "/PrimaryTable/Digipeater1.gif", name: "Digipeater" })
            , new APRSSymbol({ key: '/$', value: "/PrimaryTable/Phone.gif", name: "Phone" })
            , new APRSSymbol({ key: '/%', value: "/PrimaryTable/DX.gif", name: "DX Station" })
            , new APRSSymbol({ key: '/&', value: "/PrimaryTable/Gateway.gif", name: "Gateway" })
            , new APRSSymbol({ key: '/\'', value: "/PrimaryTable/SmallAircraft.gif", name: "Small Aircraft" })
            , new APRSSymbol({ key: '/(', value: "/PrimaryTable/MobileSatteliteStation.gif", name: "Mobile Sattelite Station" })
            , new APRSSymbol({ key: '/)', value: "/PrimaryTable/Wheelchair.gif", name: "Wheelchair" })
            , new APRSSymbol({ key: '/*', value: "/PrimaryTable/Snowmobile.gif", name: "Snow Mobile" })
            , new APRSSymbol({ key: '/+', value: "/PrimaryTable/RedCross.gif", name: "Red Cross" })
            , new APRSSymbol({ key: '/,', value: "/PrimaryTable/BoyScout.gif", name: "Boy Scouts" })
            , new APRSSymbol({ key: '/-', value: "/PrimaryTable/House.gif", name: "House" })
            , new APRSSymbol({ key: '/.', value: "/PrimaryTable/RedX.gif", name: "X" })
            , new APRSSymbol({ key: '//', value: "/PrimaryTable/RedDot.gif", name: "Dot" })
            , new APRSSymbol({ key: '/0', value: "/PrimaryTable/Circle.gif", name: "Circle 0" })
            , new APRSSymbol({ key: '/1', value: "/PrimaryTable/Circle1.gif", name: "Circle 1" })
            , new APRSSymbol({ key: '/2', value: "/PrimaryTable/Circle2.gif", name: "Circle 2" })
            , new APRSSymbol({ key: '/3', value: "/PrimaryTable/Circle3.gif", name: "Circle 3" })
            , new APRSSymbol({ key: '/4', value: "/PrimaryTable/Circle4.gif", name: "Circle 4" })
            , new APRSSymbol({ key: '/5', value: "/PrimaryTable/Circle5.gif", name: "Circle 5" })
            , new APRSSymbol({ key: '/6', value: "/PrimaryTable/Circle6.gif", name: "Circle 6" })
            , new APRSSymbol({ key: '/7', value: "/PrimaryTable/Circle7.gif", name: "Circle 7" })
            , new APRSSymbol({ key: '/8', value: "/PrimaryTable/Circle8.gif", name: "Circle 8" })
            , new APRSSymbol({ key: '/9', value: "/PrimaryTable/Circle9.gif", name: "Circle 9" })
            , new APRSSymbol({ key: '/:', value: "/PrimaryTable/Fire.gif", name: "Fire" })
            , new APRSSymbol({ key: '/;', value: "/PrimaryTable/Campground.gif", name: "Campground" })
            , new APRSSymbol({ key: '/<', value: "/PrimaryTable/Motorcycle.gif", name: "Motorcycle" })
            , new APRSSymbol({ key: '/=', value: "/PrimaryTable/TrainEngine.gif", name: "Train" })
            , new APRSSymbol({ key: '/>', value: "/PrimaryTable/Car.gif", name: "Car" })
            , new APRSSymbol({ key: '/?', value: "/PrimaryTable/FileServer.gif", name: "File Server" })
            , new APRSSymbol({ key: '/@', value: "/PrimaryTable/HurricaneFuturePrediction.gif", name: "Hurricane Future Prediction" })
            , new APRSSymbol({ key: '/A', value: "/PrimaryTable/AidStation.gif", name: "Aid Station" })
            , new APRSSymbol({ key: '/B', value: "/PrimaryTable/BullitenSystem.gif", name: "Bulliten System" })
            , new APRSSymbol({ key: '/C', value: "/PrimaryTable/Canoe.gif", name: "Canoe" })
            , new APRSSymbol({ key: '/E', value: "/PrimaryTable/Eye.gif", name: "Eye" })
            , new APRSSymbol({ key: '/F', value: "/PrimaryTable/FarmEquipment.gif", name: "Farm Equipment" })
            , new APRSSymbol({ key: '/G', value: "/PrimaryTable/GridSquare.gif", name: "Grid Square" })
            , new APRSSymbol({ key: '/H', value: "/PrimaryTable/Hotel.gif", name: "Hotel" })
            , new APRSSymbol({ key: '/I', value: "/PrimaryTable/TCPIPOnAirNetwork.gif", name: "TCPIP On Air Network" })
            , new APRSSymbol({ key: '/K', value: "/PrimaryTable/School.gif", name: "School" })
            , new APRSSymbol({ key: '/L', value: "/PrimaryTable/PCUser.gif", name: "PC User" })
            , new APRSSymbol({ key: '/M', value: "/PrimaryTable/MacAprs.gif", name: "Mac APRS" })
            , new APRSSymbol({ key: '/N', value: "/PrimaryTable/NationalTrafficStation.gif", name: "National Traffic Station" })
            , new APRSSymbol({ key: '/O', value: "/PrimaryTable/Balloon.gif", name: "Balloon" })
            , new APRSSymbol({ key: '/P', value: "/PrimaryTable/Police.gif", name: "Pilice" })
            , new APRSSymbol({ key: '/Q', value: "/PrimaryTable/Quake.gif", name: "Earthquake" }) // TBD?
            , new APRSSymbol({ key: '/R', value: "/PrimaryTable/RV.gif", name: "RV" })
            , new APRSSymbol({ key: '/S', value: "/PrimaryTable/Shuttle.gif", name: "Shuttle" })
            , new APRSSymbol({ key: '/T', value: "/PrimaryTable/SSTV.gif", name: "SSTV" })
            , new APRSSymbol({ key: '/U', value: "/PrimaryTable/Bus.gif", name: "Bus" })
            , new APRSSymbol({ key: '/V', value: "/PrimaryTable/ATV.gif", name: "ATV" })    // TODO: Find out what this really stands for
            , new APRSSymbol({ key: '/W', value: "/PrimaryTable/NationalWeatherService.gif", name: "NWS" })
            , new APRSSymbol({ key: '/X', value: "/PrimaryTable/Helicopter.gif", name: "Helicopter" })
            , new APRSSymbol({ key: '/Y', value: "/PrimaryTable/Yacht.gif", name: "Yacht" })
            , new APRSSymbol({ key: '/Z', value: "/PrimaryTable/WinAprs.gif", name: "Win APRS" })
            , new APRSSymbol({ key: '/[', value: "/PrimaryTable/Person.gif", name: "Person" })
            , new APRSSymbol({ key: '/\\', value: "/PrimaryTable/DFStation.gif", name: "DF Station" })
            , new APRSSymbol({ key: '/]', value: "/PrimaryTable/PostOffice.gif", name: "Post Office" })
            , new APRSSymbol({ key: '/^', value: "/PrimaryTable/LargeAircraft.gif", name: "Large Aircraft" })
            , new APRSSymbol({ key: '/_', value: "/PrimaryTable/WeatherStation.gif", name: "Weather Station" })
            , new APRSSymbol({ key: '/`', value: "/PrimaryTable/DishAntenna.gif", name: "Dish Antenna" })
            , new APRSSymbol({ key: '/a', value: "/PrimaryTable/Ambulance.gif", name: "Ambulance" })
            , new APRSSymbol({ key: '/b', value: "/PrimaryTable/Bicycle.gif", name: "Bicycle" })
            , new APRSSymbol({ key: '/c', value: "/PrimaryTable/IncidentCommandPost.gif", name: "Incident Command Post" })
            , new APRSSymbol({ key: '/d', value: "/PrimaryTable/Firehouse.gif", name: "Firehouse" })
            , new APRSSymbol({ key: '/e', value: "/PrimaryTable/Horse.gif", name: "Horse" })
            , new APRSSymbol({ key: '/f', value: "/PrimaryTable/FireTruck.gif", name: "Fire Truck" })
            , new APRSSymbol({ key: '/g', value: "/PrimaryTable/Glider.gif", name: "Glider" })
            , new APRSSymbol({ key: '/h', value: "/PrimaryTable/Hospital.gif", name: "Hospital" })
            , new APRSSymbol({ key: '/i', value: "/PrimaryTable/IslandsOnTheAir.gif", name: "Islands on the Air" })
            , new APRSSymbol({ key: '/j', value: "/PrimaryTable/Jeep.gif", name: "Jeep" })
            , new APRSSymbol({ key: '/k', value: "/PrimaryTable/Truck.gif", name: "Truck" })
            , new APRSSymbol({ key: '/l', value: "/PrimaryTable/Laptop.gif", name: "Laptop" })
            , new APRSSymbol({ key: '/m', value: "/PrimaryTable/MicERepeater.gif", name: "Mic E Repeater" })
            , new APRSSymbol({ key: '/n', value: "/PrimaryTable/Node.gif", name: "Node" })
            , new APRSSymbol({ key: '/o', value: "/PrimaryTable/EOC.gif", name: "EOC" })
            , new APRSSymbol({ key: '/p', value: "/PrimaryTable/Dog.gif", name: "Dog" })
            , new APRSSymbol({ key: '/q', value: "/PrimaryTable/GridSquare2.gif", name: "Gridsquare" })
            , new APRSSymbol({ key: '/r', value: "/PrimaryTable/Repeater.gif", name: "Repeater" })
            , new APRSSymbol({ key: '/s', value: "/PrimaryTable/Boat.gif", name: "Boat" })
            , new APRSSymbol({ key: '/t', value: "/PrimaryTable/TruckStop.gif", name: "Truck Stop" })
            , new APRSSymbol({ key: '/u', value: "/PrimaryTable/SemiTruck.gif", name: "Semi Truck" })
            , new APRSSymbol({ key: '/v', value: "/PrimaryTable/Van.gif", name: "Van" })
            , new APRSSymbol({ key: '/w', value: "/PrimaryTable/WaterStation.gif", name: "Water Station" })
            , new APRSSymbol({ key: '/x', value: "/PrimaryTable/Xastir.gif", name: "Xastir" })
            , new APRSSymbol({ key: '/y', value: "/PrimaryTable/HouseWithYagi.gif", name: "House with Yagi" })
            , new APRSSymbol({ key: '/z', value: "/PrimaryTable/TBD.gif", name: "TBD" })
            , new APRSSymbol({ key: '/|', value: "/PrimaryTable/TNCStreamSwitch.gif", name: "TNC Strem Switch" })
            , new APRSSymbol({ key: '/~', value: "/PrimaryTable/TNCStreamSwitch1.gif", name: "TNC Strem Switch" })
            , new APRSSymbol({ key: '!', value: "/AlternateTable/Emergency.gif", name: "Emergency" })
            , new APRSSymbol({ key: '#', value: "/AlternateTable/Digipeater.gif", name: "Digipeater" })
            , new APRSSymbol({ key: '$', value: "/AlternateTable/Bank.gif", name: "Bank" })
            // TODO: Create PowerPlant icon '\\%', value: "/AlternateTable/.gif"
            , new APRSSymbol({ key: '&', value: "/AlternateTable/BlackDiamond.gif", name: "Black Diamond" })
            , new APRSSymbol({ key: '\'', value: "/AlternateTable/CrashSite.gif", name: "Crash Site" })
            , new APRSSymbol({ key: '(', value: "/AlternateTable/Cloudy.gif", name: "Cloudy" })
            , new APRSSymbol({ key: ')', value: "/AlternateTable/Firenet.gif", name: "Firenet" })
            , new APRSSymbol({ key: '*', value: "/AlternateTable/Snow.gif", name: "Snow" })
            , new APRSSymbol({ key: '+', value: "/AlternateTable/Church.gif", name: "Church" })
            , new APRSSymbol({ key: ',', value: "/AlternateTable/GirlScout.gif", name: "Girl Scout" })
            , new APRSSymbol({ key: '-', value: "/AlternateTable/HouseHF.gif", name: "House HF" })
            , new APRSSymbol({ key: '.', value: "/AlternateTable/Ambiguous.gif", name: "Ambiguous" })
            , new APRSSymbol({ key: '/', value: "/AlternateTable/Waypoint.gif", name: "Waypoint" })
            // TODO: ADD 802.11 OR OTHER NETWORK NODE ICON (\8)
            , new APRSSymbol({ key: '9', value: "/AlternateTable/GasStation.gif", name: "Gas Station" })
            , new APRSSymbol({ key: ':', value: "/AlternateTable/Hail.gif", name: "Hail" })
            , new APRSSymbol({ key: ';', value: "/AlternateTable/Park.gif", name: "Park" })
            , new APRSSymbol({ key: '<', value: "/AlternateTable/WeatherFlag.gif", name: "Weather Flag" })
            // TODO: ADD APRSTT TOUCHTONE (DTMF USERS) ICON (\=)
            , new APRSSymbol({ key: '>', value: "/AlternateTable/Car.gif", name: "Car" })
            , new APRSSymbol({ key: '?', value: "/AlternateTable/InfoKiosk.gif", name: "Info Kiosk" })
            , new APRSSymbol({ key: '@', value: "/AlternateTable/Hurricane.gif", name: "Hurricane" })
            , new APRSSymbol({ key: 'A', value: "/AlternateTable/OverlayBox.gif", name: "Overlay Box" })
            , new APRSSymbol({ key: 'B', value: "/AlternateTable/BlowingSnow.gif", name: "Blowing Snow" })
            , new APRSSymbol({ key: 'C', value: "/AlternateTable/CoastGuard.gif", name: "Coast Guard" })
            , new APRSSymbol({ key: 'D', value: "/AlternateTable/Drizzle.gif", name: "Drizzle" })
            , new APRSSymbol({ key: 'E', value: "/AlternateTable/Smoke.gif", name: "Smoke" })
            , new APRSSymbol({ key: 'F', value: "/AlternateTable/FreezingRain.gif", name: "Freezing Rain" })
            , new APRSSymbol({ key: 'G', value: "/AlternateTable/SnowShower.gif", name: "Snow Shower" })
            , new APRSSymbol({ key: 'H', value: "/AlternateTable/Haze.gif", name: "Haze" })
            , new APRSSymbol({ key: 'I', value: "/AlternateTable/RainShower.gif", name: "Rain Shower" })
            , new APRSSymbol({ key: 'J', value: "/AlternateTable/Lightning.gif", name: "Lightning" })
            , new APRSSymbol({ key: 'K', value: "/AlternateTable/KenwoodHT.gif", name: "Kenwood HT" })
            , new APRSSymbol({ key: 'L', value: "/AlternateTable/Lighthouse.gif", name: "Lighthouse" })
            // TODO: ADD MARS ICON (\M)
            , new APRSSymbol({ key: 'N', value: "/AlternateTable/Bouy.gif", name: "Bouy" })
            , new APRSSymbol({ key: 'O', value: "/AlternateTable/Rocket.gif", name: "Rocket" })
            , new APRSSymbol({ key: 'P', value: "/AlternateTable/Parking.gif", name: "Parking" })
            , new APRSSymbol({ key: 'Q', value: "/AlternateTable/Earthquake.gif", name: "Earthquake" })
            , new APRSSymbol({ key: 'R', value: "/AlternateTable/Restaurant.gif", name: "Restaurant" })
            , new APRSSymbol({ key: 'S', value: "/AlternateTable/Satellite.gif", name: "Satellite" })
            , new APRSSymbol({ key: 'T', value: "/AlternateTable/Thunderstorm.gif", name: "Thunderstorm" })
            , new APRSSymbol({ key: 'U', value: "/AlternateTable/Sunny.gif", name: "Sunny" })
            , new APRSSymbol({ key: 'V', value: "/AlternateTable/VORTAC.gif", name: "VORTAC" })
            , new APRSSymbol({ key: 'W', value: "/AlternateTable/NWSSite.gif", name: "NWS Site" })
            , new APRSSymbol({ key: 'X', value: "/AlternateTable/Pharmacy.gif", name: "Pharmacy" })
            // TODO: ADD RADIOS AND DEVICES ICON (\Y)
            , new APRSSymbol({ key: '[', value: "/AlternateTable/Wallcloud.gif", name: "Wallcloud" })
            // TODO: ADD OVERLAYABLE GPS SYMBOL (\\)
            , new APRSSymbol({ key: '^', value: "/AlternateTable/Aircraft.gif", name: "Aircraft" })
            , new APRSSymbol({ key: '_', value: "/AlternateTable/WXSite.gif", name: "WX Site" })
            , new APRSSymbol({ key: '`', value: "/AlternateTable/Rain.gif", name: "Rain" })
            , new APRSSymbol({ key: 'a', value: "/AlternateTable/ARRL.gif", name: "ARRL" })
            , new APRSSymbol({ key: 'b', value: "/AlternateTable/BlowingSand.gif", name: "Blowing Sand" })
            , new APRSSymbol({ key: 'c', value: "/AlternateTable/CDTriangle.gif", name: "CD Triangle" })
            , new APRSSymbol({ key: 'd', value: "/AlternateTable/DXSpot.gif", name: "DX Spot" })
            , new APRSSymbol({ key: 'e', value: "/AlternateTable/Sleet.gif", name: "Sleet" })
            , new APRSSymbol({ key: 'f', value: "/AlternateTable/FunnelCloud.gif", name: "Funnel Cloud" })
            , new APRSSymbol({ key: 'g', value: "/AlternateTable/GaleFlags.gif", name: "Gale Flags" })
            , new APRSSymbol({ key: 'h', value: "/AlternateTable/HamStore.gif", name: "Ham Store" })
            , new APRSSymbol({ key: 'i', value: "/AlternateTable/POIBox.gif", name: "POI Box" })
            , new APRSSymbol({ key: 'j', value: "/AlternateTable/WorkZone.gif", name: "Work Zone" })
            , new APRSSymbol({ key: 'k', value: "/AlternateTable/SpecialVehicle.gif", name: "Special Vehicle" })
            // TODO: ADD AREAS ICON (\l)
            , new APRSSymbol({ key: 'm', value: "/AlternateTable/ValueSign.gif", name: "Value Sign" })
            , new APRSSymbol({ key: 'n', value: "/AlternateTable/OverlayTriangle.gif", name: "Overlay Triangle" })
            , new APRSSymbol({ key: 'o', value: "/AlternateTable/SmallCircle.gif", name: "Small Circle" })
            , new APRSSymbol({ key: 'p', value: "/AlternateTable/PartlyCloudy.gif", name: "Partly Cloudy" })
            , new APRSSymbol({ key: 'r', value: "/AlternateTable/Restrooms.gif", name: "Restrooms" })
            , new APRSSymbol({ key: 's', value: "/AlternateTable/Boat.gif", name: "Boat" })    // TODO: Make a better graphic
            , new APRSSymbol({ key: 't', value: "/AlternateTable/Tornado.gif", name: "Tornado" })
            , new APRSSymbol({ key: 'u', value: "/AlternateTable/Truck.gif", name: "Truck" })
            , new APRSSymbol({ key: 'v', value: "/AlternateTable/Van.gif", name: "Van" })
            , new APRSSymbol({ key: 'w', value: "/AlternateTable/Flood.gif", name: "Flood" })
            , new APRSSymbol({ key: 'x', value: "/AlternateTable/Obstruction.gif", name: "Obstruction" })
            , new APRSSymbol({ key: 'y', value: "/AlternateTable/Skywarn.gif", name: "Skywarn" })
            , new APRSSymbol({ key: 'z', value: "/AlternateTable/Shelter.gif", name: "Shelter" })
            , new APRSSymbol({ key: '{', value: "/AlternateTable/Fog.gif", name: "Fog" })
            , new APRSSymbol({ key: '|', value: "/AlternateTable/TNCSwitchStream1.gif", name: "TNC Switch Stream 1" })
            , new APRSSymbol({ key: '~', value: "/AlternateTable/TNCSwitchStream2.gif", name: "TNC Switch Stream 2" })
        ];

        this.overlays = [
              new APRSSymbol({ key: '0', value: "/Overlay/Zero.gif" })
            , new APRSSymbol({ key: '1', value: "/Overlay/One.gif" })
            , new APRSSymbol({ key: '2', value: "/Overlay/Two.gif" })
            , new APRSSymbol({ key: '3', value: "/Overlay/Three.gif" })
            , new APRSSymbol({ key: '4', value: "/Overlay/Four.gif" })
            , new APRSSymbol({ key: '5', value: "/Overlay/Five.gif" })
            , new APRSSymbol({ key: '6', value: "/Overlay/Six.gif" })
            , new APRSSymbol({ key: '7', value: "/Overlay/Seven.gif" })
            , new APRSSymbol({ key: '8', value: "/Overlay/Eight.gif" })
            , new APRSSymbol({ key: '9', value: "/Overlay/Nine.gif" })
            , new APRSSymbol({ key: 'a', value: "/Overlay/la.gif" })
            , new APRSSymbol({ key: 'b', value: "/Overlay/lb.gif" })
            , new APRSSymbol({ key: 'c', value: "/Overlay/lc.gif" })
            , new APRSSymbol({ key: 'd', value: "/Overlay/ld.gif" })
            , new APRSSymbol({ key: 'e', value: "/Overlay/le.gif" })
            , new APRSSymbol({ key: 'f', value: "/Overlay/lf.gif" })
            , new APRSSymbol({ key: 'g', value: "/Overlay/lg.gif" })
            , new APRSSymbol({ key: 'h', value: "/Overlay/lh.gif" })
            , new APRSSymbol({ key: 'i', value: "/Overlay/li.gif" })
            , new APRSSymbol({ key: 'j', value: "/Overlay/lj.gif" })
            , new APRSSymbol({ key: 'k', value: "/Overlay/lk.gif" })
            , new APRSSymbol({ key: 'l', value: "/Overlay/ll.gif" })
            , new APRSSymbol({ key: 'm', value: "/Overlay/lm.gif" })
            , new APRSSymbol({ key: 'n', value: "/Overlay/ln.gif" })
            , new APRSSymbol({ key: 'o', value: "/Overlay/lo.gif" })
            , new APRSSymbol({ key: 'p', value: "/Overlay/lp.gif" })
            , new APRSSymbol({ key: 'q', value: "/Overlay/lq.gif" })
            , new APRSSymbol({ key: 'r', value: "/Overlay/lr.gif" })
            , new APRSSymbol({ key: 's', value: "/Overlay/ls.gif" })
            , new APRSSymbol({ key: 't', value: "/Overlay/lt.gif" })
            , new APRSSymbol({ key: 'u', value: "/Overlay/lu.gif" })
            , new APRSSymbol({ key: 'v', value: "/Overlay/lv.gif" })
            , new APRSSymbol({ key: 'w', value: "/Overlay/lw.gif" })
            , new APRSSymbol({ key: 'x', value: "/Overlay/lx.gif" })
            , new APRSSymbol({ key: 'y', value: "/Overlay/ly.gif" })
            , new APRSSymbol({ key: 'z', value: "/Overlay/lz.gif" })
            , new APRSSymbol({ key: 'A', value: "/Overlay/A.gif" })
            , new APRSSymbol({ key: 'B', value: "/Overlay/B.gif" })
            , new APRSSymbol({ key: 'C', value: "/Overlay/C.gif" })
            , new APRSSymbol({ key: 'D', value: "/Overlay/D.gif" })
            , new APRSSymbol({ key: 'E', value: "/Overlay/E.gif" })
            , new APRSSymbol({ key: 'F', value: "/Overlay/F.gif" })
            , new APRSSymbol({ key: 'G', value: "/Overlay/G.gif" })
            , new APRSSymbol({ key: 'H', value: "/Overlay/H.gif" })
            , new APRSSymbol({ key: 'I', value: "/Overlay/I.gif" })
            , new APRSSymbol({ key: 'J', value: "/Overlay/J.gif" })
            , new APRSSymbol({ key: 'K', value: "/Overlay/K.gif" })
            , new APRSSymbol({ key: 'L', value: "/Overlay/L.gif" })
            , new APRSSymbol({ key: 'M', value: "/Overlay/M.gif" })
            , new APRSSymbol({ key: 'N', value: "/Overlay/N.gif" })
            , new APRSSymbol({ key: 'O', value: "/Overlay/O.gif" })
            , new APRSSymbol({ key: 'P', value: "/Overlay/P.gif" })
            , new APRSSymbol({ key: 'Q', value: "/Overlay/Q.gif" })
            , new APRSSymbol({ key: 'R', value: "/Overlay/R.gif" })
            , new APRSSymbol({ key: 'S', value: "/Overlay/S.gif" })
            , new APRSSymbol({ key: 'T', value: "/Overlay/T.gif" })
            , new APRSSymbol({ key: 'U', value: "/Overlay/U.gif" })
            , new APRSSymbol({ key: 'V', value: "/Overlay/V.gif" })
            , new APRSSymbol({ key: 'W', value: "/Overlay/W.gif" })
            , new APRSSymbol({ key: 'X', value: "/Overlay/X.gif" })
            , new APRSSymbol({ key: 'Y', value: "/Overlay/Y.gif" })
            , new APRSSymbol({ key: 'Z', value: "/Overlay/Z.gif" })
            , new APRSSymbol({ key: '!', value: "/Overlay/Exclamation.gif" })
            , new APRSSymbol({ key: '"', value: "/Overlay/dQuote.gif" })
            , new APRSSymbol({ key: '#', value: "/Overlay/hash.gif" })
            , new APRSSymbol({ key: '$', value: "/Overlay/dollar.gif" })
            , new APRSSymbol({ key: '%', value: "/Overlay/pct.gif" })
            , new APRSSymbol({ key: '&', value: "/Overlay/amp.gif" })
            , new APRSSymbol({ key: '\'', value: "/Overlay/sQuote.gif" })
            , new APRSSymbol({ key: '(', value: "/Overlay/oParen.gif" })
            , new APRSSymbol({ key: ')', value: "/Overlay/cParen.gif" })
            , new APRSSymbol({ key: '*', value: "/Overlay/asterisk.gif" })
            , new APRSSymbol({ key: '+', value: "/Overlay/plus.gif" })
            , new APRSSymbol({ key: ',', value: "/Overlay/comma.gif" })
            , new APRSSymbol({ key: '-', value: "/Overlay/dash.gif" })
            , new APRSSymbol({ key: '.', value: "/Overlay/period.gif" })
            , new APRSSymbol({ key: '/', value: "/Overlay/fSlash.gif" })
            , new APRSSymbol({ key: ':', value: "/Overlay/colon.gif" })
            , new APRSSymbol({ key: ';', value: "/Overlay/sColon.gif" })
            , new APRSSymbol({ key: '<', value: "/Overlay/oaBracket.gif" })
            , new APRSSymbol({ key: '=', value: "/Overlay/equal.gif" })
            , new APRSSymbol({ key: '>', value: "/Overlay/caBracket.gif" })
            , new APRSSymbol({ key: '?', value: "/Overlay/question.gif" })
            , new APRSSymbol({ key: '@', value: "/Overlay/at.gif" })
            , new APRSSymbol({ key: '[', value: "/Overlay/osBracket.gif" })
            , new APRSSymbol({ key: '\\', value: "/Overlay/bSlash.gif" })
            , new APRSSymbol({ key: ']', value: "/Overlay/csBracket.gif" })
            , new APRSSymbol({ key: '^', value: "/Overlay/caret.gif" })
            , new APRSSymbol({ key: '_', value: "/Overlay/underscore.gif" })
            , new APRSSymbol({ key: '`', value: "/Overlay/grave.gif" })
            , new APRSSymbol({ key: '{', value: "/Overlay/oBracket.gif" })
            , new APRSSymbol({ key: '|', value: "/Overlay/pipe.gif" })
            , new APRSSymbol({ key: '}', value: "/Overlay/cBracket.gif" })
            , new APRSSymbol({ key: '~', value: "/Overlay/tilde.gif" })
        ];
    }

    private GetBaseSymbol(symbolTableId: string, symbolCode: string): APRSSymbol {
        var retVal = null;

        // lets try to make sure we only get 1 result here
        if(!StringUtil.IsNullOrWhiteSpace(symbolTableId) && symbolTableId === '/') {
            retVal = this.symbols.filter(function(s) {
                return s.key == symbolTableId + symbolCode;
            });
        } else {
            retVal = this.symbols.filter(function(s) {
                return s.key == symbolCode;
            });
        }

        if(retVal && retVal.length > 0)
            return retVal[0];
        else
            return this.CROSSHAIR
    }

    private GetOverlay(symbolTableId: string): APRSSymbol {
        if(!StringUtil.IsNullOrWhiteSpace(symbolTableId) && symbolTableId !== '/') {
            var retVal = this.overlays.filter(function(c) {
                return c.key == symbolTableId;
            });

            if(retVal.length > 0)
                return retVal[0];
        }

        return null;
    };

    /**
     * This will return an object with the symbol and an overlay if it has one.
     * @param symbolTableId
     * @param symbolCode
     */
    public GetAPRSSymbol(symbolTableId: string, symbolCode: string) {
        var retVal: any = {};

        retVal['symbol'] = this.GetBaseSymbol(symbolTableId, symbolCode);
        retVal['overlay'] = this.GetOverlay(symbolTableId);

        return retVal;
    }
}