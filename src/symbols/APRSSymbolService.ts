/// <reference types="../../typings/gif" />
import { APRSSymbol } from './APRSSymbol';
import { StringUtil } from '../util/StringUtil';

// Icons
import crosshair from '../../resources/images/symbols/Crosshair.gif';

// Primary Table Icons
import PD from '../../resources/images/symbols/PrimaryTable/PD.gif';
import Digipeater1 from '../../resources/images/symbols/PrimaryTable/Digipeater1.gif';
import Phone from '../../resources/images/symbols/PrimaryTable/Phone.gif';
import DX from '../../resources/images/symbols/PrimaryTable/DX.gif';
import Gateway from '../../resources/images/symbols/PrimaryTable/Gateway.gif';
import SmallAircraft from '../../resources/images/symbols/PrimaryTable/SmallAircraft.gif';
import MobileSatteliteStation from '../../resources/images/symbols/PrimaryTable/MobileSatteliteStation.gif';
import Wheelchair from '../../resources/images/symbols/PrimaryTable/Wheelchair.gif';
import Snowmobile from '../../resources/images/symbols/PrimaryTable/Snowmobile.gif';
import RedCross from '../../resources/images/symbols/PrimaryTable/RedCross.gif';
import BoyScout from '../../resources/images/symbols/PrimaryTable/BoyScout.gif';
import House from '../../resources/images/symbols/PrimaryTable/House.gif';
import RedX from '../../resources/images/symbols/PrimaryTable/RedX.gif';
import RedDot from '../../resources/images/symbols/PrimaryTable/RedDot.gif';
import Circle from '../../resources/images/symbols/PrimaryTable/Circle.gif';
import Circle1 from '../../resources/images/symbols/PrimaryTable/Circle1.gif';
import Circle2 from '../../resources/images/symbols/PrimaryTable/Circle2.gif';
import Circle3 from '../../resources/images/symbols/PrimaryTable/Circle3.gif';
import Circle4 from '../../resources/images/symbols/PrimaryTable/Circle4.gif';
import Circle5 from '../../resources/images/symbols/PrimaryTable/Circle5.gif';
import Circle6 from '../../resources/images/symbols/PrimaryTable/Circle6.gif';
import Circle7 from '../../resources/images/symbols/PrimaryTable/Circle7.gif';
import Circle8 from '../../resources/images/symbols/PrimaryTable/Circle8.gif';
import Circle9 from '../../resources/images/symbols/PrimaryTable/Circle9.gif';
import Fire from '../../resources/images/symbols/PrimaryTable/Fire.gif';
import Campground from '../../resources/images/symbols/PrimaryTable/Campground.gif';
import Motorcycle from '../../resources/images/symbols/PrimaryTable/Motorcycle.gif';
import TrainEngine from '../../resources/images/symbols/PrimaryTable/TrainEngine.gif';
import Car from '../../resources/images/symbols/PrimaryTable/Car.gif';
import FileServer from '../../resources/images/symbols/PrimaryTable/FileServer.gif';
import HurricaneFuturePrediction from '../../resources/images/symbols/PrimaryTable/HurricaneFuturePrediction.gif';
import AidStation from '../../resources/images/symbols/PrimaryTable/AidStation.gif';
import BullitenSystem from '../../resources/images/symbols/PrimaryTable/BullitenSystem.gif';
import Canoe from '../../resources/images/symbols/PrimaryTable/Canoe.gif';
import Eye from '../../resources/images/symbols/PrimaryTable/Eye.gif';
import FarmEquipment from '../../resources/images/symbols/PrimaryTable/FarmEquipment.gif';
import GridSquare from '../../resources/images/symbols/PrimaryTable/GridSquare.gif';
import Hotel from '../../resources/images/symbols/PrimaryTable/Hotel.gif';
import TCPIPOnAirNetwork from '../../resources/images/symbols/PrimaryTable/TCPIPOnAirNetwork.gif';
import School from '../../resources/images/symbols/PrimaryTable/School.gif';
import PCUser from '../../resources/images/symbols/PrimaryTable/PCUser.gif';
import MacAprs from '../../resources/images/symbols/PrimaryTable/MacAprs.gif';
import NationalTrafficStation from '../../resources/images/symbols/PrimaryTable/NationalTrafficStation.gif';
import Balloon from '../../resources/images/symbols/PrimaryTable/Balloon.gif';
import Police from '../../resources/images/symbols/PrimaryTable/Police.gif';
import Quake from '../../resources/images/symbols/PrimaryTable/Quake.gif';
import RV from '../../resources/images/symbols/PrimaryTable/RV.gif';
import Shuttle from '../../resources/images/symbols/PrimaryTable/Shuttle.gif';
import SSTV from '../../resources/images/symbols/PrimaryTable/SSTV.gif';
import Bus from '../../resources/images/symbols/PrimaryTable/Bus.gif';
import ATV from '../../resources/images/symbols/PrimaryTable/ATV.gif';
import NationalWeatherService from '../../resources/images/symbols/PrimaryTable/NationalWeatherService.gif';
import Helicopter from '../../resources/images/symbols/PrimaryTable/Helicopter.gif';
import Yacht from '../../resources/images/symbols/PrimaryTable/Yacht.gif';
import WinAprs from '../../resources/images/symbols/PrimaryTable/WinAprs.gif';
import Person from '../../resources/images/symbols/PrimaryTable/Person.gif';
import DFStation from '../../resources/images/symbols/PrimaryTable/DFStation.gif';
import PostOffice from '../../resources/images/symbols/PrimaryTable/PostOffice.gif';
import LargeAircraft from '../../resources/images/symbols/PrimaryTable/LargeAircraft.gif';
import WeatherStation from '../../resources/images/symbols/PrimaryTable/WeatherStation.gif';
import DishAntenna from '../../resources/images/symbols/PrimaryTable/DishAntenna.gif';
import Ambulance from '../../resources/images/symbols/PrimaryTable/Ambulance.gif';
import Bicycle from '../../resources/images/symbols/PrimaryTable/Bicycle.gif';
import IncidentCommandPost from '../../resources/images/symbols/PrimaryTable/IncidentCommandPost.gif';
import Firehouse from '../../resources/images/symbols/PrimaryTable/Firehouse.gif';
import Horse from '../../resources/images/symbols/PrimaryTable/Horse.gif';
import FireTruck from '../../resources/images/symbols/PrimaryTable/FireTruck.gif';
import Glider from '../../resources/images/symbols/PrimaryTable/Glider.gif';
import Hospital from '../../resources/images/symbols/PrimaryTable/Hospital.gif';
import IslandsOnTheAir from '../../resources/images/symbols/PrimaryTable/IslandsOnTheAir.gif';
import Jeep from '../../resources/images/symbols/PrimaryTable/Jeep.gif';
import Truck from '../../resources/images/symbols/PrimaryTable/Truck.gif';
import Laptop from '../../resources/images/symbols/PrimaryTable/Laptop.gif';
import MicERepeater from '../../resources/images/symbols/PrimaryTable/MicERepeater.gif';
import Node from '../../resources/images/symbols/PrimaryTable/Node.gif';
import EOC from '../../resources/images/symbols/PrimaryTable/EOC.gif';
import Dog from '../../resources/images/symbols/PrimaryTable/Dog.gif';
import GridSquare2 from '../../resources/images/symbols/PrimaryTable/GridSquare2.gif';
import Repeater from '../../resources/images/symbols/PrimaryTable/Repeater.gif';
import Boat from '../../resources/images/symbols/PrimaryTable/Boat.gif';
import TruckStop from '../../resources/images/symbols/PrimaryTable/TruckStop.gif';
import SemiTruck from '../../resources/images/symbols/PrimaryTable/SemiTruck.gif';
import Van from '../../resources/images/symbols/PrimaryTable/Van.gif';
import WaterStation from '../../resources/images/symbols/PrimaryTable/WaterStation.gif';
import Xastir from '../../resources/images/symbols/PrimaryTable/Xastir.gif';
import HouseWithYagi from '../../resources/images/symbols/PrimaryTable/HouseWithYagi.gif';
import TBD from '../../resources/images/symbols/PrimaryTable/TBD.gif';
import TNCStreamSwitch from '../../resources/images/symbols/PrimaryTable/TNCStreamSwitch.gif';
import TNCStreamSwitch1 from '../../resources/images/symbols/PrimaryTable/TNCStreamSwitch1.gif';

// Alternate Symbols
import Emergency from '../../resources/images/symbols/AlternateTable/Emergency.gif';
import Digipeater from '../../resources/images/symbols/AlternateTable/Digipeater.gif';
import Bank from '../../resources/images/symbols/AlternateTable/Bank.gif';
import BlackDiamond from '../../resources/images/symbols/AlternateTable/BlackDiamond.gif';
import CrashSite from '../../resources/images/symbols/AlternateTable/CrashSite.gif';
import Cloudy from '../../resources/images/symbols/AlternateTable/Cloudy.gif';
import Firenet from '../../resources/images/symbols/AlternateTable/Firenet.gif';
import Snow from '../../resources/images/symbols/AlternateTable/Snow.gif';
import Church from '../../resources/images/symbols/AlternateTable/Church.gif';
import GirlScout from '../../resources/images/symbols/AlternateTable/GirlScout.gif';
import HouseHF from '../../resources/images/symbols/AlternateTable/HouseHF.gif';
import Ambiguous from '../../resources/images/symbols/AlternateTable/Ambiguous.gif';
import Waypoint from '../../resources/images/symbols/AlternateTable/Waypoint.gif';
import GasStation from '../../resources/images/symbols/AlternateTable/GasStation.gif';
import Hail from '../../resources/images/symbols/AlternateTable/Hail.gif';
import Park from '../../resources/images/symbols/AlternateTable/Park.gif';
import WeatherFlag from '../../resources/images/symbols/AlternateTable/WeatherFlag.gif';
import AltCar from '../../resources/images/symbols/AlternateTable/AltCar.gif';
import InfoKiosk from '../../resources/images/symbols/AlternateTable/InfoKiosk.gif';
import Hurricane from '../../resources/images/symbols/AlternateTable/Hurricane.gif';
import OverlayBox from '../../resources/images/symbols/AlternateTable/OverlayBox.gif';
import BlowingSnow from '../../resources/images/symbols/AlternateTable/BlowingSnow.gif';
import CoastGuard from '../../resources/images/symbols/AlternateTable/CoastGuard.gif';
import Drizzle from '../../resources/images/symbols/AlternateTable/Drizzle.gif';
import Smoke from '../../resources/images/symbols/AlternateTable/Smoke.gif';
import FreezingRain from '../../resources/images/symbols/AlternateTable/FreezingRain.gif';
import SnowShower from '../../resources/images/symbols/AlternateTable/SnowShower.gif';
import Haze from '../../resources/images/symbols/AlternateTable/Haze.gif';
import RainShower from '../../resources/images/symbols/AlternateTable/RainShower.gif';
import Lightning from '../../resources/images/symbols/AlternateTable/Lightning.gif';
import KenwoodHT from '../../resources/images/symbols/AlternateTable/KenwoodHT.gif';
import Lighthouse from '../../resources/images/symbols/AlternateTable/Lighthouse.gif';
import Bouy from '../../resources/images/symbols/AlternateTable/Bouy.gif';
import Rocket from '../../resources/images/symbols/AlternateTable/Rocket.gif';
import Parking from '../../resources/images/symbols/AlternateTable/Parking.gif';
import Earthquake from '../../resources/images/symbols/AlternateTable/Earthquake.gif';
import Restaurant from '../../resources/images/symbols/AlternateTable/Restaurant.gif';
import Satellite from '../../resources/images/symbols/AlternateTable/Satellite.gif';
import Thunderstorm from '../../resources/images/symbols/AlternateTable/Thunderstorm.gif';
import Sunny from '../../resources/images/symbols/AlternateTable/Sunny.gif';
import VORTAC from '../../resources/images/symbols/AlternateTable/VORTAC.gif';
import NWSSite from '../../resources/images/symbols/AlternateTable/NWSSite.gif';
import Pharmacy from '../../resources/images/symbols/AlternateTable/Pharmacy.gif';
import Wallcloud from '../../resources/images/symbols/AlternateTable/Wallcloud.gif';
import Aircraft from '../../resources/images/symbols/AlternateTable/Aircraft.gif';
import WXSite from '../../resources/images/symbols/AlternateTable/WXSite.gif';
import Rain from '../../resources/images/symbols/AlternateTable/Rain.gif';
import ARRL from '../../resources/images/symbols/AlternateTable/ARRL.gif';
import BlowingSand from '../../resources/images/symbols/AlternateTable/BlowingSand.gif';
import CDTriangle from '../../resources/images/symbols/AlternateTable/CDTriangle.gif';
import DXSpot from '../../resources/images/symbols/AlternateTable/DXSpot.gif';
import Sleet from '../../resources/images/symbols/AlternateTable/Sleet.gif';
import FunnelCloud from '../../resources/images/symbols/AlternateTable/FunnelCloud.gif';
import GaleFlags from '../../resources/images/symbols/AlternateTable/GaleFlags.gif';
import HamStore from '../../resources/images/symbols/AlternateTable/HamStore.gif';
import POIBox from '../../resources/images/symbols/AlternateTable/POIBox.gif';
import WorkZone from '../../resources/images/symbols/AlternateTable/WorkZone.gif';
import SpecialVehicle from '../../resources/images/symbols/AlternateTable/SpecialVehicle.gif';
import ValueSign from '../../resources/images/symbols/AlternateTable/ValueSign.gif';
import OverlayTriangle from '../../resources/images/symbols/AlternateTable/OverlayTriangle.gif';
import SmallCircle from '../../resources/images/symbols/AlternateTable/SmallCircle.gif';
import PartlyCloudy from '../../resources/images/symbols/AlternateTable/PartlyCloudy.gif';
import Restrooms from '../../resources/images/symbols/AlternateTable/Restrooms.gif';
import AltBoat from '../../resources/images/symbols/AlternateTable/Boat.gif';
import Tornado from '../../resources/images/symbols/AlternateTable/Tornado.gif';
import AltTruck from '../../resources/images/symbols/AlternateTable/AltTruck.gif';
import AltVan from '../../resources/images/symbols/AlternateTable/AltVan.gif';
import Flood from '../../resources/images/symbols/AlternateTable/Flood.gif';
import Obstruction from '../../resources/images/symbols/AlternateTable/Obstruction.gif';
import Skywarn from '../../resources/images/symbols/AlternateTable/Skywarn.gif';
import Shelter from '../../resources/images/symbols/AlternateTable/Shelter.gif';
import Fog from '../../resources/images/symbols/AlternateTable/Fog.gif';
import TNCSwitchStream1 from '../../resources/images/symbols/AlternateTable/TNCSwitchStream1.gif';
import TNCSwitchStream2 from '../../resources/images/symbols/AlternateTable/TNCSwitchStream2.gif';

// Overlays
import Zero from '../../resources/images/symbols/Overlay/Zero.gif';
import One from '../../resources/images/symbols/Overlay/One.gif';
import Two from '../../resources/images/symbols/Overlay/Two.gif';
import Three from '../../resources/images/symbols/Overlay/Three.gif';
import Four from '../../resources/images/symbols/Overlay/Four.gif';
import Five from '../../resources/images/symbols/Overlay/Five.gif';
import Six from '../../resources/images/symbols/Overlay/Six.gif';
import Seven from '../../resources/images/symbols/Overlay/Seven.gif';
import Eight from '../../resources/images/symbols/Overlay/Eight.gif';
import Nine from '../../resources/images/symbols/Overlay/Nine.gif';
import la from '../../resources/images/symbols/Overlay/la.gif';
import lb from '../../resources/images/symbols/Overlay/lb.gif';
import lc from '../../resources/images/symbols/Overlay/lc.gif';
import ld from '../../resources/images/symbols/Overlay/ld.gif';
import le from '../../resources/images/symbols/Overlay/le.gif';
import lf from '../../resources/images/symbols/Overlay/lf.gif';
import lg from '../../resources/images/symbols/Overlay/lg.gif';
import lh from '../../resources/images/symbols/Overlay/lh.gif';
import li from '../../resources/images/symbols/Overlay/li.gif';
import lj from '../../resources/images/symbols/Overlay/lj.gif';
import lk from '../../resources/images/symbols/Overlay/lk.gif';
import ll from '../../resources/images/symbols/Overlay/ll.gif';
import lm from '../../resources/images/symbols/Overlay/lm.gif';
import ln from '../../resources/images/symbols/Overlay/ln.gif';
import lo from '../../resources/images/symbols/Overlay/lo.gif';
import lp from '../../resources/images/symbols/Overlay/lp.gif';
import lq from '../../resources/images/symbols/Overlay/lq.gif';
import lr from '../../resources/images/symbols/Overlay/lr.gif';
import ls from '../../resources/images/symbols/Overlay/ls.gif';
import lt from '../../resources/images/symbols/Overlay/lt.gif';
import lu from '../../resources/images/symbols/Overlay/lu.gif';
import lv from '../../resources/images/symbols/Overlay/lv.gif';
import lw from '../../resources/images/symbols/Overlay/lw.gif';
import lx from '../../resources/images/symbols/Overlay/lx.gif';
import ly from '../../resources/images/symbols/Overlay/ly.gif';
import lz from '../../resources/images/symbols/Overlay/lz.gif';
import A from '../../resources/images/symbols/Overlay/A.gif';
import B from '../../resources/images/symbols/Overlay/B.gif';
import C from '../../resources/images/symbols/Overlay/C.gif';
import D from '../../resources/images/symbols/Overlay/D.gif';
import E from '../../resources/images/symbols/Overlay/E.gif';
import F from '../../resources/images/symbols/Overlay/F.gif';
import G from '../../resources/images/symbols/Overlay/G.gif';
import H from '../../resources/images/symbols/Overlay/H.gif';
import I from '../../resources/images/symbols/Overlay/I.gif';
import J from '../../resources/images/symbols/Overlay/J.gif';
import K from '../../resources/images/symbols/Overlay/K.gif';
import L from '../../resources/images/symbols/Overlay/L.gif';
import M from '../../resources/images/symbols/Overlay/M.gif';
import N from '../../resources/images/symbols/Overlay/N.gif';
import O from '../../resources/images/symbols/Overlay/O.gif';
import P from '../../resources/images/symbols/Overlay/P.gif';
import Q from '../../resources/images/symbols/Overlay/Q.gif';
import R from '../../resources/images/symbols/Overlay/R.gif';
import S from '../../resources/images/symbols/Overlay/S.gif';
import T from '../../resources/images/symbols/Overlay/T.gif';
import U from '../../resources/images/symbols/Overlay/U.gif';
import V from '../../resources/images/symbols/Overlay/V.gif';
import W from '../../resources/images/symbols/Overlay/W.gif';
import X from '../../resources/images/symbols/Overlay/X.gif';
import Y from '../../resources/images/symbols/Overlay/Y.gif';
import Z from '../../resources/images/symbols/Overlay/Z.gif';
import Exclamation from '../../resources/images/symbols/Overlay/Exclamation.gif';
import dQuote from '../../resources/images/symbols/Overlay/dQuote.gif';
import hash from '../../resources/images/symbols/Overlay/hash.gif';
import dollar from '../../resources/images/symbols/Overlay/dollar.gif';
import pct from '../../resources/images/symbols/Overlay/pct.gif';
import amp from '../../resources/images/symbols/Overlay/amp.gif';
import sQuote from '../../resources/images/symbols/Overlay/sQuote.gif';
import oParen from '../../resources/images/symbols/Overlay/oParen.gif';
import cParen from '../../resources/images/symbols/Overlay/cParen.gif';
import asterisk from '../../resources/images/symbols/Overlay/asterisk.gif';
import plus from '../../resources/images/symbols/Overlay/plus.gif';
import comma from '../../resources/images/symbols/Overlay/comma.gif';
import dash from '../../resources/images/symbols/Overlay/dash.gif';
import period from '../../resources/images/symbols/Overlay/period.gif';
import fSlash from '../../resources/images/symbols/Overlay/fSlash.gif';
import colon from '../../resources/images/symbols/Overlay/colon.gif';
import sColon from '../../resources/images/symbols/Overlay/sColon.gif';
import oaBracket from '../../resources/images/symbols/Overlay/oaBracket.gif';
import equal from '../../resources/images/symbols/Overlay/equal.gif';
import caBracket from '../../resources/images/symbols/Overlay/caBracket.gif';
import question from '../../resources/images/symbols/Overlay/question.gif';
import at from '../../resources/images/symbols/Overlay/at.gif';
import osBracket from '../../resources/images/symbols/Overlay/osBracket.gif';
import bSlash from '../../resources/images/symbols/Overlay/bSlash.gif';
import csBracket from '../../resources/images/symbols/Overlay/csBracket.gif';
import caret from '../../resources/images/symbols/Overlay/caret.gif';
import underscore from '../../resources/images/symbols/Overlay/underscore.gif';
import grave from '../../resources/images/symbols/Overlay/grave.gif';
import oBracket from '../../resources/images/symbols/Overlay/oBracket.gif';
import pipe from '../../resources/images/symbols/Overlay/pipe.gif';
import cBracket from '../../resources/images/symbols/Overlay/cBracket.gif';
import tilde from '../../resources/images/symbols/Overlay/tilde.gif';

interface IAPRSSymbolService {
    symbols: APRSSymbol[];
    overlays: APRSSymbol[];

    GetAPRSSymbol(symbolCode: string, symbolTableId?: string): any;
}

/**
 * Defines a set of symbols to be used as defined in chapter 20 of the APRS spec.
 */
export class APRSSymbolService implements IAPRSSymbolService {
    public symbols: APRSSymbol[];
    public overlays: APRSSymbol[];

    // TODO: allow user to define their own default?
    private readonly CROSSHAIR = new APRSSymbol({
        key: ''
        , value: crosshair
        , name: "Crosshair"
    });

    constructor() {
        this.symbols = [
              new APRSSymbol({ key: "/!", value: PD, name: "Police Department" })
            , new APRSSymbol({ key: '/#', value: Digipeater1, name: "Digipeater" })
            , new APRSSymbol({ key: '/$', value: Phone, name: "Phone" })
            , new APRSSymbol({ key: '/%', value: DX, name: "DX Station" })
            , new APRSSymbol({ key: '/&', value: Gateway, name: "Gateway" })
            , new APRSSymbol({ key: '/\'', value: SmallAircraft, name: "Small Aircraft" })
            , new APRSSymbol({ key: '/(', value: MobileSatteliteStation, name: "Mobile Sattelite Station" })
            , new APRSSymbol({ key: '/)', value: Wheelchair, name: "Wheelchair" })
            , new APRSSymbol({ key: '/*', value: Snowmobile, name: "Snow Mobile" })
            , new APRSSymbol({ key: '/+', value: RedCross, name: "Red Cross" })
            , new APRSSymbol({ key: '/,', value: BoyScout, name: "Boy Scouts" })
            , new APRSSymbol({ key: '/-', value: House, name: "House" })
            , new APRSSymbol({ key: '/.', value: RedX, name: "X" })
            , new APRSSymbol({ key: '//', value: RedDot, name: "Dot" })
            , new APRSSymbol({ key: '/0', value: Circle, name: "Circle 0" })
            , new APRSSymbol({ key: '/1', value: Circle1, name: "Circle 1" })
            , new APRSSymbol({ key: '/2', value: Circle2, name: "Circle 2" })
            , new APRSSymbol({ key: '/3', value: Circle3, name: "Circle 3" })
            , new APRSSymbol({ key: '/4', value: Circle4, name: "Circle 4" })
            , new APRSSymbol({ key: '/5', value: Circle5, name: "Circle 5" })
            , new APRSSymbol({ key: '/6', value: Circle6, name: "Circle 6" })
            , new APRSSymbol({ key: '/7', value: Circle7, name: "Circle 7" })
            , new APRSSymbol({ key: '/8', value: Circle8, name: "Circle 8" })
            , new APRSSymbol({ key: '/9', value: Circle9, name: "Circle 9" })
            , new APRSSymbol({ key: '/:', value: Fire, name: "Fire" })
            , new APRSSymbol({ key: '/;', value: Campground, name: "Campground" })
            , new APRSSymbol({ key: '/<', value: Motorcycle, name: "Motorcycle" })
            , new APRSSymbol({ key: '/=', value: TrainEngine, name: "Train" })
            , new APRSSymbol({ key: '/>', value: Car, name: "Car" })
            , new APRSSymbol({ key: '/?', value: FileServer, name: "File Server" })
            , new APRSSymbol({ key: '/@', value: HurricaneFuturePrediction, name: "Hurricane Future Prediction" })
            , new APRSSymbol({ key: '/A', value: AidStation, name: "Aid Station" })
            , new APRSSymbol({ key: '/B', value: BullitenSystem, name: "Bulliten System" })
            , new APRSSymbol({ key: '/C', value: Canoe, name: "Canoe" })
            , new APRSSymbol({ key: '/E', value: Eye, name: "Eye" })
            , new APRSSymbol({ key: '/F', value: FarmEquipment, name: "Farm Equipment" })
            , new APRSSymbol({ key: '/G', value: GridSquare, name: "Grid Square" })
            , new APRSSymbol({ key: '/H', value: Hotel, name: "Hotel" })
            , new APRSSymbol({ key: '/I', value: TCPIPOnAirNetwork, name: "TCPIP On Air Network" })
            , new APRSSymbol({ key: '/K', value: School, name: "School" })
            , new APRSSymbol({ key: '/L', value: PCUser, name: "PC User" })
            , new APRSSymbol({ key: '/M', value: MacAprs, name: "Mac APRS" })
            , new APRSSymbol({ key: '/N', value: NationalTrafficStation, name: "National Traffic Station" })
            , new APRSSymbol({ key: '/O', value: Balloon, name: "Balloon" })
            , new APRSSymbol({ key: '/P', value: Police, name: "Pilice" })
            , new APRSSymbol({ key: '/Q', value: Quake, name: "Earthquake" }) // TBD?
            , new APRSSymbol({ key: '/R', value: RV, name: "RV" })
            , new APRSSymbol({ key: '/S', value: Shuttle, name: "Shuttle" })
            , new APRSSymbol({ key: '/T', value: SSTV, name: "SSTV" })
            , new APRSSymbol({ key: '/U', value: Bus, name: "Bus" })
            , new APRSSymbol({ key: '/V', value: ATV, name: "ATV" })    // TODO: Find out what this really stands for
            , new APRSSymbol({ key: '/W', value: NationalWeatherService, name: "NWS" })
            , new APRSSymbol({ key: '/X', value: Helicopter, name: "Helicopter" })
            , new APRSSymbol({ key: '/Y', value: Yacht, name: "Yacht" })
            , new APRSSymbol({ key: '/Z', value: WinAprs, name: "Win APRS" })
            , new APRSSymbol({ key: '/[', value: Person, name: "Person" })
            , new APRSSymbol({ key: '/\\', value: DFStation, name: "DF Station" })
            , new APRSSymbol({ key: '/]', value: PostOffice, name: "Post Office" })
            , new APRSSymbol({ key: '/^', value: LargeAircraft, name: "Large Aircraft" })
            , new APRSSymbol({ key: '/_', value: WeatherStation, name: "Weather Station" })
            , new APRSSymbol({ key: '/`', value: DishAntenna, name: "Dish Antenna" })
            , new APRSSymbol({ key: '/a', value: Ambulance, name: "Ambulance" })
            , new APRSSymbol({ key: '/b', value: Bicycle, name: "Bicycle" })
            , new APRSSymbol({ key: '/c', value: IncidentCommandPost, name: "Incident Command Post" })
            , new APRSSymbol({ key: '/d', value: Firehouse, name: "Firehouse" })
            , new APRSSymbol({ key: '/e', value: Horse, name: "Horse" })
            , new APRSSymbol({ key: '/f', value: FireTruck, name: "Fire Truck" })
            , new APRSSymbol({ key: '/g', value: Glider, name: "Glider" })
            , new APRSSymbol({ key: '/h', value: Hospital, name: "Hospital" })
            , new APRSSymbol({ key: '/i', value: IslandsOnTheAir, name: "Islands on the Air" })
            , new APRSSymbol({ key: '/j', value: Jeep, name: "Jeep" })
            , new APRSSymbol({ key: '/k', value: Truck, name: "Truck" })
            , new APRSSymbol({ key: '/l', value: Laptop, name: "Laptop" })
            , new APRSSymbol({ key: '/m', value: MicERepeater, name: "Mic E Repeater" })
            , new APRSSymbol({ key: '/n', value: Node, name: "Node" })
            , new APRSSymbol({ key: '/o', value: EOC, name: "EOC" })
            , new APRSSymbol({ key: '/p', value: Dog, name: "Dog" })
            , new APRSSymbol({ key: '/q', value: GridSquare2, name: "Gridsquare" })
            , new APRSSymbol({ key: '/r', value: Repeater, name: "Repeater" })
            , new APRSSymbol({ key: '/s', value: Boat, name: "Boat" })
            , new APRSSymbol({ key: '/t', value: TruckStop, name: "Truck Stop" })
            , new APRSSymbol({ key: '/u', value: SemiTruck, name: "Semi Truck" })
            , new APRSSymbol({ key: '/v', value: Van, name: "Van" })
            , new APRSSymbol({ key: '/w', value: WaterStation, name: "Water Station" })
            , new APRSSymbol({ key: '/x', value: Xastir, name: "Xastir" })
            , new APRSSymbol({ key: '/y', value: HouseWithYagi, name: "House with Yagi" })
            , new APRSSymbol({ key: '/z', value: TBD, name: "TBD" })
            , new APRSSymbol({ key: '/|', value: TNCStreamSwitch, name: "TNC Strem Switch" })
            , new APRSSymbol({ key: '/~', value: TNCStreamSwitch1, name: "TNC Strem Switch" })
            // BEGIN ALTERNATE TABLE
            , new APRSSymbol({ key: '!', value: Emergency, name: "Emergency", isAllowOverlay: true })
            , new APRSSymbol({ key: '#', value: Digipeater, name: "Digipeater", isAllowOverlay: true })
            , new APRSSymbol({ key: '$', value: Bank, name: "Bank", isAllowOverlay: true })
            // TODO: Create PowerPlant icon '\\%', value: "/AlternateTable/
            , new APRSSymbol({ key: '&', value: BlackDiamond, name: "Black Diamond", isAllowOverlay: true })
            , new APRSSymbol({ key: '\'', value: CrashSite, name: "Crash Site", isAllowOverlay: true })
            , new APRSSymbol({ key: '(', value: Cloudy, name: "Cloudy", isAllowOverlay: true })
            , new APRSSymbol({ key: ')', value: Firenet, name: "Firenet", isAllowOverlay: true })
            , new APRSSymbol({ key: '*', value: Snow, name: "Snow", isAllowOverlay: true })
            , new APRSSymbol({ key: '+', value: Church, name: "Church", isAllowOverlay: true })
            , new APRSSymbol({ key: ',', value: GirlScout, name: "Girl Scout", isAllowOverlay: true })
            , new APRSSymbol({ key: '-', value: HouseHF, name: "House HF", isAllowOverlay: true })
            , new APRSSymbol({ key: '.', value: Ambiguous, name: "Ambiguous", isAllowOverlay: true })
            , new APRSSymbol({ key: '/', value: Waypoint, name: "Waypoint", isAllowOverlay: true })
            // TODO: ADD 802.11 OR OTHER NETWORK NODE ICON (\8)
            , new APRSSymbol({ key: '9', value: GasStation, name: "Gas Station", isAllowOverlay: true })
            , new APRSSymbol({ key: ':', value: Hail, name: "Hail", isAllowOverlay: true })
            , new APRSSymbol({ key: ';', value: Park, name: "Park", isAllowOverlay: true })
            , new APRSSymbol({ key: '<', value: WeatherFlag, name: "Weather Flag", isAllowOverlay: true })
            // TODO: ADD APRSTT TOUCHTONE (DTMF USERS) ICON (\=)
            , new APRSSymbol({ key: '>', value: AltCar, name: "Car", isAllowOverlay: true })
            , new APRSSymbol({ key: '?', value: InfoKiosk, name: "Info Kiosk", isAllowOverlay: true })
            , new APRSSymbol({ key: '@', value: Hurricane, name: "Hurricane", isAllowOverlay: true })
            , new APRSSymbol({ key: 'A', value: OverlayBox, name: "Overlay Box", isAllowOverlay: true })
            , new APRSSymbol({ key: 'B', value: BlowingSnow, name: "Blowing Snow", isAllowOverlay: true })
            , new APRSSymbol({ key: 'C', value: CoastGuard, name: "Coast Guard", isAllowOverlay: true })
            , new APRSSymbol({ key: 'D', value: Drizzle, name: "Drizzle", isAllowOverlay: true })
            , new APRSSymbol({ key: 'E', value: Smoke, name: "Smoke", isAllowOverlay: true })
            , new APRSSymbol({ key: 'F', value: FreezingRain, name: "Freezing Rain", isAllowOverlay: true })
            , new APRSSymbol({ key: 'G', value: SnowShower, name: "Snow Shower", isAllowOverlay: true })
            , new APRSSymbol({ key: 'H', value: Haze, name: "Haze", isAllowOverlay: true })
            , new APRSSymbol({ key: 'I', value: RainShower, name: "Rain Shower", isAllowOverlay: true })
            , new APRSSymbol({ key: 'J', value: Lightning, name: "Lightning", isAllowOverlay: true })
            , new APRSSymbol({ key: 'K', value: KenwoodHT, name: "Kenwood HT", isAllowOverlay: true })
            , new APRSSymbol({ key: 'L', value: Lighthouse, name: "Lighthouse", isAllowOverlay: true })
            // TODO: ADD MARS ICON (\M)
            , new APRSSymbol({ key: 'N', value: Bouy, name: "Bouy", isAllowOverlay: true })
            , new APRSSymbol({ key: 'O', value: Rocket, name: "Rocket", isAllowOverlay: true })
            , new APRSSymbol({ key: 'P', value: Parking, name: "Parking", isAllowOverlay: true })
            , new APRSSymbol({ key: 'Q', value: Earthquake, name: "Earthquake", isAllowOverlay: true })
            , new APRSSymbol({ key: 'R', value: Restaurant, name: "Restaurant", isAllowOverlay: true })
            , new APRSSymbol({ key: 'S', value: Satellite, name: "Satellite", isAllowOverlay: true })
            , new APRSSymbol({ key: 'T', value: Thunderstorm, name: "Thunderstorm", isAllowOverlay: true })
            , new APRSSymbol({ key: 'U', value: Sunny, name: "Sunny", isAllowOverlay: true })
            , new APRSSymbol({ key: 'V', value: VORTAC, name: "VORTAC", isAllowOverlay: true })
            , new APRSSymbol({ key: 'W', value: NWSSite, name: "NWS Site", isAllowOverlay: true })
            , new APRSSymbol({ key: 'X', value: Pharmacy, name: "Pharmacy", isAllowOverlay: true })
            // TODO: ADD RADIOS AND DEVICES ICON (\Y)
            , new APRSSymbol({ key: '[', value: Wallcloud, name: "Wallcloud", isAllowOverlay: true })
            // TODO: ADD OVERLAYABLE GPS SYMBOL (\\)
            , new APRSSymbol({ key: '^', value: Aircraft, name: "Aircraft", isAllowOverlay: true })
            , new APRSSymbol({ key: '_', value: WXSite, name: "WX Site", isAllowOverlay: true })
            , new APRSSymbol({ key: '`', value: Rain, name: "Rain", isAllowOverlay: true })
            , new APRSSymbol({ key: 'a', value: ARRL, name: "ARRL", isAllowOverlay: true })
            , new APRSSymbol({ key: 'b', value: BlowingSand, name: "Blowing Sand", isAllowOverlay: true })
            , new APRSSymbol({ key: 'c', value: CDTriangle, name: "CD Triangle", isAllowOverlay: true })
            , new APRSSymbol({ key: 'd', value: DXSpot, name: "DX Spot", isAllowOverlay: true })
            , new APRSSymbol({ key: 'e', value: Sleet, name: "Sleet", isAllowOverlay: true })
            , new APRSSymbol({ key: 'f', value: FunnelCloud, name: "Funnel Cloud", isAllowOverlay: true })
            , new APRSSymbol({ key: 'g', value: GaleFlags, name: "Gale Flags", isAllowOverlay: true })
            , new APRSSymbol({ key: 'h', value: HamStore, name: "Ham Store", isAllowOverlay: true })
            , new APRSSymbol({ key: 'i', value: POIBox, name: "POI Box", isAllowOverlay: true })
            , new APRSSymbol({ key: 'j', value: WorkZone, name: "Work Zone", isAllowOverlay: true })
            , new APRSSymbol({ key: 'k', value: SpecialVehicle, name: "Special Vehicle", isAllowOverlay: true })
            // TODO: ADD AREAS ICON (\l)
            , new APRSSymbol({ key: 'm', value: ValueSign, name: "Value Sign", isAllowOverlay: true })
            , new APRSSymbol({ key: 'n', value: OverlayTriangle, name: "Overlay Triangle", isAllowOverlay: true })
            , new APRSSymbol({ key: 'o', value: SmallCircle, name: "Small Circle", isAllowOverlay: true })
            , new APRSSymbol({ key: 'p', value: PartlyCloudy, name: "Partly Cloudy", isAllowOverlay: true })
            , new APRSSymbol({ key: 'r', value: Restrooms, name: "Restrooms", isAllowOverlay: true })
            , new APRSSymbol({ key: 's', value: AltBoat, name: "Boat", isAllowOverlay: true })    // TODO: Make a better graphic
            , new APRSSymbol({ key: 't', value: Tornado, name: "Tornado", isAllowOverlay: true })
            , new APRSSymbol({ key: 'u', value: AltTruck, name: "Truck", isAllowOverlay: true })
            , new APRSSymbol({ key: 'v', value: AltVan, name: "Van", isAllowOverlay: true })
            , new APRSSymbol({ key: 'w', value: Flood, name: "Flood", isAllowOverlay: true })
            , new APRSSymbol({ key: 'x', value: Obstruction, name: "Obstruction", isAllowOverlay: true })
            , new APRSSymbol({ key: 'y', value: Skywarn, name: "Skywarn", isAllowOverlay: true })
            , new APRSSymbol({ key: 'z', value: Shelter, name: "Shelter", isAllowOverlay: true })
            , new APRSSymbol({ key: '{', value: Fog, name: "Fog", isAllowOverlay: true })
            , new APRSSymbol({ key: '|', value: TNCSwitchStream1, name: "TNC Switch Stream 1", isAllowOverlay: true })
            , new APRSSymbol({ key: '~', value: TNCSwitchStream2, name: "TNC Switch Stream 2", isAllowOverlay: true })
        ];

        this.overlays = [
              new APRSSymbol({ key: '0', value: Zero, name: "0" })
            , new APRSSymbol({ key: '1', value: One, name: "1" })
            , new APRSSymbol({ key: '2', value: Two, name: "2" })
            , new APRSSymbol({ key: '3', value: Three, name: "3" })
            , new APRSSymbol({ key: '4', value: Four, name: "4" })
            , new APRSSymbol({ key: '5', value: Five, name: "5" })
            , new APRSSymbol({ key: '6', value: Six, name: "6" })
            , new APRSSymbol({ key: '7', value: Seven, name: "7" })
            , new APRSSymbol({ key: '8', value: Eight, name: "8" })
            , new APRSSymbol({ key: '9', value: Nine, name: "9" })
            , new APRSSymbol({ key: 'a', value: la, name: "a" })
            , new APRSSymbol({ key: 'b', value: lb, name: "b" })
            , new APRSSymbol({ key: 'c', value: lc, name: "c" })
            , new APRSSymbol({ key: 'd', value: ld, name: "d" })
            , new APRSSymbol({ key: 'e', value: le, name: "e" })
            , new APRSSymbol({ key: 'f', value: lf, name: "f" })
            , new APRSSymbol({ key: 'g', value: lg, name: "g" })
            , new APRSSymbol({ key: 'h', value: lh, name: "h" })
            , new APRSSymbol({ key: 'i', value: li, name: "i" })
            , new APRSSymbol({ key: 'j', value: lj, name: "j" })
            , new APRSSymbol({ key: 'k', value: lk, name: "k" })
            , new APRSSymbol({ key: 'l', value: ll, name: "l" })
            , new APRSSymbol({ key: 'm', value: lm, name: "m" })
            , new APRSSymbol({ key: 'n', value: ln, name: "n" })
            , new APRSSymbol({ key: 'o', value: lo, name: "o" })
            , new APRSSymbol({ key: 'p', value: lp, name: "p" })
            , new APRSSymbol({ key: 'q', value: lq, name: "q" })
            , new APRSSymbol({ key: 'r', value: lr, name: "r" })
            , new APRSSymbol({ key: 's', value: ls, name: "s" })
            , new APRSSymbol({ key: 't', value: lt, name: "t" })
            , new APRSSymbol({ key: 'u', value: lu, name: "u" })
            , new APRSSymbol({ key: 'v', value: lv, name: "v" })
            , new APRSSymbol({ key: 'w', value: lw, name: "w" })
            , new APRSSymbol({ key: 'x', value: lx, name: "x" })
            , new APRSSymbol({ key: 'y', value: ly, name: "y" })
            , new APRSSymbol({ key: 'z', value: lz, name: "z" })
            , new APRSSymbol({ key: 'A', value: A, name: "A" })
            , new APRSSymbol({ key: 'B', value: B, name: "B" })
            , new APRSSymbol({ key: 'C', value: C, name: "C" })
            , new APRSSymbol({ key: 'D', value: D, name: "D" })
            , new APRSSymbol({ key: 'E', value: E, name: "E" })
            , new APRSSymbol({ key: 'F', value: F, name: "F" })
            , new APRSSymbol({ key: 'G', value: G, name: "G" })
            , new APRSSymbol({ key: 'H', value: H, name: "H" })
            , new APRSSymbol({ key: 'I', value: I, name: "I" })
            , new APRSSymbol({ key: 'J', value: J, name: "J" })
            , new APRSSymbol({ key: 'K', value: K, name: "K" })
            , new APRSSymbol({ key: 'L', value: L, name: "L" })
            , new APRSSymbol({ key: 'M', value: M, name: "M" })
            , new APRSSymbol({ key: 'N', value: N, name: "N" })
            , new APRSSymbol({ key: 'O', value: O, name: "O" })
            , new APRSSymbol({ key: 'P', value: P, name: "P" })
            , new APRSSymbol({ key: 'Q', value: Q, name: "Q" })
            , new APRSSymbol({ key: 'R', value: R, name: "R" })
            , new APRSSymbol({ key: 'S', value: S, name: "S" })
            , new APRSSymbol({ key: 'T', value: T, name: "T" })
            , new APRSSymbol({ key: 'U', value: U, name: "U" })
            , new APRSSymbol({ key: 'V', value: V, name: "V" })
            , new APRSSymbol({ key: 'W', value: W, name: "W" })
            , new APRSSymbol({ key: 'X', value: X, name: "X" })
            , new APRSSymbol({ key: 'Y', value: Y, name: "Y" })
            , new APRSSymbol({ key: 'Z', value: Z, name: "Z" })
            , new APRSSymbol({ key: '!', value: Exclamation, name: "!" })
            , new APRSSymbol({ key: '"', value: dQuote, name: '"' })
            , new APRSSymbol({ key: '#', value: hash, name: "#" })
            , new APRSSymbol({ key: '$', value: dollar, name: "$" })
            , new APRSSymbol({ key: '%', value: pct, name: "%" })
            , new APRSSymbol({ key: '&', value: amp, name: "&" })
            , new APRSSymbol({ key: '\'', value: sQuote, name: "\'" })
            , new APRSSymbol({ key: '(', value: oParen, name: "(" })
            , new APRSSymbol({ key: ')', value: cParen, name: ")" })
            , new APRSSymbol({ key: '*', value: asterisk, name: "*" })
            , new APRSSymbol({ key: '+', value: plus, name: "+" })
            , new APRSSymbol({ key: ',', value: comma, name: "," })
            , new APRSSymbol({ key: '-', value: dash, name: "-" })
            , new APRSSymbol({ key: '.', value: period, name: "." })
            , new APRSSymbol({ key: '/', value: fSlash, name: "/" })
            , new APRSSymbol({ key: ':', value: colon, name: ":" })
            , new APRSSymbol({ key: ';', value: sColon, name: ";" })
            , new APRSSymbol({ key: '<', value: oaBracket, name: "<" })
            , new APRSSymbol({ key: '=', value: equal, name: "=" })
            , new APRSSymbol({ key: '>', value: caBracket, name: ">" })
            , new APRSSymbol({ key: '?', value: question, name: "?" })
            , new APRSSymbol({ key: '@', value: at, name: "@"})
            , new APRSSymbol({ key: '[', value: osBracket, name: "[" })
            , new APRSSymbol({ key: '\\', value: bSlash, name: "\\" })
            , new APRSSymbol({ key: ']', value: csBracket, name: "]" })
            , new APRSSymbol({ key: '^', value: caret, name: "^" })
            , new APRSSymbol({ key: '_', value: underscore, name: "_" })
            , new APRSSymbol({ key: '`', value: grave, name: "`" })
            , new APRSSymbol({ key: '{', value: oBracket, name: "{" })
            , new APRSSymbol({ key: '|', value: pipe, name: "|" })
            , new APRSSymbol({ key: '}', value: cBracket, name: "}" })
            , new APRSSymbol({ key: '~', value: tilde, name: "~" })
        ];
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
     * @param symbolTableId string - required
     * @param symbolCode string - optional
     */
    public GetAPRSSymbol(symbolCode: string, symbolTableId?: string): any {
        var retVal: any = {};
        var key = '';

        // lets try to make sure we only get 1 result here
        if(!StringUtil.IsNullOrWhiteSpace(symbolTableId) && symbolTableId === '/') {
            retVal['symbol'] = this.GetSymbolByKey(symbolTableId + symbolCode);
        } else {
            retVal['symbol'] = this.GetSymbolByKey(symbolCode);
        }

        retVal['overlay'] = this.GetOverlay(symbolTableId);

        return retVal;
    }

    public GetOverlays(): APRSSymbol[] {
        return this.overlays;
    }

    public GetSymbols(): APRSSymbol[] {
        return this.symbols
    }

    /**
     * @param key String - Table symbol + Symbol Code
     *
     * @returns APRSSymbol - If not found, it will return a crosshair symbol
     */
    public GetSymbolByKey(key: string): APRSSymbol {
        var retVal = this.symbols.find(x => x.key == key);

        if(retVal == null) {
            retVal = this.CROSSHAIR;
        }

        return retVal;
    }
}