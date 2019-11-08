import { Container } from 'inversify';
import { IStationSettings } from './src/station-settings/IStationSettings';
import { StationSettings } from './src/station-settings/StationSettings';
import TYPES from './src/Types';

const EngineContainer = new Container();

EngineContainer.bind<IStationSettings>(TYPES.STATION_SETTINGS).to(StationSettings).inSingletonScope();

export { EngineContainer };