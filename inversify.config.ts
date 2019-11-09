import { ConnectionManager } from './src/connection-settings/ConnectionManager';
import { Container } from 'inversify';
import { IConnectionManager } from './src/connection-settings/IConnectionManager';
import { IStationSettings } from './src/station-settings/IStationSettings';
import { StationSettings } from './src/station-settings/StationSettings';
import TYPES from './src/Types';

const EngineContainer = new Container();

EngineContainer.bind<IConnectionManager>(TYPES.CONNECTION_MANAGER).to(ConnectionManager).inSingletonScope();
EngineContainer.bind<IStationSettings>(TYPES.STATION_SETTINGS).to(StationSettings).inSingletonScope();

export { EngineContainer };