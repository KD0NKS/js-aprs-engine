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
            , new APRSSymbol({ key: '!', value: "/AlternateTable/Emergency.gif", name: "Emergency", isAllowOverlay: true })
            , new APRSSymbol({ key: '#', value: "/AlternateTable/Digipeater.gif", name: "Digipeater", isAllowOverlay: true })
            , new APRSSymbol({ key: '$', value: "/AlternateTable/Bank.gif", name: "Bank", isAllowOverlay: true })
            // TODO: Create PowerPlant icon '\\%', value: "/AlternateTable/.gif"
            , new APRSSymbol({ key: '&', value: "/AlternateTable/BlackDiamond.gif", name: "Black Diamond", isAllowOverlay: true })
            , new APRSSymbol({ key: '\'', value: "/AlternateTable/CrashSite.gif", name: "Crash Site", isAllowOverlay: true })
            , new APRSSymbol({ key: '(', value: "/AlternateTable/Cloudy.gif", name: "Cloudy", isAllowOverlay: true })
            , new APRSSymbol({ key: ')', value: "/AlternateTable/Firenet.gif", name: "Firenet", isAllowOverlay: true })
            , new APRSSymbol({ key: '*', value: "/AlternateTable/Snow.gif", name: "Snow", isAllowOverlay: true })
            , new APRSSymbol({ key: '+', value: "/AlternateTable/Church.gif", name: "Church", isAllowOverlay: true })
            , new APRSSymbol({ key: ',', value: "/AlternateTable/GirlScout.gif", name: "Girl Scout", isAllowOverlay: true })
            , new APRSSymbol({ key: '-', value: "/AlternateTable/HouseHF.gif", name: "House HF", isAllowOverlay: true })
            , new APRSSymbol({ key: '.', value: "/AlternateTable/Ambiguous.gif", name: "Ambiguous", isAllowOverlay: true })
            , new APRSSymbol({ key: '/', value: "/AlternateTable/Waypoint.gif", name: "Waypoint", isAllowOverlay: true })
            // TODO: ADD 802.11 OR OTHER NETWORK NODE ICON (\8)
            , new APRSSymbol({ key: '9', value: "/AlternateTable/GasStation.gif", name: "Gas Station", isAllowOverlay: true })
            , new APRSSymbol({ key: ':', value: "/AlternateTable/Hail.gif", name: "Hail", isAllowOverlay: true })
            , new APRSSymbol({ key: ';', value: "/AlternateTable/Park.gif", name: "Park", isAllowOverlay: true })
            , new APRSSymbol({ key: '<', value: "/AlternateTable/WeatherFlag.gif", name: "Weather Flag", isAllowOverlay: true })
            // TODO: ADD APRSTT TOUCHTONE (DTMF USERS) ICON (\=)
            , new APRSSymbol({ key: '>', value: "/AlternateTable/Car.gif", name: "Car", isAllowOverlay: true })
            , new APRSSymbol({ key: '?', value: "/AlternateTable/InfoKiosk.gif", name: "Info Kiosk", isAllowOverlay: true })
            , new APRSSymbol({ key: '@', value: "/AlternateTable/Hurricane.gif", name: "Hurricane", isAllowOverlay: true })
            , new APRSSymbol({ key: 'A', value: "/AlternateTable/OverlayBox.gif", name: "Overlay Box", isAllowOverlay: true })
            , new APRSSymbol({ key: 'B', value: "/AlternateTable/BlowingSnow.gif", name: "Blowing Snow", isAllowOverlay: true })
            , new APRSSymbol({ key: 'C', value: "/AlternateTable/CoastGuard.gif", name: "Coast Guard", isAllowOverlay: true })
            , new APRSSymbol({ key: 'D', value: "/AlternateTable/Drizzle.gif", name: "Drizzle", isAllowOverlay: true })
            , new APRSSymbol({ key: 'E', value: "/AlternateTable/Smoke.gif", name: "Smoke", isAllowOverlay: true })
            , new APRSSymbol({ key: 'F', value: "/AlternateTable/FreezingRain.gif", name: "Freezing Rain", isAllowOverlay: true })
            , new APRSSymbol({ key: 'G', value: "/AlternateTable/SnowShower.gif", name: "Snow Shower", isAllowOverlay: true })
            , new APRSSymbol({ key: 'H', value: "/AlternateTable/Haze.gif", name: "Haze", isAllowOverlay: true })
            , new APRSSymbol({ key: 'I', value: "/AlternateTable/RainShower.gif", name: "Rain Shower", isAllowOverlay: true })
            , new APRSSymbol({ key: 'J', value: "/AlternateTable/Lightning.gif", name: "Lightning", isAllowOverlay: true })
            , new APRSSymbol({ key: 'K', value: "/AlternateTable/KenwoodHT.gif", name: "Kenwood HT", isAllowOverlay: true })
            , new APRSSymbol({ key: 'L', value: "/AlternateTable/Lighthouse.gif", name: "Lighthouse", isAllowOverlay: true })
            // TODO: ADD MARS ICON (\M)
            , new APRSSymbol({ key: 'N', value: "/AlternateTable/Bouy.gif", name: "Bouy", isAllowOverlay: true })
            , new APRSSymbol({ key: 'O', value: "/AlternateTable/Rocket.gif", name: "Rocket", isAllowOverlay: true })
            , new APRSSymbol({ key: 'P', value: "/AlternateTable/Parking.gif", name: "Parking", isAllowOverlay: true })
            , new APRSSymbol({ key: 'Q', value: "/AlternateTable/Earthquake.gif", name: "Earthquake", isAllowOverlay: true })
            , new APRSSymbol({ key: 'R', value: "/AlternateTable/Restaurant.gif", name: "Restaurant", isAllowOverlay: true })
            , new APRSSymbol({ key: 'S', value: "/AlternateTable/Satellite.gif", name: "Satellite", isAllowOverlay: true })
            , new APRSSymbol({ key: 'T', value: "/AlternateTable/Thunderstorm.gif", name: "Thunderstorm", isAllowOverlay: true })
            , new APRSSymbol({ key: 'U', value: "/AlternateTable/Sunny.gif", name: "Sunny", isAllowOverlay: true })
            , new APRSSymbol({ key: 'V', value: "/AlternateTable/VORTAC.gif", name: "VORTAC", isAllowOverlay: true })
            , new APRSSymbol({ key: 'W', value: "/AlternateTable/NWSSite.gif", name: "NWS Site", isAllowOverlay: true })
            , new APRSSymbol({ key: 'X', value: "/AlternateTable/Pharmacy.gif", name: "Pharmacy", isAllowOverlay: true })
            // TODO: ADD RADIOS AND DEVICES ICON (\Y)
            , new APRSSymbol({ key: '[', value: "/AlternateTable/Wallcloud.gif", name: "Wallcloud", isAllowOverlay: true })
            // TODO: ADD OVERLAYABLE GPS SYMBOL (\\)
            , new APRSSymbol({ key: '^', value: "/AlternateTable/Aircraft.gif", name: "Aircraft", isAllowOverlay: true })
            , new APRSSymbol({ key: '_', value: "/AlternateTable/WXSite.gif", name: "WX Site", isAllowOverlay: true })
            , new APRSSymbol({ key: '`', value: "/AlternateTable/Rain.gif", name: "Rain", isAllowOverlay: true })
            , new APRSSymbol({ key: 'a', value: "/AlternateTable/ARRL.gif", name: "ARRL", isAllowOverlay: true })
            , new APRSSymbol({ key: 'b', value: "/AlternateTable/BlowingSand.gif", name: "Blowing Sand", isAllowOverlay: true })
            , new APRSSymbol({ key: 'c', value: "/AlternateTable/CDTriangle.gif", name: "CD Triangle", isAllowOverlay: true })
            , new APRSSymbol({ key: 'd', value: "/AlternateTable/DXSpot.gif", name: "DX Spot", isAllowOverlay: true })
            , new APRSSymbol({ key: 'e', value: "/AlternateTable/Sleet.gif", name: "Sleet", isAllowOverlay: true })
            , new APRSSymbol({ key: 'f', value: "/AlternateTable/FunnelCloud.gif", name: "Funnel Cloud", isAllowOverlay: true })
            , new APRSSymbol({ key: 'g', value: "/AlternateTable/GaleFlags.gif", name: "Gale Flags", isAllowOverlay: true })
            , new APRSSymbol({ key: 'h', value: "/AlternateTable/HamStore.gif", name: "Ham Store", isAllowOverlay: true })
            , new APRSSymbol({ key: 'i', value: "/AlternateTable/POIBox.gif", name: "POI Box", isAllowOverlay: true })
            , new APRSSymbol({ key: 'j', value: "/AlternateTable/WorkZone.gif", name: "Work Zone", isAllowOverlay: true })
            , new APRSSymbol({ key: 'k', value: "/AlternateTable/SpecialVehicle.gif", name: "Special Vehicle", isAllowOverlay: true })
            // TODO: ADD AREAS ICON (\l)
            , new APRSSymbol({ key: 'm', value: "/AlternateTable/ValueSign.gif", name: "Value Sign", isAllowOverlay: true })
            , new APRSSymbol({ key: 'n', value: "/AlternateTable/OverlayTriangle.gif", name: "Overlay Triangle", isAllowOverlay: true })
            , new APRSSymbol({ key: 'o', value: "/AlternateTable/SmallCircle.gif", name: "Small Circle", isAllowOverlay: true })
            , new APRSSymbol({ key: 'p', value: "/AlternateTable/PartlyCloudy.gif", name: "Partly Cloudy", isAllowOverlay: true })
            , new APRSSymbol({ key: 'r', value: "/AlternateTable/Restrooms.gif", name: "Restrooms", isAllowOverlay: true })
            , new APRSSymbol({ key: 's', value: "/AlternateTable/Boat.gif", name: "Boat", isAllowOverlay: true })    // TODO: Make a better graphic
            , new APRSSymbol({ key: 't', value: "/AlternateTable/Tornado.gif", name: "Tornado", isAllowOverlay: true })
            , new APRSSymbol({ key: 'u', value: "/AlternateTable/Truck.gif", name: "Truck", isAllowOverlay: true })
            , new APRSSymbol({ key: 'v', value: "/AlternateTable/Van.gif", name: "Van", isAllowOverlay: true })
            , new APRSSymbol({ key: 'w', value: "/AlternateTable/Flood.gif", name: "Flood", isAllowOverlay: true })
            , new APRSSymbol({ key: 'x', value: "/AlternateTable/Obstruction.gif", name: "Obstruction", isAllowOverlay: true })
            , new APRSSymbol({ key: 'y', value: "/AlternateTable/Skywarn.gif", name: "Skywarn", isAllowOverlay: true })
            , new APRSSymbol({ key: 'z', value: "/AlternateTable/Shelter.gif", name: "Shelter", isAllowOverlay: true })
            , new APRSSymbol({ key: '{', value: "/AlternateTable/Fog.gif", name: "Fog", isAllowOverlay: true })
            , new APRSSymbol({ key: '|', value: "/AlternateTable/TNCSwitchStream1.gif", name: "TNC Switch Stream 1", isAllowOverlay: true })
            , new APRSSymbol({ key: '~', value: "/AlternateTable/TNCSwitchStream2.gif", name: "TNC Switch Stream 2", isAllowOverlay: true })
        ];

        this.overlays = [
              new APRSSymbol({ key: '0', value: "/Overlay/Zero.gif", name: "0" })
            , new APRSSymbol({ key: '1', value: "/Overlay/One.gif", name: "1" })
            , new APRSSymbol({ key: '2', value: "/Overlay/Two.gif", name: "2" })
            , new APRSSymbol({ key: '3', value: "/Overlay/Three.gif", name: "3" })
            , new APRSSymbol({ key: '4', value: "/Overlay/Four.gif", name: "4" })
            , new APRSSymbol({ key: '5', value: "/Overlay/Five.gif", name: "5" })
            , new APRSSymbol({ key: '6', value: "/Overlay/Six.gif", name: "6" })
            , new APRSSymbol({ key: '7', value: "/Overlay/Seven.gif", name: "7" })
            , new APRSSymbol({ key: '8', value: "/Overlay/Eight.gif", name: "8" })
            , new APRSSymbol({ key: '9', value: "/Overlay/Nine.gif", name: "9" })
            , new APRSSymbol({ key: 'a', value: "/Overlay/la.gif", name: "a" })
            , new APRSSymbol({ key: 'b', value: "/Overlay/lb.gif", name: "b" })
            , new APRSSymbol({ key: 'c', value: "/Overlay/lc.gif", name: "c" })
            , new APRSSymbol({ key: 'd', value: "/Overlay/ld.gif", name: "d" })
            , new APRSSymbol({ key: 'e', value: "/Overlay/le.gif", name: "e" })
            , new APRSSymbol({ key: 'f', value: "/Overlay/lf.gif", name: "f" })
            , new APRSSymbol({ key: 'g', value: "/Overlay/lg.gif", name: "g" })
            , new APRSSymbol({ key: 'h', value: "/Overlay/lh.gif", name: "h" })
            , new APRSSymbol({ key: 'i', value: "/Overlay/li.gif", name: "i" })
            , new APRSSymbol({ key: 'j', value: "/Overlay/lj.gif", name: "j" })
            , new APRSSymbol({ key: 'k', value: "/Overlay/lk.gif", name: "k" })
            , new APRSSymbol({ key: 'l', value: "/Overlay/ll.gif", name: "l" })
            , new APRSSymbol({ key: 'm', value: "/Overlay/lm.gif", name: "m" })
            , new APRSSymbol({ key: 'n', value: "/Overlay/ln.gif", name: "n" })
            , new APRSSymbol({ key: 'o', value: "/Overlay/lo.gif", name: "o" })
            , new APRSSymbol({ key: 'p', value: "/Overlay/lp.gif", name: "p" })
            , new APRSSymbol({ key: 'q', value: "/Overlay/lq.gif", name: "q" })
            , new APRSSymbol({ key: 'r', value: "/Overlay/lr.gif", name: "r" })
            , new APRSSymbol({ key: 's', value: "/Overlay/ls.gif", name: "s" })
            , new APRSSymbol({ key: 't', value: "/Overlay/lt.gif", name: "t" })
            , new APRSSymbol({ key: 'u', value: "/Overlay/lu.gif", name: "u" })
            , new APRSSymbol({ key: 'v', value: "/Overlay/lv.gif", name: "v" })
            , new APRSSymbol({ key: 'w', value: "/Overlay/lw.gif", name: "w" })
            , new APRSSymbol({ key: 'x', value: "/Overlay/lx.gif", name: "x" })
            , new APRSSymbol({ key: 'y', value: "/Overlay/ly.gif", name: "y" })
            , new APRSSymbol({ key: 'z', value: "/Overlay/lz.gif", name: "z" })
            , new APRSSymbol({ key: 'A', value: "/Overlay/A.gif", name: "A" })
            , new APRSSymbol({ key: 'B', value: "/Overlay/B.gif", name: "B" })
            , new APRSSymbol({ key: 'C', value: "/Overlay/C.gif", name: "C" })
            , new APRSSymbol({ key: 'D', value: "/Overlay/D.gif", name: "D" })
            , new APRSSymbol({ key: 'E', value: "/Overlay/E.gif", name: "E" })
            , new APRSSymbol({ key: 'F', value: "/Overlay/F.gif", name: "F" })
            , new APRSSymbol({ key: 'G', value: "/Overlay/G.gif", name: "G" })
            , new APRSSymbol({ key: 'H', value: "/Overlay/H.gif", name: "H" })
            , new APRSSymbol({ key: 'I', value: "/Overlay/I.gif", name: "I" })
            , new APRSSymbol({ key: 'J', value: "/Overlay/J.gif", name: "J" })
            , new APRSSymbol({ key: 'K', value: "/Overlay/K.gif", name: "K" })
            , new APRSSymbol({ key: 'L', value: "/Overlay/L.gif", name: "L" })
            , new APRSSymbol({ key: 'M', value: "/Overlay/M.gif", name: "M" })
            , new APRSSymbol({ key: 'N', value: "/Overlay/N.gif", name: "N" })
            , new APRSSymbol({ key: 'O', value: "/Overlay/O.gif", name: "O" })
            , new APRSSymbol({ key: 'P', value: "/Overlay/P.gif", name: "P" })
            , new APRSSymbol({ key: 'Q', value: "/Overlay/Q.gif", name: "Q" })
            , new APRSSymbol({ key: 'R', value: "/Overlay/R.gif", name: "R" })
            , new APRSSymbol({ key: 'S', value: "/Overlay/S.gif", name: "S" })
            , new APRSSymbol({ key: 'T', value: "/Overlay/T.gif", name: "T" })
            , new APRSSymbol({ key: 'U', value: "/Overlay/U.gif", name: "U" })
            , new APRSSymbol({ key: 'V', value: "/Overlay/V.gif", name: "V" })
            , new APRSSymbol({ key: 'W', value: "/Overlay/W.gif", name: "W" })
            , new APRSSymbol({ key: 'X', value: "/Overlay/X.gif", name: "X" })
            , new APRSSymbol({ key: 'Y', value: "/Overlay/Y.gif", name: "Y" })
            , new APRSSymbol({ key: 'Z', value: "/Overlay/Z.gif", name: "Z" })
            , new APRSSymbol({ key: '!', value: "/Overlay/Exclamation.gif", name: "!" })
            , new APRSSymbol({ key: '"', value: "/Overlay/dQuote.gif", name: '"' })
            , new APRSSymbol({ key: '#', value: "/Overlay/hash.gif", name: "#" })
            , new APRSSymbol({ key: '$', value: "/Overlay/dollar.gif", name: "$" })
            , new APRSSymbol({ key: '%', value: "/Overlay/pct.gif", name: "%" })
            , new APRSSymbol({ key: '&', value: "/Overlay/amp.gif", name: "&" })
            , new APRSSymbol({ key: '\'', value: "/Overlay/sQuote.gif", name: "\'" })
            , new APRSSymbol({ key: '(', value: "/Overlay/oParen.gif", name: "(" })
            , new APRSSymbol({ key: ')', value: "/Overlay/cParen.gif", name: ")" })
            , new APRSSymbol({ key: '*', value: "/Overlay/asterisk.gif", name: "*" })
            , new APRSSymbol({ key: '+', value: "/Overlay/plus.gif", name: "+" })
            , new APRSSymbol({ key: ',', value: "/Overlay/comma.gif", name: "," })
            , new APRSSymbol({ key: '-', value: "/Overlay/dash.gif", name: "-" })
            , new APRSSymbol({ key: '.', value: "/Overlay/period.gif", name: "." })
            , new APRSSymbol({ key: '/', value: "/Overlay/fSlash.gif", name: "/" })
            , new APRSSymbol({ key: ':', value: "/Overlay/colon.gif", name: ":" })
            , new APRSSymbol({ key: ';', value: "/Overlay/sColon.gif", name: ";" })
            , new APRSSymbol({ key: '<', value: "/Overlay/oaBracket.gif", name: "<" })
            , new APRSSymbol({ key: '=', value: "/Overlay/equal.gif", name: "=" })
            , new APRSSymbol({ key: '>', value: "/Overlay/caBracket.gif", name: ">" })
            , new APRSSymbol({ key: '?', value: "/Overlay/question.gif", name: "?" })
            , new APRSSymbol({ key: '@', value: "/Overlay/at.gif", name: "@"})
            , new APRSSymbol({ key: '[', value: "/Overlay/osBracket.gif", name: "[" })
            , new APRSSymbol({ key: '\\', value: "/Overlay/bSlash.gif", name: "\\" })
            , new APRSSymbol({ key: ']', value: "/Overlay/csBracket.gif", name: "]" })
            , new APRSSymbol({ key: '^', value: "/Overlay/caret.gif", name: "^" })
            , new APRSSymbol({ key: '_', value: "/Overlay/underscore.gif", name: "_" })
            , new APRSSymbol({ key: '`', value: "/Overlay/grave.gif", name: "`" })
            , new APRSSymbol({ key: '{', value: "/Overlay/oBracket.gif", name: "{" })
            , new APRSSymbol({ key: '|', value: "/Overlay/pipe.gif", name: "|" })
            , new APRSSymbol({ key: '}', value: "/Overlay/cBracket.gif", name: "}" })
            , new APRSSymbol({ key: '~', value: "/Overlay/tilde.gif", name: "~" })
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

    public GetOverlays(): APRSSymbol[] {
        return this.overlays;
    }

    public GetSymbols(): APRSSymbol[] {
        return this.symbols
    }

    public GetSymbolByKey(key: string): APRSSymbol {
        return this.symbols.find(x => x.key == key);
    }
}