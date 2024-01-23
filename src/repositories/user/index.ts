import appConfig from '@/config/app-config';
import { DBVendor } from '@/repositories/user/types';
import UserRepositoryFactory from './UserRepositoryFactory';

const vendor = appConfig.CONFIG_DB_VENDOR as DBVendor || DBVendor.Test;

const userRepository = new UserRepositoryFactory(vendor).create();

export default userRepository;
